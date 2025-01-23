//get the form elements
const signupForm = document.getElementById("signup_form");
const signupButton = document.getElementById("signup_button");

// input fields
const username = document.getElementById("username");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm_password");

// error messages
const usernameError = document.getElementById("username_error");
const phoneError = document.getElementById("phone_error");
const emailError = document.getElementById("email_error");
const passwordError = document.getElementById("password_error");
const passwordStrength = document.getElementById("password_strength");
const strengthIndicator = document.getElementById("strength_indicator");
const confirmPasswordError = document.getElementById("confirm_password_error");

//utility functions
// check usernname validity
function isValidUsername(username) {
  return /^[a-zA-Z0-9]{3,30}$/.test(username);
}

//checks validity for phone numbers
function isValidPhone(phone) {
  return /^[0-9]{10,15}$/.test(phone);
}

//checks validity for emails
function isValidEmail(email) {
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}

//checks the validity of our password
function getPasswordStrength(password) {
  if (password.length < 8) return "Weak";
  if (
    /[a-z]/.test(password) &&
    /[A-Z]/.test(password) &&
    /\d/.test(password) &&
    /[@$!%*?&#]/.test(password)
  ) {
    return "Strong";
  }

  if (
    (/[a-z]/.test(password) || /[A-Z]/.test(password)) &&
    /\d/.test(password)
  ) {
    return "Medium";
  }
  return "Weak";
}

function arePasswordMatching(password, confirmPassword) {
  return password === confirmPassword;
}

//validation logic proper
function validateInputs() {
  let isValid = true;

  //validate username
  if (!isValidUsername(username.value)) {
    usernameError.classList.remove("hidden");
    isValid = false;
  } else {
    usernameError.classList.add("hidden");
  }

  //validate phone
  if (!isValidPhone(phone.value)) {
    phoneError.classList.remove("hidden");
    isValid = false;
  } else {
    phoneError.classList.add("hidden");
  }

  //validate email
  if (!isValidEmail(email.value)) {
    emailError.classList.remove("hidden");
    isValid = false;
  } else {
    emailError.classList.add("hidden");
  }

  //validate password
  if (!isValidEmail(email.value)) {
    emailError.classList.remove("hidden");
    isValid = false;
  } else {
    emailError.classList.add("hidden");
  }
}
