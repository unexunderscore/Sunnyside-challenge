// Checking the JS file is connected to HTML
let greetings = "Hi there!";
console.log(greetings);


// Selecting nav section 
const nav = document.getElementById("navbar");

// Selecting hamburger icon
const hambi = document.getElementById("hamburger");

// Selecting hamburger menu

const hamenu = document.getElementById("hamenu");

// Toggle Hamburger menu
function toggleMenu() {
  if (hamenu.classList.contains('hide')) {
    hamenu.classList.remove("hide");
  } else {
    hamenu.classList.add("hide");
  }
}


// If max width 730px or lower the navbar is hided (also hamburger menu hided if width higher then 730px)
function mobileMenu(x) {
    if (x.matches) { // If media query matches
      nav.classList.add("hide")
      hambi.classList.remove("hide");
    } else {
        nav.classList.remove("hide")
        hambi.classList.add("hide");
        hamenu.classList.add("hide");
    }
  }
  
  var x = window.matchMedia("(max-width: 730px)")
  mobileMenu(x) // Call listener function at run time
  x.addListener(mobileMenu) // Attach listener function on state changes 