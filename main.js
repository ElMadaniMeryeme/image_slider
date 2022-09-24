//Get Slider Items | Array.from [ES6 Feature]
let sliderImages = Array.from(document.querySelectorAll('.slider-container img'));

//Get Number Of Slides
let slidesCount = sliderImages.length;

//Set Current Slide
let currentSlide = 1;

//Slide Number Element
let slideNumberElt = document.getElementById('slide-number');

//Preious and Next Buttons
let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');

//Handle Click on Previous and Next Buttons
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

//Create The Mail ul element
let paginationElt = document.createElement('ul');

//Set ID OnCreated ul element
paginationElt.setAttribute('id', 'pagination-ul');

//Create list item based on slides count
for(let i = 1; i <= slidesCount; i++) {
    
    //Create the li
    let paginationItem = document.createElement('li');
    
    //Set custom attribute
    paginationItem.setAttribute('data-index', i);
    
    //Set Item content
    paginationItem.appendChild(document.createTextNode(i));
    
    //Append items to the main ul list
    paginationElt.appendChild(paginationItem);
}

//Add the created ul element to the page
document.getElementById('indicators').appendChild(paginationElt);

//Get the new created ul
let paginationCreatedUl = document.getElementById('pagination-ul');

//Get Pagination Items | Array.from [ES6 Feature]
let paginationsBullets = Array.from(document.querySelectorAll('#pagination-ul li'));

//Loop through all bullets items
for(let i = 0; i < paginationsBullets.length; i++) {
    paginationsBullets[i].onclick = function () {
        currentSlide = parseInt(this.getAttribute('data-index'));
        
        theChecker();
    }
}

//Trigger the checker function
theChecker();


//Next Slide function
function nextSlide() {
    
    if(nextButton.classList.contains('disabled')) {
       return false;
    } else {
        currentSlide++;
        theChecker();
    }
    
}

//Previous Slide Function
function prevSlide() {
    
    if(prevButton.classList.contains('disabled')) {
       return false;
    } else {
        currentSlide--;
        theChecker();
    }
}

//Create The Checker Function
function theChecker() {
    
    //Set the slide number
    slideNumberElt.textContent = 'Slide #' + (currentSlide) + ' of ' + (slidesCount);
    
    //Remove all active classes
    removeAllActive();
    
    //Set active class on current slide
    sliderImages[currentSlide - 1].classList.add('active');
    
    //Set active class on current pagination item
    paginationCreatedUl.children[currentSlide - 1].classList.add('active');
    
    //Check if current slide is the first
    if(currentSlide === 1) {
        
        //Add Disabled Class on previous button
        prevButton.classList.add('disabled');
    } else {
        //Remove Disabled Class on previous button
        prevButton.classList.remove('disabled');
    }
    
    //Check if current slide is the last
    if(currentSlide === slidesCount) {
        
        //Add Disabled Class on next button
        nextButton.classList.add('disabled');
    } else {
        //Remove Disabled Class on next button
        nextButton.classList.remove('disabled');
    }
}

//Remove All Active Classes From Images and Pagination Bullets
function removeAllActive() {
    
    //Loop through images
    sliderImages.forEach(function (img) {
        img.classList.remove('active');
    });
    
    //Loop through Paginations Bullets
    paginationsBullets.forEach(function (bullet) {
        bullet.classList.remove('active');
    });
}