'use strict';

// Function to toggle the visibility of navigation items
function showNav() {
    var element = document.getElementById("c-navbar-items");
    element.classList.toggle("show-items");
}

// Function to handle scrolling and fix the navigation bar
function handleScroll() {
    var header = document.querySelector('.header');
    if (window.scrollY > 0) {
        header.classList.add('fixed-nav');
    } else {
        header.classList.remove('fixed-nav');
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
        const button = document.createElement('button');
        button.addEventListener('click', () => {
            setActive(index);
        });
        pagination.appendChild(button);
    });
  
    setActive(0);

    // Set event listener for scrolling
    window.addEventListener('scroll', handleScroll);
  
    function setActive(index) {
        images.forEach((img, i) => {
            if (i === index) {
                img.style.display = 'block';
                pagination.children[i].classList.add('active');
            } else {
                img.style.display = 'none';
                pagination.children[i].classList.remove('active');
            }
        });
    }
});


// Add testimonial slider functionality

document.addEventListener("DOMContentLoaded", function() {
  const slides = document.querySelectorAll(".c-testimonial-slide");
  let currentSlide = 0;

  function showSlide(index) {
      slides.forEach((slide) => slide.style.display = "none");
      for (let i = 0; i < 3; i++) {
          const adjustedIndex = (index + i) % slides.length;
          slides[adjustedIndex].style.display = "block";
      }
  }

  document.querySelector(".u-prevBtn").addEventListener("click", function() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
  });

  document.querySelector(".u-nextBtn").addEventListener("click", function() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
  });

  document.querySelector(".u-prevBtn-mobile").addEventListener("click", function() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});

document.querySelector(".u-nextBtn-mobile").addEventListener("click", function() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});
  // Show the first three slides initially
  showSlide(currentSlide);
});
