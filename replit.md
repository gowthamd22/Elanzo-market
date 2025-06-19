# Elanzo E-commerce Platform

## Overview

Elanzo is a modern e-commerce website similar to Amazon/Flipkart, designed for the Indian market with prices in INR. The platform provides users with an intuitive shopping experience to browse, search, and purchase products across multiple categories including electronics, fashion, home & kitchen, books, and sports equipment.

## System Architecture

The application follows a simple client-side architecture:

- **Frontend**: Pure HTML, CSS, and JavaScript (no frameworks)
- **Data Layer**: Product catalog stored in JavaScript objects with Indian pricing
- **Deployment**: Static file serving using Python's built-in HTTP server
- **Styling**: Custom CSS with Font Awesome icons and responsive design

This approach was chosen for simplicity and quick deployment, making it ideal for e-commerce prototyping and demonstration purposes.

## Key Components

### Frontend Structure
- **HTML (index.html)**: Defines the e-commerce layout with header navigation, product grid, cart sidebar, and footer
- **CSS (elanzo-styles.css)**: Implements a modern, clean design with responsive layout and smooth transitions
- **JavaScript (elanzo-script.js)**: Handles shopping cart logic, product filtering, search functionality, and user interactions

### Core Features
1. **Product Navigation**: Category-based browsing (Electronics, Fashion, Home & Kitchen, Books, Sports)
2. **Shopping Cart**: Sidebar cart with quantity controls and real-time total calculation
3. **Product Display**: Grid layout with product cards showing prices in INR, ratings, and discounts
4. **Search Functionality**: Real-time search across product catalog
5. **Wishlist Management**: Add/remove products from wishlist with visual feedback
6. **Product Details**: Modal popup with detailed product information and features

### Data Management
- **Product Data (elanzo-data.js)**: Contains structured catalog with 25 products across 5 categories
- **Pricing**: All prices displayed in Indian Rupees (INR) with original/discounted pricing
- **Image Assets**: Uses high-quality stock photos from Unsplash for product images
- **No Persistent Storage**: Cart and wishlist data resets on page refresh (client-side only)

## Data Flow

1. **Application Initialization**: ElanzoApp class initializes and loads featured products
2. **User Interaction**: Events trigger category filtering, cart operations, and product searches
3. **Content Rendering**: JavaScript dynamically updates product grid and cart contents
4. **Shopping Experience**: Real-time cart updates, wishlist management, and product detail modals

The application uses an event-driven architecture where user interactions trigger JavaScript functions that update the shopping UI state.

## External Dependencies

### Third-Party Services
- **Font Awesome 6.0.0**: Icon library for shopping cart, wishlist, and UI elements
- **Unsplash**: High-quality stock images for product photos and category banners

### Runtime Environment
- **Python 3.11**: Used for local development server
- **Node.js 20**: Available but not currently utilized

## Deployment Strategy

The application uses a simple static file serving approach:

- **Development**: Python's built-in HTTP server on port 5000
- **Production**: Same Python HTTP server (suitable for demonstration/prototyping)
- **No Build Process**: Files are served directly without compilation or bundling

This deployment strategy prioritizes simplicity over scalability, making it perfect for rapid e-commerce prototyping and educational purposes. For production use, a more robust web server, database, and payment gateway would be recommended.

## Changelog

```
Changelog:
- June 18, 2025. Created Elanzo e-commerce platform
- June 18, 2025. Fixed XSS vulnerability in previous music app
- June 18, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```