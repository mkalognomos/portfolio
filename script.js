/* =========================
REAL BACKGROUND ENGINE
(layer crossfade gradients)
========================= */

const gradients = [
  // warm peachy-cream pastel palette
  "linear-gradient(120deg, #fef5e7, #f9e4d4)",  // cream start
  "linear-gradient(120deg, #fce4d6, #f8d9c4)",  // warm peach
  "linear-gradient(120deg, #faddc1, #f5d4b0)",  // apricot
  "linear-gradient(120deg, #f5e6d3, #efe0cd)",  // soft tan
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
setInterval(animateBackground, 12000);

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
