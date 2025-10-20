function updateTime() {
    const timeElement = document.getElementById('currentTime');
    const currentTime = Date.now();
    timeElement.textContent = `${currentTime} ms`;
}

updateTime();
setInterval(updateTime, 1000);

const navLinks = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
    
    // Remove active class from all links and pages
    navLinks.forEach(l => l.classList.remove('active'));
    pages.forEach(p => p.classList.remove('active'));
    
    // Add active class to clicked link
    link.classList.add('active');
    
    // Show corresponding page
    const pageId = link.getAttribute('data-page');
    const targetPage = pageId === 'home' ? document.getElementById('home') : 
        pageId === 'contact' ? document.getElementById('contact') :
        document.getElementById('about');
    
    if (targetPage) {
        targetPage.classList.add('active');
    }
    });
});

// Contact form validation
const contactForm = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showError(fieldId, errorId, message) {
    const field = document.getElementById(fieldId);
    const error = document.getElementById(errorId);
    const formGroup = field.closest('.form-group');
    
    formGroup.classList.add('error');
    error.textContent = message;
    error.classList.add('visible');
    field.setAttribute('aria-invalid', 'true');
}

function clearError(fieldId, errorId) {
    const field = document.getElementById(fieldId);
    const error = document.getElementById(errorId);
    const formGroup = field.closest('.form-group');
    
    formGroup.classList.remove('error');
    error.classList.remove('visible');
    field.setAttribute('aria-invalid', 'false');
}

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let isValid = true;
    successMessage.classList.remove('visible');
    
    // Clear all previous errors
    clearError('fullname', 'fullname-error');
    clearError('email', 'email-error');
    clearError('subject', 'subject-error');
    clearError('message', 'message-error');
    
    // Validate full name
    const fullname = document.getElementById('fullname').value.trim();
    if (!fullname) {
    showError('fullname', 'fullname-error', 'Full name is required');
    isValid = false;
    }
    
    // Validate email
    const email = document.getElementById('email').value.trim();
    if (!email) {
    showError('email', 'email-error', 'Email is required');
    isValid = false;
    } else if (!validateEmail(email)) {
    showError('email', 'email-error', 'Please enter a valid email address (e.g., name@example.com)');
    isValid = false;
    }
    
    // Validate subject
    const subject = document.getElementById('subject').value.trim();
    if (!subject) {
    showError('subject', 'subject-error', 'Subject is required');
    isValid = false;
    }
    
    // Validate message
    const message = document.getElementById('message').value.trim();
    if (!message) {
    showError('message', 'message-error', 'Message is required');
    isValid = false;
    } else if (message.length < 10) {
    showError('message', 'message-error', 'Message must be at least 10 characters');
    isValid = false;
    }
    
    // If valid, show success message
    if (isValid) {
    successMessage.classList.add('visible');
    contactForm.reset();
    
    // Hide success message after 5 seconds
    setTimeout(() => {
        successMessage.classList.remove('visible');
    }, 5000);
    }
});

// Real-time validation on blur
['fullname', 'email', 'subject', 'message'].forEach(fieldId => {
    const field = document.getElementById(fieldId);
    field.addEventListener('blur', () => {
    const errorId = fieldId + '-error';
    const value = field.value.trim();
    
    if (fieldId === 'email' && value) {
        if (!validateEmail(value)) {
        showError(fieldId, errorId, 'Please enter a valid email address (e.g., name@example.com)');
        } else {
        clearError(fieldId, errorId);
        }
    } else if (fieldId === 'message' && value && value.length < 10) {
        showError(fieldId, errorId, 'Message must be at least 10 characters');
    } else if (value) {
        clearError(fieldId, errorId);
    }
    });
});