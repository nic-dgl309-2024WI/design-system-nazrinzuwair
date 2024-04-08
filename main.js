'use strict';
// Function to toggle the visibility of navigation items
function showNav() {
  var element = document.getElementById("c-navbar-items"); // Select the navigation items container
  element.classList.toggle("show-items"); // Toggle the 'show-items' class to show/hide the navigation items
}

// Function to handle scrolling and fix the navigation bar
function handleScroll() {
  var header = document.querySelector('.header'); // Select the header element
  if (window.scrollY > 0) { // Check if the window has been scrolled
      header.classList.add('fixed-nav'); // Add the 'fixed-nav' class to the header if scrolled
  } else {
      header.classList.remove('fixed-nav'); // Remove the 'fixed-nav' class from the header if not scrolled
  }
}

// Wait for the DOM content to be fully loaded before executing the JavaScript
document.addEventListener("DOMContentLoaded", function() {

  // Select all images within the carousel
  const images = document.querySelectorAll('.c-carousel__images img');
  
  // Select the pagination container
  const pagination = document.querySelector('.c-journey__pagination');

  // Iterate over each image in the carousel
  images.forEach((img, index) => {
      const button = document.createElement('button'); // Create a button element
      button.addEventListener('click', () => {
          setActive(index); // Add event listener to set active image on click
      });
      pagination.appendChild(button); // Append the button to the pagination container
  });

  setActive(0); // Set the first image as active initially

  // Set event listener for scrolling
  window.addEventListener('scroll', handleScroll);

  // Function to set the active image and corresponding pagination button
  function setActive(index) {
      images.forEach((img, i) => {
          if (i === index) { // Check if the current index matches the provided index
              img.style.display = 'block'; // Display the image
              pagination.children[i].classList.add('active'); // Add 'active' class to the corresponding pagination button
          } else {
              img.style.display = 'none'; // Hide the image
              pagination.children[i].classList.remove('active'); // Remove 'active' class from other pagination buttons
          }
      });
  }
});


// Add testimonial slider functionality
// Wait for the DOM content to be loaded
document.addEventListener("DOMContentLoaded", function() {
  // Get all slides
  const slides = document.querySelectorAll(".c-testimonial-slide");
  let currentSlide = 0; // Initialize current slide index

  // Function to show a specific slide
  function showSlide(index) {
      // Hide all slides
      slides.forEach((slide) => slide.style.display = "none");
      // Loop through the next three slides and display them
      for (let i = 0; i < 3; i++) {
          const adjustedIndex = (index + i) % slides.length;
          slides[adjustedIndex].style.display = "block";
      }
  }

  // Event listener for previous button
  document.querySelector(".u-prevBtn").addEventListener("click", function() {
      // Update current slide index to show the previous slide
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide); // Show the slide
  });

  // Event listener for next button
  document.querySelector(".u-nextBtn").addEventListener("click", function() {
      // Update current slide index to show the next slide
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide); // Show the slide
  });

  // Event listener for previous button on mobile
  document.querySelector(".u-prevBtn-mobile").addEventListener("click", function() {
      // Update current slide index to show the previous slide
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide); // Show the slide
  });

  // Event listener for next button on mobile
  document.querySelector(".u-nextBtn-mobile").addEventListener("click", function() {
      // Update current slide index to show the next slide
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide); // Show the slide
  });

  // Show the first three slides initially
  showSlide(currentSlide);
});


function toggleAnswer(faqItem) {
    const answer = faqItem.querySelector('.c-faq__answer');
    answer.classList.toggle('u-show-answer');
}

function validateForm() {
    var nameInput = document.getElementById("nameInput");
    var emailInput = document.getElementById("emailInput");
    var contactInput = document.getElementById("contactInput");

    if (nameInput.validity.valid && emailInput.validity.valid && contactInput.validity.valid) {
        alert("Form submitted successfully! Thank you for signing up.");
        return true; // Form submission allowed
    } else {
        // Display error messages or perform other actions
        if (!nameInput.validity.valid) {
            alert("Please enter a valid name.");
        } else if (!emailInput.validity.valid) {
            alert("Please enter a valid email address.");
        } else if (!contactInput.validity.valid) {
            alert("Please enter a 10-digit contact number.");
        }
        return false; // Prevent form submission
    }
}

