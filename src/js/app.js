import $ from 'jquery';
import "../../node_modules/slick-slider/slick/slick.css";
import "../../node_modules/slick-slider/slick/slick.min.js";


$('.slider-image').slick({
  arrows: false,
  dots: true,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 964,
      settings: {
        dots: false
      }
    }
  ]
});

$(".slider").slick({
  slideToShow: 1,
  slideToScroll: 1,
  arrows: false,
  dots: true,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 964,
      settings: {
        dots: false,
      },
    },
  ],
});

const navigation = document.querySelectorAll('.navigation__list-link');
const burger = document.querySelector('.burger');
const burgerContent = document.querySelector('.burger__content');

function getIndex() {
  let idx = [...navigation].findIndex((el) => {
    return el.parentElement.classList.contains("--active");
  });

  return idx;
}

navigation.forEach((item) => {

  item.addEventListener('click', (e) => {
    e.preventDefault();
    const target = e.currentTarget.parentElement;

    let index = getIndex();

    navigation[index].parentElement.classList.remove('--active');
    target.classList.add('--active');

    const title = document.querySelector('.presentation__title');
    title.textContent = target.textContent;

  })
})

window.addEventListener('click', (e) => {
  
  const target = e.target;

  if (target.closest('.burger__content')) {
    return;
  }

  burger.classList.remove('--active');
  burgerContent.classList.remove('--active');

})

burger.addEventListener('click', (e) => {
  e.target.classList.toggle('--active');
  burgerContent.classList.toggle('--active');  
  e.stopPropagation();
})


