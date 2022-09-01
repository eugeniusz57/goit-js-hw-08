import Player from '@vimeo/player';

const TIME_KYE = "videoplayer-current-time";

const iframe = document.querySelector('iframe');
    const player = new Player(iframe);
    const items = {};

    const onPlay = function(data) {
        console.log(data); 
        localStorage.getItem(TIME_KYE, JSON.stringify(date))
     
    };
    player.on('play', onPlay);
    console.log("items ", items);

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

    // player.setCurrentTime(onPlay).then(function(seconds) {
    //     // seconds = the actual time that the player seeked to
    // }).catch(function(error) {
    //     switch (error.name) {
    //         case 'RangeError':
    //             // the time was less than 0 or greater than the video’s duration
    //             break;
    
    //         default:
    //             // some other error occurred
    //             break;
    //     }
    // });
    