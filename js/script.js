const navbarToggle = document.querySelector("#navbar-toggle");
const navbarMenu = document.querySelector("#navbar-menu");
const navbarLinks = document.querySelector("#navbar-links");

let isNavbarExpanded = navbarToggle.getAttribute("aria-expanded") === "true";

const changeToggleNavbarVisibility = () => {
    isNavbarExpanded = !isNavbarExpanded;
    navbarToggle.setAttribute("aria-expanded", isNavbarExpanded);
};

navbarToggle.addEventListener("click", changeToggleNavbarVisibility);

navbarLinks.addEventListener("click", (e) => e.stopPropagation());

navbarMenu.addEventListener("click", changeToggleNavbarVisibility);
