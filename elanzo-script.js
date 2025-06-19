// Elanzo E-commerce App
class ElanzoApp {
    constructor() {
        this.currentCategory = 'all';
        this.currentSort = 'featured';
        this.displayedProducts = 12;
        this.searchQuery = '';
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.loadProducts();
        this.updateCartUI();
        this.updateWishlistUI();
    }

    setupEventListeners() {
        // Search functionality
        const searchInput = document.getElementById('search-input');
        const searchBtn = document.getElementById('search-btn');
        
        searchInput.addEventListener('input', (e) => {
            this.handleSearch(e.target.value);
        });
        
        searchBtn.addEventListener('click', () => {
            this.handleSearch(searchInput.value);
        });

        // Category navigation
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const category = e.target.dataset.category;
                this.filterByCategory(category);
                
                // Update active nav link
                document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                e.target.classList.add('active');
            });
        });

        // Category cards
        document.querySelectorAll('.category-card').forEach(card => {
            card.addEventListener('click', (e) => {
                const category = e.currentTarget.dataset.category;
                this.filterByCategory(category);
                
                // Update active nav link
                document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                document.querySelector(`[data-category="${category}"]`).classList.add('active');
            });
        });

        // Sort filter
        const sortFilter = document.getElementById('sort-filter');
        sortFilter.addEventListener('change', (e) => {
            this.currentSort = e.target.value;
            this.loadProducts();
        });

        // Load more button
        const loadMoreBtn = document.getElementById('load-more-btn');
        loadMoreBtn.addEventListener('click', () => {
            this.displayedProducts += 12;
            this.loadProducts();
        });

        // Cart sidebar
        const cartIcon = document.querySelector('.cart');
        const closeCart = document.getElementById('close-cart');
        const cartSidebar = document.getElementById('cart-sidebar');
        const overlay = document.getElementById('overlay');

        cartIcon.addEventListener('click', () => {
            cartSidebar.classList.add('open');
            overlay.classList.add('show');
        });

        closeCart.addEventListener('click', () => {
            cartSidebar.classList.remove('open');
            overlay.classList.remove('show');
        });

        overlay.addEventListener('click', () => {
            cartSidebar.classList.remove('open');
            overlay.classList.remove('show');
            this.closeModal();
        });

        // Modal close
        const closeModal = document.getElementById('close-modal');
        closeModal.addEventListener('click', () => {
            this.closeModal();
        });
    }

    handleSearch(query) {
        this.searchQuery = query.trim();
        this.displayedProducts = 12;
        this.loadProducts();
    }

    filterByCategory(category) {
        this.currentCategory = category;
        this.searchQuery = '';
        this.displayedProducts = 12;
        document.getElementById('search-input').value = '';
        this.loadProducts();
    }

    loadProducts() {
        let products = [];
        
        if (this.searchQuery) {
            products = elanzoData.searchProducts(this.searchQuery);
        } else {
            products = elanzoData.getProductsByCategory(this.currentCategory);
        }

        // Sort products
        products = this.sortProducts(products);

        // Display products
        this.displayProducts(products.slice(0, this.displayedProducts));

        // Show/hide load more button
        const loadMoreBtn = document.getElementById('load-more-btn');
        if (products.length <= this.displayedProducts) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'block';
        }
    }

    sortProducts(products) {
        switch (this.currentSort) {
            case 'price-low':
                return products.sort((a, b) => a.currentPrice - b.currentPrice);
            case 'price-high':
                return products.sort((a, b) => b.currentPrice - a.currentPrice);
            case 'rating':
                return products.sort((a, b) => b.rating - a.rating);
            default:
                return products;
        }
    }

    displayProducts(products) {
        const productsGrid = document.getElementById('products-grid');
        productsGrid.innerHTML = '';

        products.forEach(product => {
            const productCard = this.createProductCard(product);
            productsGrid.appendChild(productCard);
        });
    }

    createProductCard(product) {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <button class="wishlist-btn ${elanzoData.isInWishlist(product.id) ? 'active' : ''}" data-product-id="${product.id}">
                <i class="fas fa-heart"></i>
            </button>
            <img src="${product.image}" alt="${this.escapeHtml(product.title)}" class="product-image">
            <div class="product-info">
                <h3 class="product-title">${this.escapeHtml(product.title)}</h3>
                <div class="product-price">
                    <span class="current-price">₹${product.currentPrice.toLocaleString('en-IN')}</span>
                    <span class="original-price">₹${product.originalPrice.toLocaleString('en-IN')}</span>
                    <span class="discount">${product.discount}% OFF</span>
                </div>
                <div class="product-rating">
                    <div class="rating-stars">
                        ${this.generateStars(product.rating)}
                    </div>
                    <span class="rating-count">(${product.ratingCount.toLocaleString('en-IN')})</span>
                </div>
                <div class="product-actions">
                    <button class="btn btn-primary add-to-cart-btn" data-product-id="${product.id}">
                        Add to Cart
                    </button>
                    <button class="btn btn-secondary view-details-btn" data-product-id="${product.id}">
                        View Details
                    </button>
                </div>
            </div>
        `;

        // Add event listeners
        const wishlistBtn = card.querySelector('.wishlist-btn');
        const addToCartBtn = card.querySelector('.add-to-cart-btn');
        const viewDetailsBtn = card.querySelector('.view-details-btn');

        wishlistBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggleWishlist(product.id);
        });

        addToCartBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.addToCart(product.id);
        });

        viewDetailsBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.showProductDetails(product.id);
        });

        return card;
    }

    generateStars(rating) {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        let starsHTML = '';

        for (let i = 0; i < fullStars; i++) {
            starsHTML += '<i class="fas fa-star"></i>';
        }

        if (hasHalfStar) {
            starsHTML += '<i class="fas fa-star-half-alt"></i>';
        }

        return starsHTML;
    }

    toggleWishlist(productId) {
        const isInWishlist = elanzoData.isInWishlist(productId);
        
        if (isInWishlist) {
            elanzoData.removeFromWishlist(productId);
        } else {
            elanzoData.addToWishlist(productId);
        }

        this.updateWishlistUI();
        this.loadProducts(); // Refresh to update wishlist button states
    }

    addToCart(productId) {
        const success = elanzoData.addToCart(productId);
        if (success) {
            this.updateCartUI();
            this.showNotification('Product added to cart!', 'success');
        }
    }

    showProductDetails(productId) {
        const product = elanzoData.getProductById(productId);
        if (!product) return;

        const modal = document.getElementById('product-modal');
        const modalBody = document.getElementById('modal-body');
        const overlay = document.getElementById('overlay');

        modalBody.innerHTML = `
            <div class="product-detail">
                <div class="product-detail-image-container">
                    <img src="${product.image}" alt="${this.escapeHtml(product.title)}" class="product-detail-image">
                    ${product.fastDelivery ? '<div class="fast-delivery-badge">Fast Delivery</div>' : ''}
                </div>
                <div class="product-detail-info">
                    <h2>${this.escapeHtml(product.title)}</h2>
                    <div class="product-detail-price">
                        <span class="current-price">₹${product.currentPrice.toLocaleString('en-IN')}</span>
                        <span class="original-price">₹${product.originalPrice.toLocaleString('en-IN')}</span>
                        <span class="discount">${product.discount}% OFF</span>
                    </div>
                    <div class="product-rating">
                        <div class="rating-stars">
                            ${this.generateStars(product.rating)}
                        </div>
                        <span class="rating-count">(${product.ratingCount.toLocaleString('en-IN')} reviews)</span>
                    </div>
                    <div class="product-description">
                        <p>${this.escapeHtml(product.description)}</p>
                    </div>
                    <div class="product-features">
                        <h4>Key Features:</h4>
                        <ul>
                            ${product.features.map(feature => `<li>${this.escapeHtml(feature)}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="product-detail-actions">
                        <button class="btn btn-primary" onclick="elanzoApp.addToCart(${product.id}); elanzoApp.closeModal();">
                            Add to Cart
                        </button>
                        <button class="btn btn-secondary" onclick="elanzoApp.toggleWishlist(${product.id}); elanzoApp.closeModal();">
                            ${elanzoData.isInWishlist(product.id) ? 'Remove from Wishlist' : 'Add to Wishlist'}
                        </button>
                    </div>
                </div>
            </div>
        `;

        modal.classList.add('show');
        overlay.classList.add('show');
    }

    closeModal() {
        const modal = document.getElementById('product-modal');
        const overlay = document.getElementById('overlay');
        modal.classList.remove('show');
        overlay.classList.remove('show');
    }

    updateCartUI() {
        const cartCount = document.getElementById('cart-count');
        const cartItems = document.getElementById('cart-items');
        const cartTotal = document.getElementById('cart-total');

        cartCount.textContent = elanzoData.getCartItemCount();
        cartTotal.textContent = elanzoData.getCartTotal().toLocaleString('en-IN');

        cartItems.innerHTML = '';

        if (elanzoData.cart.length === 0) {
            cartItems.innerHTML = '<div class="empty-cart">Your cart is empty</div>';
            return;
        }

        elanzoData.cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${this.escapeHtml(item.title)}" class="cart-item-image">
                <div class="cart-item-info">
                    <div class="cart-item-title">${this.escapeHtml(item.title)}</div>
                    <div class="cart-item-price">₹${item.currentPrice.toLocaleString('en-IN')}</div>
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="elanzoApp.updateCartQuantity(${item.id}, ${item.quantity - 1})">-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="quantity-btn" onclick="elanzoApp.updateCartQuantity(${item.id}, ${item.quantity + 1})">+</button>
                        <button class="remove-item" onclick="elanzoApp.removeFromCart(${item.id})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            `;
            cartItems.appendChild(cartItem);
        });
    }

    updateCartQuantity(productId, quantity) {
        elanzoData.updateCartQuantity(productId, quantity);
        this.updateCartUI();
    }

    removeFromCart(productId) {
        elanzoData.removeFromCart(productId);
        this.updateCartUI();
        this.showNotification('Product removed from cart', 'info');
    }

    updateWishlistUI() {
        const wishlistCount = document.getElementById('wishlist-count');
        wishlistCount.textContent = elanzoData.wishlist.length;
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
            color: white;
            padding: 15px 25px;
            border-radius: 8px;
            z-index: 10000;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            animation: slideIn 0.3s ease;
        `;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .empty-cart {
        text-align: center;
        padding: 40px 20px;
        color: #666;
        font-size: 16px;
    }
    
    .fast-delivery-badge {
        position: absolute;
        top: 15px;
        left: 15px;
        background: #4CAF50;
        color: white;
        padding: 5px 10px;
        border-radius: 4px;
        font-size: 12px;
        font-weight: bold;
    }
    
    .product-detail-image-container {
        position: relative;
    }
    
    .product-features {
        margin-bottom: 30px;
    }
    
    .product-features h4 {
        margin-bottom: 10px;
        color: #333;
    }
    
    .product-features ul {
        list-style: none;
        padding: 0;
    }
    
    .product-features li {
        padding: 5px 0;
        border-bottom: 1px solid #f0f0f0;
        color: #666;
    }
    
    .product-features li:before {
        content: "✓";
        color: #4CAF50;
        font-weight: bold;
        margin-right: 10px;
    }
    
    .remove-item {
        background: none;
        border: none;
        color: #ff6b35;
        cursor: pointer;
        margin-left: 10px;
        padding: 5px;
    }
    
    .remove-item:hover {
        color: #e55a2b;
    }
`;
document.head.appendChild(style);

// Initialize the app
let elanzoApp;
document.addEventListener('DOMContentLoaded', () => {
    elanzoApp = new ElanzoApp();
});