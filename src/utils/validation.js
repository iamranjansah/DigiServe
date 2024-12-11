export const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
};

export const validateForm = (values) => {
  const errors = {};
  
  if (!values.name?.trim()) {
    errors.name = 'Name is required';
  }
  
  if (!values.email?.trim()) {
    errors.email = 'Email is required';
  } else if (!validateEmail(values.email)) {
    errors.email = 'Invalid email address';
  }
  
  if (!values.message?.trim()) {
    errors.message = 'Message is required';
  }
  
  return errors;
};