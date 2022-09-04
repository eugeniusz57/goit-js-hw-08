import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const TIME_KYE = "videoplayer-current-time";
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function(data) {
    localStorage.setItem(TIME_KYE, JSON.stringify(data));
};

player.on('timeupdate', throttle(onPlay, 1000));
    
const obj = JSON.parse(localStorage.getItem(TIME_KYE));
const seconds = obj.seconds

player.setCurrentTime(seconds);