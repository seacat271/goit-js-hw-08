import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframeVideoPlayer = document.querySelector("iframe")
const videoPlayer = new Player(iframeVideoPlayer);

function getTimeData (data) {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(data.seconds)) 
}

videoPlayer.on('timeupdate', throttle(getTimeData, 1000));
videoPlayer.setCurrentTime(JSON.parse(localStorage.getItem("videoplayer-current-time")))
