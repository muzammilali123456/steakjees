// Contact form functionality
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            // Validate form
            if (validateForm(formData)) {
                // Show demo message instead of actual submission
                showDemoMessage();
            }
        });
    }

    // Setup demo links for non-functional elements only
    setupContactDemoLinks();
});

// Form validation
function validateForm(data) {
    if (!data.name.trim()) {
        showAlert('Please enter your name.', 'error');
        return false;
    }
    
    if (!data.email.trim() || !isValidEmail(data.email)) {
        showAlert('Please enter a valid email address.', 'error');
        return false;
    }
    
    if (!data.subject.trim()) {
        showAlert('Please enter a subject.', 'error');
        return false;
    }
    
    if (!data.message.trim()) {
        showAlert('Please enter your message.', 'error');
        return false;
    }
    
    return true;
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Setup demo links for contact page - ONLY for non-functional elements
function setupContactDemoLinks() {
    const demoLinks = document.querySelectorAll('.demo-link');
    demoLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            showDemoMessage();
        });
    });
}

// Show alert message
function showAlert(message, type) {
    // Remove existing alerts
    const existingAlert = document.querySelector('.form-alert');
    if (existingAlert) {
        existingAlert.remove();
    }
    
    // Create alert element
    const alert = document.createElement('div');
    alert.className = `form-alert alert alert-${type === 'error' ? 'danger' : 'success'} alert-dismissible fade show`;
    alert.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    // Insert alert
    const contactForm = document.getElementById('contactForm');
    contactForm.insertBefore(alert, contactForm.firstChild);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (alert.parentElement) {
            alert.remove();
        }
    }, 5000);
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