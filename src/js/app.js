import $ from 'jquery';
import "../../node_modules/slick-slider/slick/slick.css";
import "../../node_modules/slick-slider/slick/slick.min.js";

$('.slider-image').slick({
  arrows: false,
  dots: true,
  autoplay: true,
  autoplaySpeed: 3000
});

const slickDots = document.querySelector('.slick-dots');
const slickDotsItems = document.querySelectorAll('li');

