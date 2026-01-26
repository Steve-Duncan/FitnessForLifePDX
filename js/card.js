/*  // hide all cards
  const items = document.querySelectorAll('#real-people.card-wrapper.card');
  items.forEach(item => {
    item.classList.add('hidden');
  });

// Function to show the next 'n' items (e.g., 3 for a new row)
function showNextItems(n) {
  let itemsShown = 0;
  for (let i = 0; i < items.length; i++) {
    if (items[i].classList.contains('hidden') && itemsShown < n) {
      items[i].classList.remove('hidden');
      itemsShown++;
    }
  }
  // Hide button if no more hidden items exist
  if (document.querySelectorAll('.flex-item.hidden').length === 0) {
    showMoreBtn.style.display = 'none';
  }
}

const realPeople = document.querySelector("#real-people")
const peopleCards = realPeople.querySelectorAll('.card.people');
const peopleLeftArrow = realPeople.querySelector('#left-arrow');
const peopleRightArrow = realPeople.querySelector('#right-arrow');

 let currentCard = 0;

// Initialize: Show first card directly
peopleCards[currentCard].classList.add('active');

// Function to show or change the card
function showPeopleCards(direction) {
  // Remove active class from current card
  peopleCards[currentCard].classList.remove("active");

  // Update the current card index based on the direction (1 for next, -1 for previous)
  currentCard += direction;

  // Wrap around if the index goes out of bounds
  if (currentCard >= peopleCards.length) {
    currentCard = 0;
  } else if (currentCard < 0) {
    currentCard = peopleCards.length - 1;
  } 

  // Show the new current card
  peopleCards[currentCard].classList.add('active');
}

document.addEventListener('DOMContentLoaded', (event) => {
  if (peopleRightArrow) {
    peopleRightArrow.addEventListener('click', (event) =>  {
        showPeopleCards(1); // Call showPeopleCards function with direction 1 (next)
    });
  } else {
    console.error('right-arrow element not found!');
  }
  if (peopleLeftArrow) { 
    peopleLeftArrow.addEventListener('click', (event) =>  {
        showPeopleCards(-1); // Call showPeopleCards function with direction 1 (next)
    });
  } else {
    console.error('left-arrow element not found!');
  }
});

*/
/*document.addEventListener('DOMContentLoaded', () => {
  const rightArrow = document.getElementById('right-arrow');
  const leftArrow = document.getElementById('left-arrow');
  const cards = document.querySelectorAll('.card.people');
  let currentCard = 0;
  
  // Show first card initially
  if (cards.length > 0) {
    cards[0].classList.add('active');
  }
  
  function showCard(index) {
    cards.forEach(card => card.classList.remove('active'));
    cards[index].classList.add('active');
  }
  
  if (rightArrow) {
    rightArrow.addEventListener('click', () => {
      currentCard = (currentCard + 1) % cards.length;
      showCard(currentCard);
    });
  }
  
  if (leftArrow) {
    leftArrow.addEventListener('click', () => {
      currentCard = (currentCard - 1 + cards.length) % cards.length;
      showCard(currentCard);
    });
  }
});
*/
document.addEventListener('DOMContentLoaded', () => {
  const rightArrow = document.getElementById('right-arrow');
  const leftArrow = document.getElementById('left-arrow');
  const cards = document.querySelectorAll('.card.people');
  
  let currentIndex = 0;
  let cardsPerView = window.innerWidth > 768 ? 3 : 1;
  
  // Initialize - show first set of cards
  function updateCardVisibility() {
    cardsPerView = window.innerWidth > 768 ? 3 : 1;
    
    cards.forEach((card, index) => {
      if (index >= currentIndex && index < currentIndex + cardsPerView) {
        card.classList.add('active');
        card.classList.remove('hidden-card');
      } else {
        card.classList.remove('active');
        card.classList.add('hidden-card');
      }
    });
  }
  
  // Navigation arrows
  if (rightArrow) {
    rightArrow.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % cards.length;
      // Loop back to start if we'd go past the end
      if (currentIndex + cardsPerView > cards.length) {
        currentIndex = 0;
      }
      updateCardVisibility();
    });
  }
  
  if (leftArrow) {
    leftArrow.addEventListener('click', () => {
      currentIndex = currentIndex - 1;
      if (currentIndex < 0) {
        currentIndex = Math.max(0, cards.length - cardsPerView);
      }
      updateCardVisibility();
    });
  }
  
  // Handle window resize
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      updateCardVisibility();
    }, 250);
  });
  
  // Initialize on load
  updateCardVisibility();
});
