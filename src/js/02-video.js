import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const TIME_KYE = "videoplayer-current-time";
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
let seconds = null;

const onPlay = function(data) {
    localStorage.setItem(TIME_KYE, JSON.stringify(data));
};

player.on('timeupdate', throttle(onPlay, 1000));
    
const obj = JSON.parse(localStorage.getItem(TIME_KYE));

isObject();

function isObject(){
    if(!obj){
        seconds = 0;
        return
    }seconds = obj.seconds;
}

 

player.setCurrentTime(seconds);