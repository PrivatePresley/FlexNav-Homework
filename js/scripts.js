let mainNav = document.querySelectorAll("nav a");
let body = document.querySelector("body");
document.addEventListener("click", handleClicks);

function handleClicks(event) {
  event.preventDefault();
  if (event.target.matches("nav a")) {
    for (let navItem of mainNav) {
      navItem.classList.remove("active");
    }
    event.target.classList.add("active");

    if (event.target.matches("[href='reviews.html']")) {
      body.style.backgroundColor = "WhiteSmoke";
    } else if (event.target.matches("[href='delivery.html']")) {
      body.style.backgroundColor = "LightGray";
    } else {
      body.style.backgroundColor = "white";
    }
  }
}
