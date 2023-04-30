const navbarToggle = document.querySelector("#navbar-toggle");

let isNavbarExpanded = navbarToggle.getAttribute("aria-expanded") === "true";

const changeToggleNavbarVisibility = () => {
    isNavbarExpanded = !isNavbarExpanded;
    navbarToggle.setAttribute("aria-expanded", isNavbarExpanded);
};

navbarToggle.addEventListener("click", e => { 
    e.stopPropagation(); 
    changeToggleNavbarVisibility()
});

window.addEventListener("click", e => isNavbarExpanded && changeToggleNavbarVisibility());
