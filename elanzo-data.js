// Elanzo E-commerce Data
const elanzoData = {
    products: [
        // Electronics
        {
            id: 1,
            title: "Samsung Galaxy S24 Ultra (256GB)",
            category: "electronics",
            currentPrice: 124999,
            originalPrice: 139999,
            discount: 11,
            rating: 4.5,
            ratingCount: 1247,
            image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop",
            description: "Experience the pinnacle of smartphone technology with the Samsung Galaxy S24 Ultra. Features a stunning 6.8-inch Dynamic AMOLED display, powerful Snapdragon processor, and revolutionary camera system with 200MP main sensor.",
            features: ["6.8-inch Dynamic AMOLED Display", "256GB Storage", "200MP Camera", "5000mAh Battery", "S Pen Included"],
            inStock: true,
            fastDelivery: true
        },
        {
            id: 2,
            title: "Apple iPhone 15 Pro (128GB)",
            category: "electronics",
            currentPrice: 134900,
            originalPrice: 149900,
            discount: 10,
            rating: 4.7,
            ratingCount: 2156,
            image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop",
            description: "The most advanced iPhone ever with titanium design, A17 Pro chip, and Pro camera system. Capture stunning photos and videos with the new 48MP main camera.",
            features: ["6.1-inch Super Retina XDR Display", "128GB Storage", "A17 Pro Chip", "Pro Camera System", "Titanium Build"],
            inStock: true,
            fastDelivery: true
        },
        {
            id: 3,
            title: "Dell XPS 13 Laptop (Intel i7, 16GB RAM)",
            category: "electronics",
            currentPrice: 89999,
            originalPrice: 109999,
            discount: 18,
            rating: 4.4,
            ratingCount: 892,
            image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
            description: "Ultra-portable laptop with premium build quality. Features 13.4-inch InfinityEdge display, 11th Gen Intel Core i7 processor, and all-day battery life.",
            features: ["13.4-inch FHD+ Display", "Intel Core i7", "16GB RAM", "512GB SSD", "Premium Build Quality"],
            inStock: true,
            fastDelivery: false
        },
        {
            id: 4,
            title: "Sony WH-1000XM5 Wireless Headphones",
            category: "electronics",
            currentPrice: 24990,
            originalPrice: 29990,
            discount: 17,
            rating: 4.6,
            ratingCount: 1534,
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
            description: "Industry-leading noise cancellation with premium sound quality. Enjoy up to 30 hours of battery life and crystal-clear hands-free calling.",
            features: ["Industry-leading Noise Cancellation", "30-hour Battery Life", "Premium Sound Quality", "Touch Controls", "Quick Charge"],
            inStock: true,
            fastDelivery: true
        },
        {
            id: 5,
            title: "Apple iPad Air (64GB, Wi-Fi)",
            category: "electronics",
            currentPrice: 54900,
            originalPrice: 59900,
            discount: 8,
            rating: 4.5,
            ratingCount: 967,
            image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop",
            description: "Powerful, versatile, and designed for creativity. Features the A14 Bionic chip, 10.9-inch Liquid Retina display, and compatibility with Apple Pencil.",
            features: ["10.9-inch Liquid Retina Display", "A14 Bionic Chip", "64GB Storage", "All-day Battery", "Apple Pencil Compatible"],
            inStock: true,
            fastDelivery: true
        },

        // Fashion
        {
            id: 6,
            title: "Levi's Men's 511 Slim Jeans",
            category: "fashion",
            currentPrice: 2499,
            originalPrice: 3999,
            discount: 38,
            rating: 4.3,
            ratingCount: 2341,
            image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop",
            description: "Classic slim-fit jeans with a modern twist. Made from premium denim with just the right amount of stretch for comfort and style.",
            features: ["Slim Fit", "Premium Denim", "Stretch Fabric", "Classic 5-pocket Design", "Machine Washable"],
            inStock: true,
            fastDelivery: true
        },
        {
            id: 7,
            title: "Nike Air Max 270 Running Shoes",
            category: "fashion",
            currentPrice: 7995,
            originalPrice: 10995,
            discount: 27,
            rating: 4.4,
            ratingCount: 1876,
            image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop",
            description: "Iconic running shoes with maximum comfort. Features large Max Air unit in the heel and breathable mesh upper for all-day comfort.",
            features: ["Max Air Cushioning", "Breathable Mesh Upper", "Rubber Outsole", "Iconic Design", "All-day Comfort"],
            inStock: true,
            fastDelivery: true
        },
        {
            id: 8,
            title: "Zara Women's Blazer - Navy Blue",
            category: "fashion",
            currentPrice: 3999,
            originalPrice: 5999,
            discount: 33,
            rating: 4.2,
            ratingCount: 654,
            image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop",
            description: "Elegant navy blue blazer perfect for professional and casual wear. Tailored fit with premium fabric and sophisticated design.",
            features: ["Tailored Fit", "Premium Fabric", "Professional Look", "Versatile Styling", "Quality Construction"],
            inStock: true,
            fastDelivery: false
        },
        {
            id: 9,
            title: "Adidas Originals Hoodie - Black",
            category: "fashion",
            currentPrice: 2799,
            originalPrice: 3999,
            discount: 30,
            rating: 4.5,
            ratingCount: 1432,
            image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
            description: "Classic hoodie with iconic Adidas styling. Made from soft cotton blend fabric with adjustable hood and kangaroo pocket.",
            features: ["Cotton Blend Fabric", "Adjustable Hood", "Kangaroo Pocket", "Iconic Adidas Branding", "Comfortable Fit"],
            inStock: true,
            fastDelivery: true
        },
        {
            id: 10,
            title: "Ray-Ban Aviator Classic Sunglasses",
            category: "fashion",
            currentPrice: 8999,
            originalPrice: 12999,
            discount: 31,
            rating: 4.6,
            ratingCount: 987,
            image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=400&fit=crop",
            description: "Timeless aviator sunglasses with premium quality and UV protection. Features gold-tone frame and crystal green lenses.",
            features: ["UV Protection", "Premium Quality", "Gold-tone Frame", "Crystal Green Lenses", "Iconic Design"],
            inStock: true,
            fastDelivery: true
        },

        // Home & Kitchen
        {
            id: 11,
            title: "Philips Air Fryer HD9252/90 (4.1L)",
            category: "home",
            currentPrice: 8999,
            originalPrice: 12999,
            discount: 31,
            rating: 4.4,
            ratingCount: 1765,
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
            description: "Healthy cooking made easy with Rapid Air technology. Cook with up to 90% less fat while maintaining great taste and texture.",
            features: ["4.1L Capacity", "Rapid Air Technology", "90% Less Fat", "8 Preset Programs", "Easy to Clean"],
            inStock: true,
            fastDelivery: true
        },
        {
            id: 12,
            title: "Prestige Induction Cooktop (2000W)",
            category: "home",
            currentPrice: 2499,
            originalPrice: 3999,
            discount: 38,
            rating: 4.2,
            ratingCount: 2134,
            image: "https://images.unsplash.com/photo-1556909114-4f960bd1d7a5?w=400&h=400&fit=crop",
            description: "Efficient induction cooktop with touch controls and safety features. Perfect for modern kitchens with energy-saving technology.",
            features: ["2000W Power", "Touch Controls", "Safety Features", "Energy Efficient", "Easy to Clean"],
            inStock: true,
            fastDelivery: true
        },
        {
            id: 13,
            title: "IKEA Hemnes Bed Frame (Queen Size)",
            category: "home",
            currentPrice: 14999,
            originalPrice: 19999,
            discount: 25,
            rating: 4.3,
            ratingCount: 543,
            image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=400&h=400&fit=crop",
            description: "Solid wood bed frame with timeless design. Features under-bed storage space and durable construction for long-lasting use.",
            features: ["Solid Wood Construction", "Under-bed Storage", "Queen Size", "Timeless Design", "Easy Assembly"],
            inStock: true,
            fastDelivery: false
        },
        {
            id: 14,
            title: "Bajaj Mixer Grinder (750W, 3 Jars)",
            category: "home",
            currentPrice: 3499,
            originalPrice: 4999,
            discount: 30,
            rating: 4.1,
            ratingCount: 1876,
            image: "https://images.unsplash.com/photo-1556909114-7c5b7d4d1b5f?w=400&h=400&fit=crop",
            description: "Powerful mixer grinder with 3 stainless steel jars. Perfect for grinding, mixing, and making chutneys with superior performance.",
            features: ["750W Motor", "3 Stainless Steel Jars", "Overload Protection", "Ergonomic Design", "2 Year Warranty"],
            inStock: true,
            fastDelivery: true
        },
        {
            id: 15,
            title: "Godrej 190L Single Door Refrigerator",
            category: "home",
            currentPrice: 12999,
            originalPrice: 16999,
            discount: 24,
            rating: 4.0,
            ratingCount: 876,
            image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=400&h=400&fit=crop",
            description: "Energy-efficient refrigerator with spacious interior and modern design. Features direct cooling technology and vegetable crisper.",
            features: ["190L Capacity", "Direct Cooling", "Energy Efficient", "Vegetable Crisper", "1 Year Warranty"],
            inStock: true,
            fastDelivery: false
        },

        // Books
        {
            id: 16,
            title: "The Psychology of Money by Morgan Housel",
            category: "books",
            currentPrice: 299,
            originalPrice: 399,
            discount: 25,
            rating: 4.7,
            ratingCount: 3245,
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
            description: "Timeless lessons on wealth, greed, and happiness. Learn how to make better financial decisions through engaging stories and insights.",
            features: ["Bestselling Author", "Financial Wisdom", "Easy to Read", "Practical Insights", "200+ Pages"],
            inStock: true,
            fastDelivery: true
        },
        {
            id: 17,
            title: "Atomic Habits by James Clear",
            category: "books",
            currentPrice: 349,
            originalPrice: 499,
            discount: 30,
            rating: 4.8,
            ratingCount: 5432,
            image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=400&fit=crop",
            description: "The life-changing million-copy bestseller. Learn how tiny changes can lead to remarkable results with proven strategies.",
            features: ["Million-copy Bestseller", "Proven Strategies", "Life-changing", "Practical Tips", "320 Pages"],
            inStock: true,
            fastDelivery: true
        },
        {
            id: 18,
            title: "Sapiens by Yuval Noah Harari",
            category: "books",
            currentPrice: 399,
            originalPrice: 599,
            discount: 33,
            rating: 4.6,
            ratingCount: 2876,
            image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop",
            description: "A brief history of humankind. Explore how Homo sapiens came to dominate the world and what it means for our future.",
            features: ["International Bestseller", "Historical Insights", "Thought-provoking", "Award-winning", "450+ Pages"],
            inStock: true,
            fastDelivery: true
        },
        {
            id: 19,
            title: "The Alchemist by Paulo Coelho",
            category: "books",
            currentPrice: 199,
            originalPrice: 299,
            discount: 33,
            rating: 4.5,
            ratingCount: 4567,
            image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=400&fit=crop",
            description: "A magical story about following your dreams. Join Santiago on his journey to find treasure and discover life's most important lessons.",
            features: ["Classic Literature", "Inspirational Story", "Worldwide Bestseller", "Easy Read", "160 Pages"],
            inStock: true,
            fastDelivery: true
        },
        {
            id: 20,
            title: "Think and Grow Rich by Napoleon Hill",
            category: "books",
            currentPrice: 249,
            originalPrice: 399,
            discount: 38,
            rating: 4.4,
            ratingCount: 2134,
            image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&h=400&fit=crop",
            description: "The classic guide to success and wealth building. Learn the principles that have helped millions achieve their goals and dreams.",
            features: ["Success Principles", "Wealth Building", "Classic Guide", "Proven Methods", "250+ Pages"],
            inStock: true,
            fastDelivery: true
        },

        // Sports
        {
            id: 21,
            title: "Yonex Arcsaber 11 Badminton Racket",
            category: "sports",
            currentPrice: 8999,
            originalPrice: 12999,
            discount: 31,
            rating: 4.5,
            ratingCount: 876,
            image: "https://images.unsplash.com/photo-1626224583764-f87c3fb5c9e2?w=400&h=400&fit=crop",
            description: "Professional badminton racket with superior control and power. Used by international players for competitive matches.",
            features: ["Professional Grade", "Superior Control", "Lightweight Design", "High Tension", "Includes Cover"],
            inStock: true,
            fastDelivery: true
        },
        {
            id: 22,
            title: "Nivia Storm Football (Size 5)",
            category: "sports",
            currentPrice: 999,
            originalPrice: 1499,
            discount: 33,
            rating: 4.2,
            ratingCount: 1234,
            image: "https://images.unsplash.com/photo-1486286701208-1d58e9338013?w=400&h=400&fit=crop",
            description: "High-quality football suitable for professional matches and training. Made with durable synthetic leather and perfect for all surfaces.",
            features: ["Size 5 Official", "Synthetic Leather", "All Surface", "Durable Construction", "FIFA Approved"],
            inStock: true,
            fastDelivery: true
        },
        {
            id: 23,
            title: "Adidas Gym Bag - Large Size",
            category: "sports",
            currentPrice: 1999,
            originalPrice: 2999,
            discount: 33,
            rating: 4.3,
            ratingCount: 654,
            image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
            description: "Spacious gym bag with multiple compartments. Perfect for carrying workout gear, sports equipment, and daily essentials.",
            features: ["Large Capacity", "Multiple Compartments", "Durable Material", "Comfortable Straps", "Water Resistant"],
            inStock: true,
            fastDelivery: true
        },
        {
            id: 24,
            title: "Domyos Yoga Mat (6mm thickness)",
            category: "sports",
            currentPrice: 899,
            originalPrice: 1299,
            discount: 31,
            rating: 4.4,
            ratingCount: 987,
            image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop",
            description: "Premium yoga mat with excellent grip and cushioning. Perfect for yoga, pilates, and fitness exercises with non-slip surface.",
            features: ["6mm Thickness", "Non-slip Surface", "Excellent Grip", "Easy to Clean", "Carry Strap Included"],
            inStock: true,
            fastDelivery: true
        },
        {
            id: 25,
            title: "Adjustable Dumbbells Set (20kg)",
            category: "sports",
            currentPrice: 3999,
            originalPrice: 5999,
            discount: 33,
            rating: 4.1,
            ratingCount: 543,
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
            description: "Versatile dumbbell set for home workouts. Adjustable weights from 2.5kg to 20kg per dumbbell with secure locking mechanism.",
            features: ["Adjustable Weight", "20kg Capacity", "Secure Locking", "Space-saving", "Durable Construction"],
            inStock: true,
            fastDelivery: false
        }
    ],

    categories: [
        { id: 'all', name: 'All Products', icon: 'fas fa-th-large' },
        { id: 'electronics', name: 'Electronics', icon: 'fas fa-laptop' },
        { id: 'fashion', name: 'Fashion', icon: 'fas fa-tshirt' },
        { id: 'home', name: 'Home & Kitchen', icon: 'fas fa-home' },
        { id: 'books', name: 'Books', icon: 'fas fa-book' },
        { id: 'sports', name: 'Sports', icon: 'fas fa-running' }
    ],

    cart: [],
    wishlist: [],

    // Helper functions
    getProductById: function(id) {
        return this.products.find(product => product.id === id);
    },

    getProductsByCategory: function(category) {
        if (category === 'all') return this.products;
        return this.products.filter(product => product.category === category);
    },

    searchProducts: function(query) {
        if (!query.trim()) return [];
        const searchTerm = query.toLowerCase();
        return this.products.filter(product => 
            product.title.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm)
        );
    },

    formatPrice: function(price) {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(price);
    },

    addToCart: function(productId, quantity = 1) {
        const product = this.getProductById(productId);
        if (!product) return false;

        const existingItem = this.cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.cart.push({
                ...product,
                quantity: quantity
            });
        }
        return true;
    },

    removeFromCart: function(productId) {
        this.cart = this.cart.filter(item => item.id !== productId);
    },

    updateCartQuantity: function(productId, quantity) {
        const item = this.cart.find(item => item.id === productId);
        if (item) {
            if (quantity <= 0) {
                this.removeFromCart(productId);
            } else {
                item.quantity = quantity;
            }
        }
    },

    getCartTotal: function() {
        return this.cart.reduce((total, item) => total + (item.currentPrice * item.quantity), 0);
    },

    getCartItemCount: function() {
        return this.cart.reduce((count, item) => count + item.quantity, 0);
    },

    addToWishlist: function(productId) {
        const product = this.getProductById(productId);
        if (product && !this.wishlist.find(item => item.id === productId)) {
            this.wishlist.push(product);
            return true;
        }
        return false;
    },

    removeFromWishlist: function(productId) {
        this.wishlist = this.wishlist.filter(item => item.id !== productId);
    },

    isInWishlist: function(productId) {
        return this.wishlist.some(item => item.id === productId);
    }
};