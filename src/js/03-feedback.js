var throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

form.addEventListener(
  'input',
  throttle(() => {
    const formState = {
      email: emailInput.value,
      message: messageInput.value,
    };
    localStorage.setItem(localStorageKey, JSON.stringify(formState));
  }, 500)
);

const parsedFormState = JSON.parse(localStorage.getItem(localStorageKey));

if (parsedFormState) {
  emailInput.value = parsedFormState.email;
  messageInput.value = parsedFormState.message;
}
form.addEventListener('submit', e => {
  e.preventDefault();
  if (emailInput.value.trim() === '' || messageInput.value.trim() === '') {
    return alert('Wszystkie pola powinny zostać wypełnione!');
  }
  localStorage.removeItem(localStorageKey);
  console.log('Formularz wysłany z danymi:', {
    email: emailInput.value,
    message: messageInput.value,
  });
  form.reset();
});
