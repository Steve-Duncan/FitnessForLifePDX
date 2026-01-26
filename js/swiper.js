// Initialize Swiper
var swiper = new Swiper(".swiper-container", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
    // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Add other slider options like navigation, breakpoints, etc.
});

// Handle card flips
document.querySelectorAll('.flip-btn').forEach(button => {
  button.addEventListener('click', function() {
    // Traverse up to the main slide element and toggle the 'is-flipped' class
    const slide = this.closest('.swiper-slide');
    slide.classList.toggle('is-flipped');
  });
});

