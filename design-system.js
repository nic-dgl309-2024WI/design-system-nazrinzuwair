function showNav() {
    var navItems = document.getElementById("nav-items");
    var icon = document.getElementById("toggle-icon");

    navItems.classList.toggle("c-desktop-navbar__items");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-times");
}

function showiNav() {
    var navitems = document.getElementById("navi-items");
    var icon = document.getElementById("toggle-icoon");
    var sidebar = document.querySelector("aside");

    navitems.classList.toggle("c-desktop-navbar__items");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-times");
    sidebar.classList.toggle("show-sidebar");
}


function showMobileNav() {
    var navItems = document.getElementById("mobile-nav-items");
    var naviItems = document.getElementById("mobile-navig-items");
    var icon = document.getElementById("toggle-icon");

    navItems.classList.toggle("c-mobile-navbar__items");
    naviItems.classList.toggle("c-mobile-navbar__items");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-times");
}


function copyHeaderToClipboard() {
    var headerCodeSnippet = document.getElementById('headerCodeSnippet').innerText;
    navigator.clipboard.writeText(headerCodeSnippet).then(function() {
        alert('Header code snippet copied to clipboard!');
    }, function() {
        alert('Failed to copy header code snippet to clipboard!');
    });
}
