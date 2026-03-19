const menuButton = document.querySelector(".menu-btn");
const nav = document.querySelector("#site-nav");
const navLinks = document.querySelectorAll("#site-nav a");

if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
        const isOpen = nav.classList.toggle("open");
        menuButton.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            nav.classList.remove("open");
            menuButton.setAttribute("aria-expanded", "false");
        });
    });
}
