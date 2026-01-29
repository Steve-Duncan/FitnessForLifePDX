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
                adjustSectionHeight();
            });
        }

        if (flipBtnBack) {
            flipBtnBack.addEventListener('click', (e) => {
                e.stopPropagation();
                card.classList.remove('flipped');
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
            sliderSection.style.paddingBottom = '8rem';
        } else {
            sliderSection.style.paddingBottom = '6rem';
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
