// Sidebar

const sidebar = document.querySelector("#sidebar");
const button = document.querySelector("#nav-btn");
const darkBackground = document.querySelector("#dark-background");

button.addEventListener("click", () => {
    button.classList.toggle("opened")
    sidebar.classList.toggle("opened")
    darkBackground.classList.toggle("active")
})

darkBackground.addEventListener("click", () => {
    button.classList.toggle("opened")
    sidebar.classList.toggle("opened")
    darkBackground.classList.toggle("active")
})