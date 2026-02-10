// ===========================
// Mobile Menu Toggle
// ===========================
document.addEventListener('DOMContentLoaded', function() {
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            mobileToggle.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                mobileToggle.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!navMenu.contains(event.target) && !mobileToggle.contains(event.target)) {
                navMenu.classList.remove('active');
                mobileToggle.classList.remove('active');
            }
        });
    }
});

// ===========================
// EmailJS Configuration
// ===========================
(function() {
    // Initialize EmailJS
    // Replace 'YOUR_PUBLIC_KEY' with your actual EmailJS public key
    emailjs.init('YOUR_PUBLIC_KEY');
})();

// ===========================
// Admission Form Handler
// ===========================
const admissionForm = document.getElementById('admissionForm');
const formMessage = document.getElementById('formMessage');

if (admissionForm && formMessage) {
    admissionForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Show loading state
        const submitButton = admissionForm.querySelector('.btn-submit');
        const originalText = submitButton.innerHTML;
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitButton.disabled = true;
        
        // Get form data
        const formData = {
            student_name: document.getElementById('studentName').value,
            class: document.getElementById('class').value,
            subjects: document.getElementById('subjects').value,
            parent_name: document.getElementById('parentName').value,
            email: document.getElementById('email').value,
            mobile: document.getElementById('mobile').value,
            address: document.getElementById('address').value,
            message: document.getElementById('message').value,
            to_email: 'adarshpathcoachingclasses@gmail.com'
        };
        
        // Send email using EmailJS
        // Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with your actual EmailJS service and template IDs
        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                
                // Show success message
                formMessage.className = 'form-message success';
                formMessage.textContent = 'Thank you! Your admission inquiry has been submitted successfully. We will contact you soon.';
                
                // Reset form
                admissionForm.reset();
                
                // Reset button
                submitButton.innerHTML = originalText;
                submitButton.disabled = false;
                
                // Hide message after 5 seconds
                setTimeout(() => {
                    formMessage.style.display = 'none';
                }, 5000);
            }, function(error) {
                console.log('FAILED...', error);
                
                // Show error message
                formMessage.className = 'form-message error';
                formMessage.textContent = 'Oops! Something went wrong. Please try again or contact us directly at adarshpathcoachingclasses@gmail.com or +91 9415943128.';
                
                // Reset button
                submitButton.innerHTML = originalText;
                submitButton.disabled = false;
            });
    });
}

// ===========================
// Contact Form Handler
// ===========================
const contactForm = document.getElementById('contactForm');
const contactFormMessage = document.getElementById('contactFormMessage');

if (contactForm && contactFormMessage) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Show loading state
        const submitButton = contactForm.querySelector('.btn-submit');
        const originalText = submitButton.innerHTML;
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitButton.disabled = true;
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('contactEmail').value,
            mobile: document.getElementById('contactMobile').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('contactMessage').value,
            to_email: 'adarshpathcoachingclasses@gmail.com'
        };
        
        // Send email using EmailJS
        // Replace 'YOUR_SERVICE_ID' and 'YOUR_CONTACT_TEMPLATE_ID' with your actual EmailJS service and template IDs
        emailjs.send('YOUR_SERVICE_ID', 'YOUR_CONTACT_TEMPLATE_ID', formData)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                
                // Show success message
                contactFormMessage.className = 'form-message success';
                contactFormMessage.textContent = 'Thank you for contacting us! We have received your message and will get back to you soon.';
                
                // Reset form
                contactForm.reset();
                
                // Reset button
                submitButton.innerHTML = originalText;
                submitButton.disabled = false;
                
                // Hide message after 5 seconds
                setTimeout(() => {
                    contactFormMessage.style.display = 'none';
                }, 5000);
            }, function(error) {
                console.log('FAILED...', error);
                
                // Show error message
                contactFormMessage.className = 'form-message error';
                contactFormMessage.textContent = 'Oops! Something went wrong. Please try again or contact us directly at adarshpathcoachingclasses@gmail.com or +91 9415943128.';
                
                // Reset button
                submitButton.innerHTML = originalText;
                submitButton.disabled = false;
            });
    });
}

// ===========================
// Smooth Scroll for Anchor Links
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===========================
// Scroll Animation (Fade In)
// ===========================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for scroll animation
const animateOnScroll = document.querySelectorAll('.highlight-card, .fee-card, .course-card, .value-card, .material-card, .youtube-card');
animateOnScroll.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===========================
// Header Scroll Effect
// ===========================
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.12)';
    } else {
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.08)';
    }
    
    lastScroll = currentScroll;
});

// ===========================
// Form Validation Helper
// ===========================
function validateMobile(input) {
    const mobilePattern = /^[0-9]{10}$/;
    if (!mobilePattern.test(input.value)) {
        input.setCustomValidity('Please enter a valid 10-digit mobile number');
    } else {
        input.setCustomValidity('');
    }
}

// Add validation to mobile number fields
const mobileInputs = document.querySelectorAll('input[type="tel"]');
mobileInputs.forEach(input => {
    input.addEventListener('input', function() {
        validateMobile(this);
    });
});

// ===========================
// Copy Logo to Working Directory
// ===========================
console.log('%c🎓 Adarsh Path Coaching Classes', 'color: #E63946; font-size: 20px; font-weight: bold;');
console.log('%cTo Rise, Return to Your Roots', 'color: #666; font-size: 14px; font-style: italic;');
console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #E63946;');
console.log('%cWebsite developed with ❤️ for quality education', 'color: #666; font-size: 12px;');

// ===========================
// EmailJS Setup Instructions
// ===========================
/*
TO ENABLE EMAIL FUNCTIONALITY:

1. Create a free account at https://www.emailjs.com/
2. Add an email service (Gmail, Outlook, etc.)
3. Create email templates for:
   - Admission inquiries
   - Contact form messages
4. Get your Public Key, Service ID, and Template IDs
5. Replace the placeholders in this file:
   - Line 26: Replace 'YOUR_PUBLIC_KEY' with your public key
   - Line 50: Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID'
   - Line 102: Replace 'YOUR_SERVICE_ID' and 'YOUR_CONTACT_TEMPLATE_ID'

Example template variables for admission form:
{{student_name}}, {{class}}, {{subjects}}, {{parent_name}}, 
{{email}}, {{mobile}}, {{address}}, {{message}}

Example template variables for contact form:
{{name}}, {{email}}, {{mobile}}, {{subject}}, {{message}}

Both forms send to: {{to_email}} (adarshpathcoachingclasses@gmail.com)
*/
