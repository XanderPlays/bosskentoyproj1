document.addEventListener('DOMContentLoaded', function () {

    const form = document.getElementById('registrationForm');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    
    const usernameFeedback = document.getElementById('usernameFeedback');
    const emailFeedback = document.getElementById('emailFeedback');
    const passwordFeedback = document.getElementById('passwordFeedback');
    const confirmPasswordFeedback = document.getElementById('confirmPasswordFeedback');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function validateUsername() {
        if (username.value.trim() === '') {
            username.classList.add('is-invalid');
            usernameFeedback.textContent = 'Username is required.';
            return false;
        } else {
            username.classList.remove('is-invalid');
            usernameFeedback.textContent = '';
            return true;
        }
    }

    function validateEmail() {
        if (!emailRegex.test(email.value)) {
            email.classList.add('is-invalid');
            emailFeedback.textContent = 'Please provide a valid email address.';
            return false;
        } else {
            email.classList.remove('is-invalid');
            emailFeedback.textContent = '';
            return true;
        }
    }

    function validatePassword() {
        if (password.value.trim().length < 6) {
            password.classList.add('is-invalid');
            passwordFeedback.textContent = 'Password must be at least 6 characters long.';
            return false;
        } else {
            password.classList.remove('is-invalid');
            passwordFeedback.textContent = '';
            return true;
        }
    }

    function validateConfirmPassword() {
        if (confirmPassword.value !== password.value) {
            confirmPassword.classList.add('is-invalid');
            confirmPasswordFeedback.textContent = 'Passwords do not match.';
            return false;
        } else {
            confirmPassword.classList.remove('is-invalid');
            confirmPasswordFeedback.textContent = '';
            return true;
        }
    }

    username.addEventListener('input', validateUsername);
    email.addEventListener('input', validateEmail);
    password.addEventListener('input', validatePassword);
    confirmPassword.addEventListener('input', validateConfirmPassword);

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const isUsernameValid = validateUsername();
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();
        const isConfirmPasswordValid = validateConfirmPassword();

        if (isUsernameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid) {
            alert('Thank for the log in Registration Successful!');
        }
    });
});