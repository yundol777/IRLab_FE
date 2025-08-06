var gnb = document.querySelector('.gnb');

gnb.innerHTML += `
<nav class="gnb__bar">
<div class="gnb__title">
<img src="../src/assets/images/humanImage.jpg" alt="IR Lab logo" />
<h1>IR Lab</h1>
</div>
<ul class="gnb__list">
<li class="gnb__item">
<a href="#">MEMBERS</a>
<span class="gnb__underline"></span>
</li>
<li class="gnb__item">
<a href="#">PROJECTS</a>
<span class="gnb__underline"></span>
</li>
<li class="gnb__item">
<a href="#">RESEARCH</a>
<span class="gnb__underline"></span>
</li>
<li class="gnb__item">
<a href="#">TOPICS</a>
<span class="gnb__underline"></span>
</li>
<li class="gnb__button">
<a href="#">CONTACT</a>
</li>
</ul>
</nav>
`;

var gnb__bar = document.querySelector('.gnb__bar');

var stopScroll = window.pageYOffset;
window.onscroll = function () {
  var moveScroll = window.pageYOffset;
  if (stopScroll > moveScroll) {
    gnb__bar.style.top = '0';
  } else {
    gnb__bar.style.top = '-80px';
  }
  stopScroll = moveScroll;
};
