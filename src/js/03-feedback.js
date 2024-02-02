var throttle = require('lodash.throttle');
/*jQuery(form).on('input', _.throttle(updatePosition, 500));*/

const form = document.querySelector('.feedback-form');
const localStorageKeyEmail = 'feedback-form-state-email';
const localStorageKeyMessage = 'feedback-form-state-message';

form.elements.message.value =
  localStorage.getItem(localStorageKeyMessage) ?? '';

form.elements.email.value = localStorage.getItem(localStorageKeyEmail) ?? '';

form.email.addEventListener('input', evt => {
  localStorage.setItem(localStorageKeyEmail, evt.target.value);
});
form.message.addEventListener('input', evt => {
  localStorage.setItem(localStorageKeyMessage, evt.target.value);
});

form.addEventListener('submit', event => {
  event.preventDefault();
  localStorage.removeItem(localStorageKeyEmail);
  localStorage.removeItem(localStorageKeyMessage);
  form.reset();
});
