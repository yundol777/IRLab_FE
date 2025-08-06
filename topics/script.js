const data = [
  {
    img: '../src/assets/images/humanImage.jpg',
    tag: 'event',
    date: '2025-07-01',
    title: '개발자 컨퍼런스 참석',
  },
  {
    img: '../src/assets/images/humanImage.jpg',
    tag: 'paper',
    date: '2025-07-02',
    title: '자료구조 개념 복습',
  },
  {
    img: '../src/assets/images/humanImage.jpg',
    tag: 'event',
    date: '2025-07-03',
    title: '스터디 모임 뒤풀이',
  },
  {
    img: '../src/assets/images/humanImage.jpg',
    tag: 'paper',
    date: '2025-07-04',
    title: '알고리즘 문제 풀이 정리',
  },
  {
    img: '../src/assets/images/humanImage.jpg',
    tag: 'event',
    date: '2025-07-05',
    title: '동아리 정기 모임',
  },
  {
    img: '../src/assets/images/humanImage.jpg',
    tag: 'paper',
    date: '2025-07-06',
    title: '운영체제 강의 정리',
  },
  {
    img: '../src/assets/images/humanImage.jpg',
    tag: 'event',
    date: '2025-07-07',
    title: '기술 세미나 참가',
  },
  {
    img: '../src/assets/images/humanImage.jpg',
    tag: 'paper',
    date: '2025-07-08',
    title: '네트워크 개념 노트 정리',
  },
  {
    img: '../src/assets/images/humanImage.jpg',
    tag: 'event',
    date: '2025-07-09',
    title: '친구들과 영화 관람',
  },
];

const output = document.getElementById('topic__content');
const all = document.getElementById('all');
const events = document.getElementById('events');
const papers = document.getElementById('papers');

all.addEventListener('click', function () {
  all.classList.add('lnb__fix');
  events.classList.remove('lnb__fix');
  papers.classList.remove('lnb__fix');
  output.innerHTML = '';
  data.forEach((userData) => {
    output.innerHTML += `
      <div class="topic__card">
      <img src="${userData.img}" alt="card priview image">
      <p>${userData.tag} | ${userData.date}</p>
      <p>${userData.title}</p>
      </div>
      `;
  });
});

data.forEach((userData) => {
  all.classList.add('lnb__fix');
  output.innerHTML += `
    <div class="topic__card">
    <img src="${userData.img}" alt="card priview image">
    <p>${userData.tag} | ${userData.date}</p>
    <p>${userData.title}</p>
    </div>
    `;
});

let eventData = data.filter((value) => value.tag == 'event');
events.addEventListener('click', function () {
  all.classList.remove('lnb__fix');
  events.classList.add('lnb__fix');
  papers.classList.remove('lnb__fix');
  output.innerHTML = '';
  eventData.forEach((userData) => {
    output.innerHTML += `
      <div class="topic__card">
      <img src="${userData.img}" alt="card priview image">
      <p>${userData.tag} | ${userData.date}</p>
      <p>${userData.title}</p>
      </div>
      `;
  });
});

let paperData = data.filter((value) => value.tag == 'paper');
papers.addEventListener('click', function () {
  all.classList.remove('lnb__fix');
  events.classList.remove('lnb__fix');
  papers.classList.add('lnb__fix');
  output.innerHTML = '';
  paperData.forEach((userData) => {
    output.innerHTML += `
      <div class="topic__card">
      <img src="${userData.img}" alt="card priview image">
      <p>${userData.tag} | ${userData.date}</p>
      <p>${userData.title}</p>
      </div>
      `;
  });
});
