// Products Data
const products = [
    {
        id: 1,
        name: "Prime Rib Steak",
        price: 29.99,
        category: "american",
        description: "Premium aged prime rib with herb butter",
        featured: true,
        initials: "PR"
    },
    {
        id: 2,
        name: "Classic Beef Burger",
        price: 12.99,
        category: "fast-food",
        description: "Juicy beef patty with fresh vegetables",
        featured: true,
        initials: "CB"
    },
    {
        id: 3,
        name: "Tandoori Chicken",
        price: 18.99,
        category: "desi",
        description: "Traditional clay oven roasted chicken",
        featured: true,
        initials: "TC"
    },
    {
        id: 4,
        name: "Bulgogi Beef",
        price: 19.99,
        category: "korean",
        description: "Marinated beef grilled to perfection",
        featured: true,
        initials: "BB"
    },
    {
        id: 5,
        name: "Kung Pao Chicken",
        price: 14.99,
        description: "Spicy stir-fried chicken with peanuts",
        category: "chinese",
        featured: false,
        initials: "KC"
    },
    {
        id: 6,
        name: "Filet Mignon",
        price: 36.99,
        category: "american",
        description: "Tender filet mignon with red wine reduction",
        featured: true,
        initials: "FM"
    }
];

// Category colors for product cards
const categoryColors = {
    'fast-food': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'desi': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    'chinese': 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    'korean': 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    'american': 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
};

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    loadFeaturedProducts();
    initializeAnimations();
});

// Load featured products on homepage
function loadFeaturedProducts() {
    const container = document.getElementById('featuredProducts');
    if (!container) return;

    const featured = products.filter(product => product.featured);
    
    featured.forEach(product => {
        const productHTML = `
            <div class="col-md-6 col-lg-4 fade-in">
                <div class="card product-card h-100">
                    <div class="position-relative">
                        <div class="product-image" style="background: ${categoryColors[product.category] || '#666'}">
                            ${product.initials}
                        </div>
                        <span class="product-badge">${getCategoryName(product.category)}</span>
                        ${product.featured ? '<span class="featured-badge">Featured</span>' : ''}
                    </div>
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-start mb-3">
                            <h5 class="card-title text-white">${product.name}</h5>
                            <h5 class="text-gold fw-bold">$${product.price}</h5>
                        </div>
                        <p class="card-text text-light">${product.description}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <button class="btn btn-outline-gold btn-sm">View Details</button>
                            <button class="btn btn-gold btn-sm" onclick="addToCart(${product.id})">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += productHTML;
    });
}

// Get category display name
function getCategoryName(category) {
    const names = {
        'fast-food': 'Fast Food',
        'desi': 'Desi Cuisine',
        'chinese': 'Chinese',
        'korean': 'Korean',
        'american': 'American'
    };
    return names[category] || category;
}

// Initialize animations
function initializeAnimations() {
    // Add fade-in animation to elements as they scroll into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    });

    document.querySelectorAll('.product-card, .premium-card').forEach(el => {
        observer.observe(el);
    });
}

// Add to cart function
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        // Show notification
        showNotification(`${product.name} added to cart!`);
    }
}

// Show notification
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'position-fixed top-0 start-50 translate-middle-x mt-5 alert alert-success';
    notification.style.zIndex = '9999';
    notification.innerHTML = `
        <div class="d-flex align-items-center">
            <span>${message}</span>
            <button type="button" class="btn-close ms-3" onclick="this.parentElement.parentElement.remove()"></button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 3000);
}

// Filter products (for menu page)
function filterProducts(category) {
    if (typeof window.filterProducts === 'function') {
        window.filterProducts(category);
    }
}

// Search products (for menu page)
function searchProducts(query) {
    if (typeof window.searchProducts === 'function') {
        window.searchProducts(query);
    }
}