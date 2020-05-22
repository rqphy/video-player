const $controller = document.querySelector(".controller");
const $player = document.querySelector(".player");
let timeout;

document.addEventListener("mousemove", () => {
  $controller.classList.add("controller--visible");
  $player.classList.add("visible");
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    $controller.classList.remove("controller--visible");
    $player.classList.remove("visible");
  }, 3000);
});
