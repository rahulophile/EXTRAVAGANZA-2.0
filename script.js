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

window.addEventListener("scroll", () => {
    const eventsPagePosition = eventsPage.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (eventsPagePosition <= windowHeight * 0.5) {
        body.classList.add("fade-out"); // Start fade-out effect
        setTimeout(() => {
            body.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.801), rgba(0, 0, 0, 0.8)), url('3d.jpg')";
            body.classList.remove("fade-out"); // Remove fade-out effect after image change
        }, 500); // Match this with the CSS transition duration
    } else {
        body.classList.add("fade-out"); // Start fade-out effect
        setTimeout(() => {
            body.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.801), rgba(0, 0, 0, 0.8)), url('website-background.jpg')";
            body.classList.remove("fade-out"); // Remove fade-out effect after image change
        }, 500); // Match this with the CSS transition duration
    }
});
