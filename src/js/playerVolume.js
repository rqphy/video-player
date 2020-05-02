const $volume = document.querySelector(".controller__volumeBar");
const $video = document.querySelector(".player__video");

$volume.addEventListener("mouseup", () => {
  $video.volume = $volume.value / 100;
  console.log($video.volume);
});
