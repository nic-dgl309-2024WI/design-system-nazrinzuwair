'use strict';

// Toggles the visibility of navigation items.
function showNav() {
    // Get the navigation items container element by its ID
    var element = document.getElementById("c-navbar-items");
    // Toggle the "show-items" class to control visibility
    element.classList.toggle("show-items");
}
