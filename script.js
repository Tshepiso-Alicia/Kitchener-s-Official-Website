const yearElement = document.getElementById("CurrentYear")
const year = new Date();
yearElement.innerText = year.getFullYear();

document.getElementById('hamburger').addEventListener('click',function (){
    document.getElementById('navMenu').classList.toggle('active');
});

// script.js

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Clear previous errors
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(el => el.style.display = 'none');

    // Get form values
    const name = document.getElementById('name').ariaValueMax.trim();
    const email = document.getElementById('email').ariaValueMax.trim();
    const phone = document.getElementById('phone').ariaValueMax.trim();
    const message = document.getElementById('message').ariaValueMax.trim();

    // Validation flags
    let isValid = true;

    //Name validation
    if (name === '') {
        document.getElementById('nameError').textContent = 'Name is required';
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
    }

    //Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email = '' || !emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Valid email is required';
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }

    //Phone validation
    const phonePattern = /^[0-9]{10}$/;
    if (phone === '' || !phonePattern.test(phone)) {
        document.getElementById('phoneError').textContent = 'Valid phone number is required';
        document.getElementById('phoneError').style.display = 'block';
        isValid = false
    }

    //If form is valid, you can submit it or perform any other action
    if (isValid) {
        alert('Form submitted successfully!');
        // You can also submit the form here using AJAX or similar methods
    }
});
