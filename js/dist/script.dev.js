"use strict";

var track = document.querySelector('.carousel__track');
var slides = Array.from(track.children);
var next = document.querySelector('.carousel__button--right');
var prev = document.querySelector('.carousel__button--left');
var dotsNav = document.querySelector('.carousel__nav');
var dots = Array.from(dotsNav.children);
var slideWidth = slides[0].getBoundingClientRect().width; //arrange slides next to one another
// slides[0].style.left = slideWidth * 0 + 'px';
// slides[1].style.left = slideWidth * 1 + 'px';
// slides[2].style.left = slideWidth * 2 + 'px';
// slides[3].style.left = slideWidth * 3 + 'px';
// slides[4].style.left = slideWidth * 4 + 'px';

var setSlidePosition = function setSlidePosition(slide, index) {
  slide.style.left = slideWidth * index + 'px';
};

slides.forEach(setSlidePosition); //when i click left move slides to left
//when i click right move slides to right

next.addEventListener('click', function (e) {
  var currentSlide = track.querySelector('.current-slide');
  var nextSlide = currentSlide.nextElementSibling;
});
console.log(track);
console.log(currentSlide); //when I click the nav indicators, move to that slide