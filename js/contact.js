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
                // Simulate form submission
                simulateFormSubmission(formData);
            }
        });
    }
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

// Simulate form submission
function simulateFormSubmission(formData) {
    // Show loading state
    const submitBtn = document.querySelector('#contactForm button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        // Show success message
        showAlert('Thank you for your message! We will get back to you within 24 hours.', 'success');
        
        // Reset form
        document.getElementById('contactForm').reset();
        
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        // Log form data (in real app, this would go to your backend)
        console.log('Form submitted:', formData);
        
    }, 2000);
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