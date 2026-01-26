


const classSchedule = document.querySelector("#class-schedule")
const flipCards = classSchedule.querySelectorAll('.flip-card');
const flipCardLeftArrow = classSchedule.querySelector('#left-arrow');
const flipCardRightArrow = classSchedule.querySelector('#right-arrow');

flipCards.forEach(card => {
    card.addEventListener("click", () => {
        card.classList.toggle("flipped");
    })   
});



let currentFlipCard = 0;

// Initialize: Show first card directly
flipCards[currentFlipCard].classList.add('active');

// Function to show or change the card
function showFlipCards(direction) {
  // Remove active class from current card
  flipCards[currentFlipCard].classList.remove("active");

  // Update the current card index based on the direction (1 for next, -1 for previous)
  currentFlipCard += direction;

  // Wrap around if the index goes out of bounds
  if (currentFlipCard >= flipCards.length) {
    currentFlipCard = 0;
  } else if (currentFlipCard < 0) {
    currentFlipCard = flipCards.length - 1;
  } 

  // Show the new current card
  flipCards[currentFlipCard].classList.add('active');
}

document.addEventListener('DOMContentLoaded', (event) => {
  if (flipCardRightArrow) {
    flipCardRightArrow.addEventListener('click', (event) =>  {
        showFlipCards(1); // Call showFlipCards function with direction 1 (next)
    });
  } else {
    console.error('right-arrow element not found!');
  }
  if (flipCardLeftArrow) { 
    flipCardLeftArrow.addEventListener('click', (event) =>  {
        showFlipCards(-1); // Call showFlipCards function with direction 1 (next)
    });
  } else {
    console.error('left-arrow element not found!');
  }
});

