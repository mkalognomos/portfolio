/* =========================
REAL BACKGROUND ENGINE
(layer crossfade gradients)
========================= */

const gradients = [
  // warm peachy-cream pastel palette
  "linear-gradient(120deg, #d1c0b4, #d1c0b4)",  // cream start
  "linear-gradient(120deg, #c4daf8, #c4daf8)",  // warm peach
  "linear-gradient(120deg, #a6debcf6, #a6debcf6)",  // apricot
  "linear-gradient(120deg, #c1d3ee, #c1d3ee)",  // soft tan
];

let index = 0;
let front = document.getElementById("bg1");
let back = document.getElementById("bg2");

front.style.opacity = 1;
front.style.background = gradients[0];

function animateBackground() {
  index++;

  if (index >= gradients.length) index = 0;

  back.style.background = gradients[index];

  back.style.opacity = 1;
  front.style.opacity = 0;

  let temp = front;
  front = back;
  back = temp;
}

// pause longer between transitions for a slower effect
setInterval(animateBackground, 14000);

/* =========================
YEARS OF WORK CALCULATOR
========================= */
var DateDiff = {
  inYears: function(d1, d2) {
    return d2.getFullYear() - d1.getFullYear();
  }
};

var dString = "Feb, 01, 2012";
var d1 = new Date(dString);
var d2 = new Date();
var yearsElement = document.getElementById("yearsOfWork");
if (yearsElement) {
  yearsElement.textContent = DateDiff.inYears(d1, d2);
}
// Years of Work Calculator END

/* =========================
MOBILE MENU TOGGLE
========================= */

const menuToggle = document.querySelector(".menu-toggle");
const sidebarLinks = document.getElementById("sidebar-links");

if (menuToggle && sidebarLinks) {
  function toggleMobileMenu() {
    const isOpen = sidebarLinks.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  }

  menuToggle.addEventListener("click", toggleMobileMenu);

  menuToggle.addEventListener(
    "touchend",
    function(event) {
      event.preventDefault();
      toggleMobileMenu();
    },
    { passive: false }
  );

  sidebarLinks.querySelectorAll("a").forEach(function(link) {
    link.addEventListener("click", function() {
      if (window.innerWidth <= 700) {
        sidebarLinks.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
      }
    });
  });
}
