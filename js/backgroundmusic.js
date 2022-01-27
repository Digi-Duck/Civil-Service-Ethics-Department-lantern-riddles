
function musiccontrol(item) {
    let myAudioElement = document.querySelector("#music");
    if (item.dataset.music == "pause") {
        document.querySelector(".sound-btn img").src='./img/banner-1/sound.png';
        myAudioElement.autoplay = true;
        myAudioElement.loop = true;
        myAudioElement.volume = 0.5;
        myAudioElement.play();
        item.dataset.music = 'play';
    } else if (item.dataset.music == "play") {
        document.querySelector(".sound-btn img").src='./img/banner-1/soundspeed.svg';
        myAudioElement.pause();
        item.dataset.music = 'pause';
    }
}

$(document).ready(function () {
    document.addEventListener('DOMContentLoaded', function () {
        function audioAutoPlay() {
            $("#music")[0].play();
            document.addEventListener("WeixinJSBridgeReady", function () { WeixinJSBridge.invoke('getNetworkType', {}, function (e) { $("#music")[0].play(); }) }, false);
        }
        audioAutoPlay();
    });

    $('html,body').one('touchstart', function () {
        $("#music")[0].play();
    });
    $('html,body').one('click', function () {
        $("#music")[0].play();
    });
});
