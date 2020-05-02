const $play = document.querySelector(".controller__play");
const $playing = document.querySelector(".controller__playing");
const $pausing = document.querySelector(".controller__pausing");
const $video = document.querySelector(".player__video");

// recup video

$play.addEventListener("click", playPause);

function playPause() {
  $video.paused ? videoPlay() : videoPause();
}

document.addEventListener("keydown", keyDown);

function keyDown(e) {
  if (e.which == 32) {
    playPause();
  }
}

function videoPlay() {
  removeVisible($playing);
  addVisible($pausing);
  $video.play();
}

function videoPause() {
  removeVisible($pausing);
  addVisible($playing);
  $video.pause();
}

function removeVisible(elem) {
  elem.classList.remove("visible");
}

function addVisible(elem) {
  elem.classList.add("visible");
}
