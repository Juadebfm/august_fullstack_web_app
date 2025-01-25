console.log("We are here");

//get the form elements
const signupForm = document.getElementById("signup_form");
const signupButton = document.getElementById("signup_button");

// input fields
const username = document.getElementById("username");
console.log(username.value);
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
  return /^[a-zA-Z0-9]{3,30}$/.test(username); // false or true
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
  return password === confirmPassword; //true /false
}

//validation logic proper
function validateInputs() {
  let isValid = true; // is to help with ennabling the signup button

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

  //validate password strength
  const strength = getPasswordStrength(password.value);
  strengthIndicator.textContent = strength;

  if (strength === "Weak") {
    passwordError.classList.remove("hidden");
  } else {
    passwordError.classList.add("hidden");
  }

  //confirm password against password
  if (!arePasswordMatching(password.value, confirmPassword.value)) {
    confirmPasswordError.classList.remove("hidden");
  } else {
    confirmPasswordError.classList.add("hidden");
  }

  //enable signup button
  signupButton.disabled = !isValid;
  signupButton.classList.toggle("cursor-not-allowed", !isValid);
  signupButton.classList.toggle("bg-disabled_btn_bg", !isValid);
  signupButton.classList.add("bg-main_blue", !isValid);
}

// adding events to the individual inputs
username.addEventListener("input", validateInputs);
phone.addEventListener("input", validateInputs);
email.addEventListener("input", validateInputs);
password.addEventListener("input", validateInputs);
confirmPassword.addEventListener("input", validateInputs);

//form submission
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // gather data
  const signupData = {
    username: username.value.trim(),
    phone: phone.value.trim(),
    email: email.value.trim(),
    password: password.value.trim(),
  };

  const reqObj = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(signupData), // coverting it to json obj
  };

  // the url
  const url = "http://localhost:3002/api/auth/signup";

  //send to backend
  fetch(url, reqObj)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Signup Failed");
      }
      return response.json();
    })
    .then((data) => {
      alert("Signup Successful");
      window.location.href = "./dashboard.html";
      signupForm.reset(); //cleans all user input from the form
      validateInputs(); //resets validation state
    })
    .catch((error) => {
      console.log(error);
      alert(error.message);
    });
});
