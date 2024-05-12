
const nameValidation = (name) => {
  // Check if the name is not empty and follows a valid name format
  if (!name.trim()) {
    return 'Name is required';
  }

  if (!/^[A-Za-z]+([\s]?[A-Za-z]+)*$/.test(name)) {
    return 'Enter a valid name';
  }

  return ''; // Return empty string if validation passes
};
const emailValidation = (email) => {
  // Check if the email is not empty and follows a valid email format
  if (!email.trim()) {
    return 'Email is required';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return 'Enter a valid email address';
  }

  return ''; // Return empty string if validation passes
};
const PasswordValidation = (password) => {
  // Check if the password is not empty and meets minimum length requirements
  if (!password.trim()) {
    return 'Password is required';
  }

  if (password.length < 8) {
    return 'Password must be at least 8 characters long';
  }

  // Check if the password contains at least one uppercase letter
  if (!/[A-Z]/.test(password)) {
    return 'Password must contain at least one uppercase letter';
  }

  // Check if the password contains at least one lowercase letter
  if (!/[a-z]/.test(password)) {
    return 'Password must contain at least one lowercase letter';
  }

  // Check if the password contains at least one number
  if (!/\d/.test(password)) {
    return 'Password must contain at least one number';
  }

  // Check if the password contains at least one special character
  if (!/[\W_]/.test(password)) {
    return 'Password must contain at least one special character';
  }

  return ''; // Return empty string if validation passes
};
const confirmPasswordValidation = (confirmPassword, password) => {
  // Check if the Password is not empty
  if (!confirmPassword.trim()) {
    return 'Confirm password is required';
  }

  // Check if the confirm password matches the original password
  if (confirmPassword !== password) {
    return 'Confirm password must match the original password';
  }

  return ''; // Return empty string if validation passes
};

module.exports={nameValidation,emailValidation,PasswordValidation,confirmPasswordValidation};

  