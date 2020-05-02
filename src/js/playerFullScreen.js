const $fulls = document.querySelector(".controller__fullscreen");
const $video = document.querySelector(".player__video");

$fulls.addEventListener("click", () => {
  !document.fullscreenElement ? openFullscreen($player) : exitFullscreen($player);
});

function openFullscreen(elem) {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) {
    /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Chrome, Safari and Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE/Edge */
    elem.msRequestFullscreen();
  }
  fullscreen = true;
}

function exitFullscreen() {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else if (document.mozfullscreenElement) {
    document.mozExitFullScreen();
  } else if (document.webkitfullscreenElement) {
    document.webkitExitFullScreen();
  } else if (document.msfullscreenElement) {
    document.msExitFullScreen();
  }
  fullscreen = false;
}
