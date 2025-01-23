function getPasswordStrength(password) {
  if (password.length < 8)
    return "Weak: Password must be at least 8 characters long.";

  const hasLowercase = /[a-z]/.test(password);
  const hasUppercase = /[A-Z]/.test(password);
  const hasDigit = /\d/.test(password);
  const hasSpecialChar = /[@$!%*?&#]/.test(password);

  if (hasLowercase && hasUppercase && hasDigit && hasSpecialChar) {
    return "Strong: Password meets all requirements.";
  } else {
    let feedback = "Moderate: Password is missing:";
    if (!hasLowercase) feedback += " lowercase letter,";
    if (!hasUppercase) feedback += " uppercase letter,";
    if (!hasDigit) feedback += " digit,";
    if (!hasSpecialChar) feedback += " special character,";
    return feedback.slice(0, -1); // Remove the trailing comma
  }
}
