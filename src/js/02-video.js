import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframeVideoPlayer = document.querySelector("iframe")
const videoPlayer = new Player(iframeVideoPlayer);

function getTimeData (data) {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(data.seconds)) 
}

function firstLoadPage () {
    if (!localStorage.getItem("videoplayer-current-time")) return;
    videoPlayer.setCurrentTime(JSON.parse(localStorage.getItem("videoplayer-current-time")))
}

firstLoadPage()

videoPlayer.on('timeupdate', throttle(getTimeData, 1000));

