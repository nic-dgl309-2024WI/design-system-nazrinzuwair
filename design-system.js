
function showNav() {
    var navItems = document.getElementById("nav-items");
    var naviItems = document.getElementById("navi-items");
    var icon = document.getElementById("toggle-icon");

    navItems.classList.toggle("c-mobile-navbar__items");
    naviItems.classList.toggle("c-mobile-navbar__items");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-times");
}
