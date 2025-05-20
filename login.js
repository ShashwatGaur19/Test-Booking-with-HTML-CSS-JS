// Form validation logic
const form = document.getElementById('loginForm');
const emailInput = form.email;
const passwordInput = form.password;
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

function validateEmail(email) {
  // Basic email regex validation
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.trim());
}

function showError(input, errorElement, message) {
  errorElement.textContent = message;
  errorElement.style.display = 'block';
  input.setAttribute('aria-invalid', 'true');
}

function clearError(input, errorElement) {
  errorElement.style.display = 'none';
  input.removeAttribute('aria-invalid');
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let valid = true;

  // Validate email
  if (!emailInput.value || !validateEmail(emailInput.value)) {
    showError(emailInput, emailError, 'Please enter a valid email address.');
    valid = false;
  } else {
    clearError(emailInput, emailError);
  }

  // Validate password
  if (!passwordInput.value || passwordInput.value.length < 6) {
    showError(passwordInput, passwordError, 'Password must be at least 6 characters.');
    valid = false;
  } else {
    clearError(passwordInput, passwordError);
  }

  if (valid) {
    // Here you can perform the actual login processing.
    // For now, just alert success message.
    alert('Login successful! CLICK ON NEXT BUTTON TO SELECT TESTS!!');
    form.reset();
  }
});
