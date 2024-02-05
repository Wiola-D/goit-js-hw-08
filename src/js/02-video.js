import Vimeo from '@vimeo/player';
//const { Player } = require('@vimeo/player');
var throttle = require('lodash.throttle');

const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo(iframe);

player.on('play', () => console.log('played the video'));

player.on(
  'timeupdate',
  throttle(data => {
    localStorage.setItem('videoplayer-current-time', data.seconds);
  }, 1000)
);

const timeUpgrade = localStorage.getItem('videoplayer-current-time');

if (timeupdate) {
  player.setCurrentTime(timeUpgrade);
}
