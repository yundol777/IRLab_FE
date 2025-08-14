var gnb = document.querySelector('.gnb');

gnb.innerHTML += `
<nav class="gnb__bar">
<div class="gnb__title" onclick="location.href='http://localhost:5173/landing/'">
<img src="../src/assets/images/humanImage.jpg" alt="IR Lab logo" />
<h1>IR Lab</h1>
</div>
<ul class="gnb__list">
<li class="gnb__item">
<a href="#">MEMBERS</a>
<span class="gnb__underline"></span>
</li>
<li class="gnb__item">
<a href="../projects/index.html">PROJECTS</a>
<span class="gnb__underline"></span>
</li>
<li class="gnb__item">
<a href="#">RESEARCH</a>
<span class="gnb__underline"></span>
</li>
<li class="gnb__item">
<a href="../topics/index.html">TOPICS</a>
<span class="gnb__underline"></span>
</li>
<li class="gnb__button">
<a href="#">CONTACT</a>
</li>
</ul>
</nav>
`;

var gnbBar = document.querySelector('.gnb__bar');

var stopScroll = window.pageYOffset;
window.onscroll = function () {
  var moveScroll = window.pageYOffset;
  if (stopScroll > moveScroll) {
    gnbBar.classList.remove('gnb__bar__hidden');
  } else {
    gnbBar.classList.add('gnb__bar__hidden');
  }
  stopScroll = moveScroll;
};
