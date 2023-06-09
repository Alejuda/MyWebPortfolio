const email = document.getElementById('email');
const form = document.getElementById('form');
const errorMsj = document.getElementById('validation-message');

const validEmail = (email) => {
  if (email.toLowerCase() === email) {
    return true;
  }
  return false;
};

email.addEventListener('change', () => {
  if (!validEmail(email.value)) {
    email.classList.add('invalid-input');
    errorMsj.innerText = 'Please do not use uppercase letters on your email.';
  } else {
    errorMsj.innerText = '';
    email.classList.remove('invalid-input');
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const validSubmit = validEmail(email.value);

  if (validSubmit) {
    form.submit();
  }
});