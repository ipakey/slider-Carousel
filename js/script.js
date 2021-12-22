const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const next = document.querySelector('.carousel__button--right');
const prev = document.querySelector('.carousel__button--left');
const dotsNav  = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children);

//arrange slides next to one another
const slideWidth = slides[0].getBoundingClientRect().width;
    // slides[0].style.left = slideWidth * 0 + 'px';
    // slides[1].style.left = slideWidth * 1 + 'px';
    // slides[2].style.left = slideWidth * 2 + 'px';
    // slides[3].style.left = slideWidth * 3 + 'px';
    // slides[4].style.left = slideWidth * 4 + 'px';
    // console.log(slideWidth);

const setSlidePosition = (slide, index) =>{
    slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition);



//when i click left move slides to left
const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
};

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
};

const hideShowArrows = (slides, prev, next, targetIndex) => {
    if(targetIndex === 0){
        prev.classList.add('is-hidden');
        next.classList.remove('is-hidden');
    }
    else if(targetIndex ===slides.length - 1){
        prev.classList.remove('is-hidden');
        next.classList.add('is-hidden');
    } else{
        prev.classList.remove('is-hidden');
        next.classList.remove('is-hidden');
    }
};

prev.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);

    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
    hideShowArrows (slides, prev, next, prevIndex);
   
    console.log(prevSlide.innerHTML);
});

//when i click right move slides to right
next.addEventListener('click', e => {

    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);

    //when I click the nav indicators, move to next slide
    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
    hideShowArrows (slides, prev, next, nextIndex);

    console.log(nextSlide.innerHTML);
});

dotsNav.addEventListener('click', e => {
    //what indicator was clicked on? 
    const targetDot = e.target.closest('button');

    
    if(!targetDot) return;
    // console.log('test2');

    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    console.log(targetIndex);
    const targetSlide = slides[targetIndex];
    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    hideShowArrows (slides, prev, next, targetIndex);
    console.log(targetSlide.innerHTML);


});



