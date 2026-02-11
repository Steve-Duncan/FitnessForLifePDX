document.addEventListener('DOMContentLoaded', () => {
    const btnJourney = document.getElementById("btn-journey");

    btnJourney.addEventListener("click", (e) => {
        
        const helloDiv1 = document.getElementById("hello-1");
        const helloDiv2 = document.getElementById("hello-2");
        e.stopPropagation();



        if (btnJourney.innerHTML === 'More about my journey') {
            console.log("Btn clicked - go to credentials");
            fadeOutAndHide(helloDiv1, helloDiv2);
            btnJourney.innerHTML = 'My Credentials';
        } else if (btnJourney.innerHTML === 'My Credentials') {
            console.log("Btn clicked - go to about");
            fadeOutAndHide(helloDiv2, helloDiv1);
            btnJourney.innerHTML = 'More about my journey';
        }
    });
});

function fadeOutAndHide(elementHide, elementShow) {
  // Start the fade out by adding the 'hide' class
  elementHide.classList.add("hide");

  // Wait for the transition to finish before setting display: none
  setTimeout(() => {
    elementHide.style.display = "none";
    elementShow.classList.remove('hide');
  elementShow.style.display = ("flex")
  }, 500); // This duration must match the CSS transition duration
  
  
}

/*document.addEventListener('DOMContentLoaded', () => {
    const btnJourney = document.getElementById("btn-journey");

    btnJourney.addEventListener("click", (e) => {
        transitionElements();
    });
});

function transitionElements() {
    console.log("transition elements called")
  const el1 = document.getElementById('hello-1');
  const el2 = document.getElementById('hello-2');

  // 1. Fade out the current element
  el1.classList.remove('show');

  // 2. Wait for the transition to end before fading in the next
  // Use a callback or event listener to ensure sequence
  el1.addEventListener('transitionend', function handler() {
    // Remove the listener to prevent it from running again on subsequent transitions
    el1.removeEventListener('transitionend', handler);

    // 3. Fade in the new element
    el2.classList.add('show');

    // In a real application, you might also manage which one is 'current'
    // For this simple example, we swap classes directly
    // A more robust solution would manage the state better.
  });
}*/