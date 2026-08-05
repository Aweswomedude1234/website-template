/* ===================================================================
   SCRIPT.JS

   JavaScript is the part of a website that DOES things.

   HTML = what is on the page
   CSS  = what it looks like
   JS   = what happens when you click or scroll

   There are only two small jobs in this file. Read the comments and
   you will understand more than you expect.
   =================================================================== */


/* -------------------------------------------------------------------
   JOB 0: tell the CSS that JavaScript is running.

   This exists so the page still shows up normally if JavaScript ever
   fails to load.
   ------------------------------------------------------------------- */
document.documentElement.classList.add("js-on");


/* -------------------------------------------------------------------
   JOB 1: THE DARK MODE BUTTON

   In index.html you wrote a button like this:
     <button class="theme-btn" onclick="switchTheme()">Dark</button>

   The onclick attribute tells the browser: when this button is
   clicked, run the function named switchTheme.
   ------------------------------------------------------------------- */
function switchTheme() {
  // "toggle" means: if the body has the class "dark", take it off.
  // If it does not have it, put it on. Like a light switch.
  document.body.classList.toggle("dark");

  // Now change the words on the button itself.
  var button = document.querySelector(".theme-btn");
  if (document.body.classList.contains("dark")) {
    button.textContent = "Light";
  } else {
    button.textContent = "Dark";
  }
}


/* -------------------------------------------------------------------
   JOB 2: FADE THINGS IN WHEN YOU SCROLL TO THEM

   Anything with class="reveal" starts invisible. This code watches
   the page and, the moment one of those elements scrolls into view,
   it adds class="seen" to it. The CSS does the actual animation.
   ------------------------------------------------------------------- */

// Step 1: find every element that has class="reveal"
var thingsToReveal = document.querySelectorAll(".reveal");

// Step 2: build a watcher that notices when they enter the screen
var watcher = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("seen");  // this starts the animation
      watcher.unobserve(entry.target);     // only animate once
    }
  });
}, {
  threshold: 0.15   // wait until 15% of the element is on screen
});

// Step 3: tell the watcher to watch each one
thingsToReveal.forEach(function (thing) {
  watcher.observe(thing);
});


/* -------------------------------------------------------------------
   WANT TO TRY SOMETHING EXTRA?

   Delete the // in front of the four lines below, then change your
   heading in index.html to:

     <h1 onclick="surprise()">Your Name</h1>

   Save, refresh, and click your own name.
   ------------------------------------------------------------------- */

// function surprise() {
//   alert("You built this website yourself.");
// }
