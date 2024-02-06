
/* zad.8 - 3 WIOLA

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


/* Zad.8 - 3 MAREK

import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
// Słuchacz zdarzeń dla input w polach email i message
form.addEventListener(
  'input',
  throttle(() => {
    // Zapisz stan formularza do localStorage
    const formState = {
      email: emailInput.value,
      message: messageInput.value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formState));
  }, 500)
);
// Sprawdź i wypełnij pola formularza przy ponownym załadowaniu strony
const storedFormState = localStorage.getItem('feedback-form-state');
if (storedFormState) {
  const parsedFormState = JSON.parse(storedFormState);
  emailInput.value = parsedFormState.email;
  messageInput.value = parsedFormState.message;
}
// Słuchacz zdarzeń dla wysyłki formularza
form.addEventListener('submit', event => {
  // Wyczyść localStorage i zaloguj dane formularza po wysłaniu
  localStorage.removeItem('feedback-form-state');
  console.log('Formularz wysłany z danymi:', {
    email: emailInput.value,
    message: messageInput.value,
  });
});
//______________________________________________________________
// Zad.8 - 2 MAREK
/*import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';
// const player = new Vimeo(document.querySelectorAll('#vimeo-player'));
const player = new Vimeo(document.getElementById('vimeo-player'));
player.ready().then(() => {
  // "Install Vimeo player."
  console.log('The player Vimeo is ready'); // "Initializing Vimeo player."
  player.on('play', () => {
    player.on(
      'timeupdate',
      throttle(() => {
        const currentTime = player.getCurrentTime();
        const duration = player.getDuration();
        // "Check if 'currentTime' is within the length of the video."
        if (currentTime >= 0 && currentTime <= duration) {
          localStorage.setItem(
            'videoplayer-current-time',
            JSON.stringify(currentTime)
          );
        }
      }, 1000)
    );
  });
  const storedTime = JSON.parse(
    localStorage.getItem('videoplayer-current-time')
  );
  if (storedTime) {
    player.setCurrentTime(storedTime);
  }
});
// "Install Vimeo player."
// player.ready().then(() => {
//   // "Initializing Vimeo player."
//   console.log('The player Vimeo is ready');
//   // "Event listeren for 'play' and 'timeupdate'."
//   player.on('play', () => {
//     player.on(
//       'timeupdate',
//       throttle(() => {
//         // "Writing the current time to 'localStorage'."
//         localStorage.setItem(
//           'videoplayer-current-time',
//           player.getCurrentTime()
//         );
//       }, 1000)
//     );
//   });
//   // "Set the current time when the page is reloaded."
//   const storedTime = localStorage.getItem('videoplayer-current-time');
//   if (storedTime) {
//     player.setCurrentTime(parseFloat(storedTime));
//   }
// });
