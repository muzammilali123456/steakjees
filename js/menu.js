// Extended products data for menu page (Updated with PKR prices)
const allProducts = [
    ...products, // Include featured products
    {
        id: 7, name: "Crispy Chicken Wings", price: 4199, category: "fast-food",
        description: "Golden crispy wings with your choice of sauce", initials: "CW"
    },
    {
        id: 8, name: "Lamb Biryani", price: 4799, category: "desi",
        description: "Fragrant rice with tender lamb and aromatic spices", initials: "LB"
    },
    {
        id: 9, name: "Beef Chow Mein", price: 3899, category: "chinese", 
        description: "Stir-fried noodles with beef and fresh vegetables", initials: "BC"
    },
    {
        id: 10, name: "Kimchi Fried Rice", price: 3399, category: "korean",
        description: "Spicy fermented cabbage with fried rice", initials: "KR"
    },
    {
        id: 11, name: "BBQ Ribs Platter", price: 6999, category: "american",
        description: "Fall-off-the-bone pork ribs with BBQ sauce", initials: "BR"
    },
    {
        id: 12, name: "Loaded Fries Supreme", price: 2799, category: "fast-food",
        description: "Crispy fries loaded with cheese, bacon, and herbs", initials: "LF"
    },
    {
        id: 13, name: "Butter Chicken", price: 4499, category: "desi",
        description: "Creamy tomato-based curry with tender chicken", initials: "BC"
    },
    {
        id: 14, name: "Sweet and Sour Pork", price: 3599, category: "chinese",
        description: "Crispy pork in tangy sweet and sour sauce", initials: "SP"
    },
    {
        id: 15, name: "Bibimbap", price: 4499, category: "korean",
        description: "Mixed rice with vegetables, meat, and egg", initials: "BB"
    },
    {
        id: 16, name: "New York Strip", price: 9199, category: "american",
        description: "Classic New York strip steak, perfectly grilled", initials: "NS"
    },
    {
        id: 17, name: "BBQ Bacon Cheeseburger", price: 4499, category: "fast-food",
        description: "Smoky BBQ flavor with crispy bacon and melted cheese", initials: "BB"
    },
    {
        id: 18, name: "Seekh Kebab", price: 3899, category: "desi",
        description: "Minced meat kebabs with traditional spices", initials: "SK"
    },
    {
        id: 19, name: "Dim Sum Platter", price: 4799, category: "chinese",
        description: "Assorted steamed dumplings and buns", initials: "DS"
    },
    {
        id: 20, name: "Korean BBQ Short Ribs", price: 6499, category: "korean",
        description: "Galbi-marinated beef short ribs", initials: "SR"
    }
];

// Menu page functionality
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('productsGrid')) {
        loadAllProducts();
        setupFilterButtons();
        setupDemoLinks();
    }
});

// Load all products for menu page
function loadAllProducts() {
    const container = document.getElementById('productsGrid');
    if (!container) return;

    container.innerHTML = '';
    allProducts.forEach(product => {
        const productHTML = `
            <div class="col-md-6 col-lg-4 col-xl-3 fade-in" data-category="${product.category}">
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

// Filter products by category
window.filterProducts = function(category) {
    const products = document.querySelectorAll('[data-category]');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    // Update active button
    filterButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.toLowerCase().includes(category) || (category === 'all' && btn.textContent === 'All Menu')) {
            btn.classList.add('active');
        }
    });
    
    // Show/hide products
    products.forEach(product => {
        if (category === 'all' || product.getAttribute('data-category') === category) {
            product.style.display = 'block';
            product.classList.add('fade-in');
        } else {
            product.style.display = 'none';
        }
    });
}

// Search products
window.searchProducts = function(query) {
    const products = document.querySelectorAll('[data-category]');
    const lowerQuery = query.toLowerCase();
    
    products.forEach(product => {
        const productName = product.querySelector('.card-title').textContent.toLowerCase();
        const productDesc = product.querySelector('.card-text').textContent.toLowerCase();
        
        if (productName.includes(lowerQuery) || productDesc.includes(lowerQuery)) {
            product.style.display = 'block';
            product.classList.add('fade-in');
        } else {
            product.style.display = 'none';
        }
    });
}

// Setup filter buttons
function setupFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            filterButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

// Setup demo links for menu page - ONLY for buttons
function setupDemoLinks() {
    const demoButtons = document.querySelectorAll('.demo-link');
    demoButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            showDemoMessage();
        });
    });
}