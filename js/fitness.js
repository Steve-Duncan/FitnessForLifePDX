const fitnessClasses = document.querySelector("#fitness-classes")
const fitnessCards = fitnessClasses.querySelectorAll('.card');
const fitnessLeftArrow = fitnessClasses.querySelector('#left-arrow');
const fitnessRightArrow = fitnessClasses.querySelector('#right-arrow');

currentCard = 0;

// Initialize: Show first card directly
fitnessCards[currentCard].classList.add('active');

// Function to show or change the card
function showFitnessCard(direction) {
  // Remove active class from current card
  fitnessCards[currentCard].classList.remove("active");

  // Update the current card index based on the direction (1 for next, -1 for previous)
  currentCard += direction;

  // Wrap around if the index goes out of bounds
  if (currentCard >= fitnessCards.length) {
    currentCard = 0;
  } else if (currentCard < 0) {
    currentCard = fitnessCards.length - 1;
  } 

  // Show the new current card
  fitnessCards[currentCard].classList.add('active');
}

document.addEventListener('DOMContentLoaded', (event) => {

  if (fitnessRightArrow) { 
    fitnessRightArrow.addEventListener('click', (event) =>  {
      console.log("right-arrow clicked!")
        showFitnessCard(1); 
    });
  } else {
    console.error('right-arrow element not found!');
  }

    if (fitnessLeftArrow) { 
      fitnessLeftArrow.addEventListener('click', (event) =>  {
        showFitnessCard(-1); // Call showFitnessCard function with direction 1 (next)
      });
    } else {
      console.error('left-arrow element not found!');
    }
});

