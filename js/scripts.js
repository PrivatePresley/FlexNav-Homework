const mainNav = document.querySelectorAll("nav a");
const body = document.querySelector("body");
const startButton = document.querySelector(".start-stop");
let grid = document.querySelectorAll("section div");

let start = false;
let speed = "";
let timeout = undefined;
let transition = undefined;
let state = new Array(grid.length).fill(false);
let colorBool = undefined;

const startColor = "white";
const stopColor = "red";
const offColor = "black";
const onColor = "white";
const toSlow = 1000;
const toMedium = 500;
const toFast = 50;
const tranSlow = "1s";
const tranMed = ".5s";
const tranFast = ".25s";

document.addEventListener("click", handleClicks);
window.onload = init;

function handleClicks(event) {
  event.preventDefault();
  if (event.target.matches("nav a")) {
    for (let navItem of mainNav) {
      navItem.classList.remove("active");
    }
    event.target.classList.add("active");
    speed = event.target.textContent.toLowerCase();
  }

  if (event.target.matches(".start-stop")) {
    start = !start;
    if (start) {
      startButton.style.color = stopColor;
    } else {
      startButton.style.color = startColor;
    }
  }
}

function init() {
  for (let navItem of mainNav) {
    if (navItem.classList.contains("active")) {
      speed = navItem.textContent.toLowerCase();
    }
  }
  // Start the first frame request
  window.requestAnimationFrame(gameLoop);
}

function gameLoop(timeStamp) {
  if (speed == "slow") {
    timeout = toSlow;
    transition = tranSlow;
  } else if (speed == "medium") {
    timeout = toMedium;
    transition = tranMed;
  } else if (speed == "fast") {
    timeout = toFast;
    transition = tranFast;
  }

  for (let g = 0; g < grid.length; g++) {
    grid[g].style.transitionDuration = transition;
  }

  if (start) {
    draw();
  }

  setTimeout(function () {
    window.requestAnimationFrame(gameLoop);
  }, timeout);
}

function draw() {
  let randomCell = Math.round(Math.random() * (grid.length - 1));
  state[randomCell] = !state[randomCell];
  colorBool = state[randomCell];
  if (colorBool) {
    grid[randomCell].style.backgroundColor = onColor;
  } else {
    grid[randomCell].style.backgroundColor = offColor;
  }
}
