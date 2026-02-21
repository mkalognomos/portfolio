/* =========================
REAL BACKGROUND ENGINE
(layer crossfade gradients)
========================= */
const gradients = [
  "linear-gradient(120deg, #d4b9a6, #d4b9a6)",  // cream start
  "linear-gradient(120deg, #a9bfdd, #a9bfdd)",  // warm peach
  "linear-gradient(120deg, #89b79c, #89b79c)",  // apricot
  "linear-gradient(11520deg, #98aac4, #98aac4)",  // soft tan4
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
setInterval(animateBackground, 20000);

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
var footerCurrentYearElement = document.getElementById("footerCurrentYear");
if (yearsElement) {
  yearsElement.textContent = DateDiff.inYears(d1, d2);
}
if (footerCurrentYearElement) {
  footerCurrentYearElement.textContent = d2.getFullYear();
}
// Years of Work Calculator END

/* =========================
MOBILE MENU TOGGLE
========================= */

const menuToggle = document.querySelector(".menu-toggle");
const sidebarLinks = document.getElementById("sidebar-links");
const scrollTopBtn = document.querySelector(".scroll-top-btn");
const SECTION_TOP_OFFSET = 72;

if (menuToggle && sidebarLinks) {
  function toggleMobileMenu() {
    const isOpen = sidebarLinks.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  }

  menuToggle.addEventListener("click", toggleMobileMenu);
}

const sidebarAnchorLinks = Array.from(
  document.querySelectorAll('.sidebar a[href^="#"]')
);

function smoothScrollTo(targetY, duration) {
  const startY = window.pageYOffset;
  const distance = targetY - startY;
  const totalDuration = duration || 700;
  let startTime = null;

  function easeInOutQuad(progress) {
    return progress < 0.5
      ? 2 * progress * progress
      : 1 - Math.pow(-2 * progress + 2, 2) / 2;
  }

  function animate(currentTime) {
    if (!startTime) startTime = currentTime;

    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / totalDuration, 1);
    const eased = easeInOutQuad(progress);

    window.scrollTo(0, startY + distance * eased);

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  }

  requestAnimationFrame(animate);
}

sidebarAnchorLinks.forEach(function(link) {
  link.addEventListener("click", function(event) {
    const targetId = link.getAttribute("href");
    if (!targetId || !targetId.startsWith("#")) return;

    const targetSection = document.querySelector(targetId);
    if (!targetSection) return;

    event.preventDefault();

    const targetY = Math.max(
      0,
      targetSection.getBoundingClientRect().top + window.pageYOffset - SECTION_TOP_OFFSET
    );
    smoothScrollTo(targetY, 700);

    if (history.replaceState) {
      history.replaceState(null, "", targetId);
    }

    if (window.innerWidth <= 700 && sidebarLinks && menuToggle) {
      sidebarLinks.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
});

if (scrollTopBtn) {
  function toggleScrollTopVisibility() {
    const shouldShow = window.pageYOffset > 280;
    scrollTopBtn.classList.toggle("is-visible", shouldShow);
  }

  window.addEventListener("scroll", toggleScrollTopVisibility, { passive: true });
  toggleScrollTopVisibility();

  scrollTopBtn.addEventListener("click", function() {
    smoothScrollTo(0, 700);
  });
}


