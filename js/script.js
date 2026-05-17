// Products Data (Updated with PKR prices)
const products = [
    {
        id: 1,
        name: "Prime Rib Steak",
        price: 8399,
        category: "american",
        description: "Premium aged prime rib with herb butter",
        featured: true,
        initials: "PR"
    },
    {
        id: 2,
        name: "Classic Beef Burger",
        price: 3599,
        category: "fast-food",
        description: "Juicy beef patty with fresh vegetables",
        featured: true,
        initials: "CB"
    },
    {
        id: 3,
        name: "Tandoori Chicken",
        price: 5299,
        category: "desi",
        description: "Traditional clay oven roasted chicken",
        featured: true,
        initials: "TC"
    },
    {
        id: 4,
        name: "Bulgogi Beef",
        price: 5599,
        category: "korean",
        description: "Marinated beef grilled to perfection",
        featured: true,
        initials: "BB"
    },
    {
        id: 5,
        name: "Kung Pao Chicken",
        price: 4199,
        description: "Spicy stir-fried chicken with peanuts",
        category: "chinese",
        featured: false,
        initials: "KC"
    },
    {
        id: 6,
        name: "Filet Mignon",
        price: 10399,
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
    setupDemoLinks();
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
                            <h5 class="text-gold fw-bold">Rs. ${product.price.toLocaleString()}</h5>
                        </div>
                        <p class="card-text text-light">${product.description}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <button class="btn btn-outline-gold btn-sm demo-link">View Details</button>
                            <button class="btn btn-gold btn-sm demo-link">Add to Cart</button>
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

// Demo link functionality - ONLY for buttons and non-functional links
function setupDemoLinks() {
    // Add click handlers to buttons that should show demo message
    const demoButtons = document.querySelectorAll('.demo-link, .btn[onclick*="addToCart"]');
    
    demoButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            showDemoMessage();
        });
    });

    // Handle non-functional links (like #, get directions, etc.)
    const demoLinks = document.querySelectorAll('a[href="#"], a.demo-link');
    demoLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            showDemoMessage();
        });
    });
}

// Show demo message
function showDemoMessage() {
    // Create modal for demo message
    const modalHTML = `
        <div class="modal fade" id="demoModal" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content bg-dark text-white">
                    <div class="modal-header border-secondary">
                        <h5 class="modal-title text-gold">Demo Feature</h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body text-center py-4">
                        <div class="fs-1 mb-3">🚧</div>
                        <h4 class="text-gold mb-3">Just a Demo Link</h4>
                        <p class="mb-0">This is a demonstration website. In a full implementation, this feature would be fully functional.</p>
                    </div>
                    <div class="modal-footer border-secondary">
                        <button type="button" class="btn btn-gold" data-bs-dismiss="modal">Understood</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Add modal to body if not exists
    if (!document.getElementById('demoModal')) {
        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }
    
    // Show modal
    const demoModal = new bootstrap.Modal(document.getElementById('demoModal'));
    demoModal.show();
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