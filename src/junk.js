const signupForm = document.getElementById("signup_form");
const elements = {
  username: { el: document.getElementById("username"), error: document.getElementById("username_error") },
  phone: { el: document.getElementById("phone"), error: document.getElementById("phone_error") },
  email: { el: document.getElementById("email"), error: document.getElementById("email_error") },
  password: { 
    el: document.getElementById("password"), 
    error: document.getElementById("password_error"),
    strength: document.getElementById("strength_indicator")
  },
  confirmPassword: { el: document.getElementById("confirm_password"), error: document.getElementById("confirm_password_error") },
  button: document.getElementById("signup_button")
};

const validators = {
  username: value => /^[a-zA-Z0-9]{3,30}$/.test(value),
  phone: value => /^[0-9]{10,15}$/.test(value),
  email: value => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value),
  password: {
    strength: password => {
      if (password.length < 8) return "Weak";
      const hasLower = /[a-z]/.test(password);
      const hasUpper = /[A-Z]/.test(password);
      const hasNumber = /\d/.test(password);
      const hasSpecial = /[@$!%*?&#]/.test(password);

      return hasLower && hasUpper && hasNumber && hasSpecial ? "Strong" 
           : (hasLower || hasUpper) && hasNumber ? "Medium" 
           : "Weak";
    },
    match: (password, confirmPassword) => password === confirmPassword
  }
};

function validateForm() {
  const validationResults = Object.entries(elements)
    .filter(([key]) => key !== 'button')
    .map(([key, { el, error }]) => {
      const value = el.value.trim();
      const isValid = key === 'confirmPassword' 
        ? validators.password.match(elements.password.el.value, value)
        : key === 'password'
          ? validators.password.strength(value) !== "Weak"
          : validators[key](value);

      error?.classList.toggle('hidden', isValid);
      
      if (key === 'password') {
        elements[key].strength.textContent = validators.password.strength(value);
      }

      return isValid;
    });

  const isFormValid = validationResults.every(Boolean);
  elements.button.disabled = !isFormValid;
  elements.button.classList.toggle('cursor-not-allowed', !isFormValid);
  elements.button.classList.toggle('bg-disabled_btn_bg', !isFormValid);
}

Object.values(elements)
  .filter(el => el.el)
  .forEach(({ el }) => el.addEventListener('input', validateForm));

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const signupData = Object.fromEntries(
    Object.entries(elements)
      .filter(([key]) => key !== 'button' && key !== 'confirmPassword')
      .map(([key, { el }]) => [key, el.value.trim()])
  );

  fetch('http://localhost:3002/api/auth/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(signupData)
  })
  .then(response => response.ok ? response.json() : Promise.reject('Signup Failed'))
  .then(() => {
    alert('Signup Successful');
    window.location.href = './dashboard.html';
    signupForm.reset();
    validateForm();
  })
  .catch(error => {
    console.error(error);
    alert(error.message || 'Signup Failed');
  });
});