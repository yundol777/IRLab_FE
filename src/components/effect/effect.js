// const triggerMargin = 100;
const elementList = document.querySelectorAll('.scroll');
const move = document.getElementById('move');

const scrollFunc = function () {
  for (const element of elementList) {
    if (!element.classList.contains('show')) {
      if (window.innerHeight > element.getBoundingClientRect().top) {
        element.classList.add('show');
      }
    }
  }
};

function move__scroll() {
  document.querySelector('.project__section').scrollIntoView({ behavior: 'smooth' });
}

window.addEventListener('load', scrollFunc);
window.addEventListener('scroll', scrollFunc);
move.addEventListener('click', move__scroll);
