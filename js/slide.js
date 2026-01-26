let slideIndex = 0;
showSlides(slideIndex);


function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "flex";
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}



/*let cardIndex = 0;
showCards(cardIndex);

function showCards() {
  let i;
  let cards = document.getElementsByClassName("card people");
  for (i = 0; i < cards.length; i++) {
    cards[i].style.display = "none";
  }
  cardIndex++;
  if (cardIndex > cards.length) {cardIndex = 1}
  cards[cardIndex-1].style.display = "flex";
  cards[cardIndex-1].style.flexDirection = "column";
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}



// Next/previous controls
const rightArrow=document.getElementById("rightArrow");
rightArrow.addEventListener("click", showCards()); 
*///   function() {
//   let n = cardIndex;
//   n++;
//   console.log("right arrow clicked")
//   showCards(n);
// });
  
  
// function plusCards(n) {
//   showCards(cardIndex += n);
// };


// Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

/*function showCards(n) {
  console.log("showCards function called; card# " + n)
  let i;
  let cards = document.getElementsByClassName("card people");
  // let cards = document.querySelectorAll("#realPeople.card")
  console.log("realPeople cards: " + cards.length);
  if (n > cards.length) {cardIndex = 1}
  // if (n < 1) {cardIndex = cards.length}
  for (i = 0; i < cards.length; i++) {
    cards[i].style.display = "none";
  }
  for (i = 0; i < cards.length; i++) {
    cards[i].className = cards[i].className.replace(" active", "");
  }
  cards[cardIndex-1].style.display = "flex";
  cards[cardIndex-1].className += " active";
}
*/