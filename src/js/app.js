import $ from 'jquery';
import "../../node_modules/slick-slider/slick/slick.css";
import "../../node_modules/slick-slider/slick/slick.min.js";


$('.slider-image').slick({
  arrows: false,
  dots: true,
  autoplay: true,
  autoplaySpeed: 3000
});


const navigation = document.querySelectorAll('.navigation__list-link');

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


