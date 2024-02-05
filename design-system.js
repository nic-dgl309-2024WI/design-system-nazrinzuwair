function showNav() {
    var element = document.getElementById("nav-items");
    var icon = document.getElementById("toggle-icon");

    element.classList.toggle("c-mobile-navbar__items");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-times");
}