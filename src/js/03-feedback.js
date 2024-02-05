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

emailInput.value = parsedFormState.email;
messageInput.value = parsedFormState.message;

form.addEventListener('submit', e => {
  localStorage.removeItem(localStorageKey);
  form.reset();
});

/*
imprt throttle from 'lodash.trhrottle';

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
}); */
