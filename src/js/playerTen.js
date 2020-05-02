const $backTen = document.querySelector(".controller__backTen");
const $forTen = document.querySelector(".controller__forTen");
const $video = document.querySelector(".player__video");

$backTen.addEventListener("click", minusTen);

$forTen.addEventListener("click", upTen);

function minusTen() {
  $video.currentTime >= 10
    ? ($video.currentTime -= 10)
    : ($video.currentTime = 0);
}

function upTen() {
  $video.currentTime <= $video.duration
    ? ($video.currentTime += 10)
    : ($video.currentTime = video.duration);
}

function keyDown(e) {
  if (e.which == 37) {
    minusTen();
  } else if (e.which == 39) {
    upTen();
  }
}

document.addEventListener("keydown", keyDown);
