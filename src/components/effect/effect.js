// const triggerMargin = 100;
const elementList = document.querySelectorAll('.scroll');

const scrollFunc = function () {
  for (const element of elementList) {
    if (!element.classList.contains('show')) {
      if (window.innerHeight > element.getBoundingClientRect().top) {
        element.classList.add('show');
      }
    }
  }
};

window.addEventListener('load', scrollFunc);
window.addEventListener('scroll', scrollFunc);
window.addEventListener('click', move__scroll);

function move__scroll() {
  document.querySelector('.project__section').scrollIntoView({ behavior: 'smooth' });
}
