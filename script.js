const menuButton = document.getElementById("openMenu")
const sidebar = document.querySelector(".sidebar")
menuButton.addEventListener('click', function(){
    sidebar.style.visibility = "visible"
    menuButton.style.visibility = "hidden"
})

const closeMenuButton = document.getElementById("closeMenu")
closeMenuButton.addEventListener("click", function(){
    sidebar.style.visibility = "hidden"
    menuButton.style.visibility = "visible"
})

const body = document.querySelector("body");
const eventsPage = document.getElementById("eventsPage");

