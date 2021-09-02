//Carousel set up// 
const slides = document.getElementsByClassName('carousel-item');
let slidePosition = 0;
const totalSlides = slides.length;

document.getElementById('carousel-button-next').addEventListener('click', moveToNextSlide);
document.getElementById('carousel-button-prev').addEventListener('click', moveToPrevSlide);

// hides all slides first by giving them the hidden class. 
function hideAllSlides() {
    for (let slide of slides) {
        slide.classList.remove('carousel-item-visible');
        slide.classList.add('carousel-item-hidden');
    }
}

// Next button. First hides all slides, and shows the next one, whenever the "next" btn is pressed. It also goes back to the first slide when the user is in the last one. 
function moveToNextSlide() {
    hideAllSlides();

    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }

    slides[slidePosition].classList.add("carousel-item-visible");
}

// When the user presses the previous btn the slide position is decreased. 
function moveToPrevSlide() {
    hideAllSlides(); // First, hide all slides. 

    if (slidePosition === 0) { // if the user is in the first slide 
        slidePosition = totalSlides - 1; // go to the last slide
    } else {
        slidePosition--; // otherwise, decrease the slide position (move to the previous one)
    }

    slides[slidePosition].classList.add("carousel-item-visible"); // show the current slide position.
}

document.getElementById("searchInput").addEventListener("keyup", function (event) {
    let searchQuery = event.target.value.toLowerCase();
    let allNamesDOMCollection = document.getElementsByClassName('name');

    for (let counter = 0; counter < allNamesDOMCollection.length; counter++) {
        const currentName = allNamesDOMCollection[counter].textContent.toLowerCase();

        if (currentName.includes(searchQuery)) {
            allNamesDOMCollection[counter].style.display = "block";
        } else {
            allNamesDOMCollection[counter].style.display = "none";
        }
    }
});