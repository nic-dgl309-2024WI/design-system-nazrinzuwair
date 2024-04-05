'use strict';

// Toggles the visibility of navigation items.
function showNav() {
    // Get the navigation items container element by its ID
    var element = document.getElementById("c-navbar-items");
    // Toggle the "show-items" class to control visibility
    element.classList.toggle("show-items");
}


// Wait for the DOM content to be fully loaded before executing the JavaScript
document.addEventListener("DOMContentLoaded", function() {
  
    // Select all images within the carousel
    const images = document.querySelectorAll('.c-carousel__images img');
    
    // Select the pagination container
    const pagination = document.querySelector('.c-journey__pagination');
  
    // Iterate over each image in the carousel
    images.forEach((img, index) => {
      // Create a button element for pagination
      const button = document.createElement('button');
      // Add a click event listener to the button
      button.addEventListener('click', () => {
        // Call the setActive function with the current index
        setActive(index);
      });
      // Append the button to the pagination container
      pagination.appendChild(button);
    });
  
    // Set the first image and button as active initially
    setActive(0);
  
    // Function to set the active image and button
    function setActive(index) {
      // Loop through all images
      images.forEach((img, i) => {
        // If the current index matches the provided index
        if (i === index) {
          // Display the image
          img.style.display = 'block';
          // Add 'active' class to the corresponding pagination button
          pagination.children[i].classList.add('active');
        } else {
          // Hide the image
          img.style.display = 'none';
          // Remove 'active' class from other pagination buttons
          pagination.children[i].classList.remove('active');
        }
      });
    }
  });

  