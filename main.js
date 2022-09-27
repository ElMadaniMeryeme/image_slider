const sliderImages = Array.from(document.querySelectorAll(".slider-container img"));
const slidesCount = sliderImages.length;

let currentSlide = 1;

const slideNumberElement = document.querySelector("#slide-number");
const nextButton = document.querySelector("#next");
const prevButton = document.querySelector("#prev");

const paginationElement = document.createElement("ul");

paginationElement.setAttribute("id", "pagination-ul");

for (let i = 1; i <= slidesCount; i++) {
  let paginationItem = document.createElement("li");

  paginationItem.setAttribute("data-index", `${i}`);
  paginationItem.appendChild(document.createTextNode(`${i}`));
  paginationElement.appendChild(paginationItem);

}

// Add The Created UL Element to The Page
document.querySelector("#indicators").appendChild(paginationElement);

// Get The New Created UL
let paginationCreatedUl = document.getElementById('pagination-ul');

// Get Pagination Items | Array.form [ES6 Feature]
let paginationsBullets = Array.from(document.querySelectorAll('#pagination-ul li'));

// Loop Through All Bullets Items
for (let i = 0; i < paginationsBullets.length; i++) {

  paginationsBullets[i].onclick = function () {

    currentSlide = parseInt(this.getAttribute('data-index'));

    theChecker();

  }

}

// Trigger The Checker Function
theChecker();

// Next Slide Function
function nextSlide() {

  if (nextButton.classList.contains('disabled')) {
    return false;
  } else {
    currentSlide++;
    theChecker();
  }

}

function prevSlide() {

  if (prevButton.classList.contains('disabled')) {
    return false;

  } else {
    currentSlide--;
    theChecker();
  }
}

nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

function theChecker() {

  slideNumberElement.textContent = 'Slide #' + (currentSlide) + ' of ' + (slidesCount);

  removeAllActive();

  sliderImages[currentSlide - 1].classList.add('active');

  paginationCreatedUl.children[currentSlide - 1].classList.add('active');

  if (currentSlide === 1) {
    prevButton.classList.add('disabled');
  } else {
    prevButton.classList.remove('disabled');

  }

  if (currentSlide === slidesCount) {
    nextButton.classList.add('disabled');
  } else {
    nextButton.classList.remove('disabled');
  }

}

function removeAllActive() {

    sliderImages.forEach(function (img) {
        img.classList.remove('active');
    });

    paginationsBullets.forEach(function (bullet) {
        bullet.classList.remove('active');
    });

}