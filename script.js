const menuButton = document.getElementById("openMenu");
const sidebar = document.querySelector(".sidebar");
menuButton.addEventListener("click", function () {
  sidebar.style.visibility = "visible";
  menuButton.style.visibility = "hidden";
  sidebar.style.left = "0px";
});

const closeMenuButton = document.getElementById("closeMenu");
closeMenuButton.addEventListener("click", function () {
  sidebar.style.visibility = "hidden";
  menuButton.style.visibility = "visible";
  sidebar.style.left = "-100vw";
});

const body = document.querySelector("body");
const eventsPage = document.getElementById("eventsPage");