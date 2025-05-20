// Set min for date input to today
const pickupDateInput = document.getElementById('pickupDate');
const today = new Date().toISOString().split('T')[0];
pickupDateInput.setAttribute('min', today);

const form = document.getElementById('checkoutForm');
const confirmationMessage = document.getElementById('confirmationMessage');

// Get inputs and error elements
const cashoutAmtInput = form.cashoutAmount;
const addressInput = form.address;
const paymentMethodInput = form.paymentMethod;
const pickupTimeInput = form.pickupTime;

const cashoutError = document.getElementById('cashoutError');
const addressError = document.getElementById('addressError');
const paymentError = document.getElementById('paymentError');
const dateError = document.getElementById('dateError');
const timeError = document.getElementById('timeError');

function showError(input, errorElem, message) {
  errorElem.textContent = message;
  errorElem.style.display = 'block';
  input.setAttribute('aria-invalid', 'true');
}

function clearError(input, errorElem) {
  errorElem.style.display = 'none';
  input.removeAttribute('aria-invalid');
}

form.addEventListener('submit', e => {
  e.preventDefault();
  let valid = true;

  // Validate address not empty
  if (!addressInput.value.trim()) {
    showError(addressInput, addressError, 'Please enter your address.');
    valid = false;
  } else {
    clearError(addressInput, addressError);
  }

  // Validate payment method selected
  if (!paymentMethodInput.value) {
    showError(paymentMethodInput, paymentError, 'Please select a payment method.');
    valid = false;
  } else {
    clearError(paymentMethodInput, paymentError);
  }

  // Validate pickup date: must be today or later
  const pickupDateValue = pickupDateInput.value;
  if (!pickupDateValue) {
    showError(pickupDateInput, dateError, 'Please select a valid pickup date.');
    valid = false;
  } else {
    const selectedDate = new Date(pickupDateValue);
    const todayDate = new Date(today);
    if (selectedDate < todayDate) {
      showError(pickupDateInput, dateError, 'Pickup date cannot be in the past.');
      valid = false;
    } else {
      clearError(pickupDateInput, dateError);
    }
  }

  // Validate pickup time selected
  if (!pickupTimeInput.value) {
    showError(pickupTimeInput, timeError, 'Please select a pickup time.');
    valid = false;
  } else {
    clearError(pickupTimeInput, timeError);
  }

  if (valid) {
    // Hide form
    form.style.display = 'none';
    // Show confirmation message
    confirmationMessage.style.display = 'block';
  }
});
