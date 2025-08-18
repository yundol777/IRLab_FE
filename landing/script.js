const data = [
  {
    img: '../src/assets/images/dummyImage.jpg',
    tag: 'event',
    date: '2025-07-01',
    title: '개발자 컨퍼런스 참석',
  },
  {
    img: '../src/assets/images/dummyImage.jpg',
    tag: 'paper',
    date: '2025-07-02',
    title: '자료구조 개념 복습',
  },
  {
    img: '../src/assets/images/dummyImage.jpg',
    tag: 'event',
    date: '2025-07-03',
    title: '스터디 모임 뒤풀이',
  },
  {
    img: '../src/assets/images/dummyImage.jpg',
    tag: 'paper',
    date: '2025-07-04',
    title: '알고리즘 문제 풀이 정리',
  },
  {
    img: '../src/assets/images/dummyImage.jpg',
    tag: 'event',
    date: '2025-07-05',
    title: '동아리 정기 모임',
  },
  {
    img: '../src/assets/images/dummyImage.jpg',
    tag: 'paper',
    date: '2025-07-06',
    title: '운영체제 강의 정리',
  },
];

const output = document.getElementById('data');

data.forEach((userData) => {
  output.innerHTML += `
    <div class="card black__filter">
    <img src="${userData.img}">
    <p>${userData.tag} | ${userData.date}</p>
    <h2>${userData.title}</h2>
    </div>
    `;
});
