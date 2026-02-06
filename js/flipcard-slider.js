document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.flip-card');
    const leftArrow = document.getElementById('slider-left-arrow');
    const rightArrow = document.getElementById('slider-right-arrow');
    const sliderSection = document.querySelector('.flip-card-slider');
    
    let currentIndex = 0;
    let cardsPerView = window.innerWidth > 768 ? 3 : 1;

    // Initialize - show first set of cards
    function updateCardVisibility() {
        cardsPerView = window.innerWidth > 768 ? 3 : 1;
        
        cards.forEach((card, index) => {
            if (index >= currentIndex && index < currentIndex + cardsPerView) {
                card.classList.remove('hidden-card');
            } else {
                card.classList.add('hidden-card');
            }
        });
    }

    // Flip card functionality - click anywhere on card to flip
    cards.forEach(card => {
        const cardInner = card.querySelector('.flip-card-inner');
        const flipBtn = card.querySelector('.flip-btn');
        const flipBtnBack = card.querySelector('.flip-btn-back');
        const flipBtnBack2 = card.querySelector('.flip-btn-back-2');
        const flipBtnLocations = card.querySelector('.flip-btn-locations');
        const level2Front = card.querySelector(".level-2-front");
        const level2Back = card.querySelector(".level-2-back");

        // Click anywhere on the card to flip
        cardInner.addEventListener('click', (e) => {
            // Prevent double-trigger from button clicks
            if (!e.target.classList.contains('flip-btn') && 
                !e.target.classList.contains('flip-btn-back')) {
                card.classList.toggle('flipped');
                adjustSectionHeight();
            }
        });

        // Button clicks also flip (with event propagation stopped)
        if (flipBtn) {
            flipBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                card.classList.add('flipped');
                level2Back.classList.add('hidden');
                level2Front.classList.remove('hidden');

                adjustSectionHeight();
            });
        }

        if (flipBtnBack) {
            flipBtnBack.addEventListener('click', (e) => {
                // e.stopPropagation();
                card.classList.remove('flipped');
                level2Back.classList.add('hidden');
                // level2Front.classList.add('hidden');
                adjustSectionHeight();
            });
        }
        if (flipBtnBack2) {
            flipBtnBack2.addEventListener('click', (e) => {
                // e.stopPropagation();
                card.classList.add('flipped');
                level2Back.classList.add('hidden');
                level2Front.classList.remove('hidden');
                adjustSectionHeight();
            });
        }


        if (flipBtnLocations) {
            flipBtnLocations.addEventListener('click', (e) => {
                e.stopPropagation();
                level2Back.classList.remove('hidden');
                level2Front.classList.add('hidden');
                level2Front.classList.add('hidden');
                // locations.classList.add('showMe');
                adjustSectionHeight();
            });
        }
    });

    // Adjust section height based on flipped cards
    function adjustSectionHeight() {
        const visibleCards = Array.from(cards).filter(card => 
            !card.classList.contains('hidden-card')
        );
        const hasFlipped = visibleCards.some(card => 
            card.classList.contains('flipped')
        );
        
        if (hasFlipped) {
            // sliderSection.style.paddingBottom = '10rem';
        } else {
            // sliderSection.style.paddingBottom = '8rem';
        }
    }

    // Navigation arrows
    if (rightArrow) {
        rightArrow.addEventListener('click', () => {
            // Unflip all cards before navigating
            cards.forEach(card => card.classList.remove('flipped'));
            
            currentIndex = (currentIndex + 1) % cards.length;
            if (currentIndex + cardsPerView > cards.length) {
                currentIndex = 0;
            }
            updateCardVisibility();
            adjustSectionHeight();
        });
    }

    if (leftArrow) {
        leftArrow.addEventListener('click', () => {
            // Unflip all cards before navigating
            cards.forEach(card => card.classList.remove('flipped'));
            
            currentIndex = currentIndex - 1;
            if (currentIndex < 0) {
                currentIndex = Math.max(0, cards.length - cardsPerView);
            }
            updateCardVisibility();
            adjustSectionHeight();
        });
    }

    // Handle window resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            updateCardVisibility();
            adjustSectionHeight();
        }, 250);
    });

    // Initialize
    updateCardVisibility();
});
