const data = [
  {
    id: 1,
    profile: '../src/assets/images/dummyImage.jpg',
    name: '홍승혁',
    degree: '학부',
    field: 'FE',
    email: 'hong@example.com',
    portfolio: 'https://hong.dev',
  },
  {
    id: 2,
    profile: '../src/assets/images/dummyImage.jpg',
    name: '정윤석',
    degree: '학부',
    field: 'BE',
    email: 'yoonseok@example.com',
    portfolio: 'https://yoonseok.dev',
  },
  {
    id: 3,
    profile: '../src/assets/images/dummyImage.jpg',
    name: '정태현',
    degree: '학부',
    field: 'AI',
    email: 'taehyun@example.com',
    portfolio: 'https://taehyun.ai',
  },
  {
    id: 4,
    profile: '../src/assets/images/dummyImage.jpg',
    name: '최승희',
    degree: '학부',
    field: 'FE',
    email: 'seunghee@example.com',
    portfolio: 'https://seunghee.dev',
  },
  {
    id: 5,
    profile: '../src/assets/images/dummyImage.jpg',
    name: '이지은',
    degree: '학부',
    field: 'BE',
    email: 'jieun@example.com',
    portfolio: 'https://jieun.codes',
  },
];

const studentsList = document.querySelector('.students__list');

data.forEach((student) => {
  studentsList.innerHTML += `
    <div class="students__item">
              <div class="students__profile">
                <img src=${student.profile} alt="" />
              </div>
              <div class="students__info">
                <p class="students__name">${student.name}</p>
                <div class="students__detail">
                  <p>${student.degree}</p>
                  <p>/</p>
                  <p>${student.field}</p>
                </div>
                <a class="students__portfolio" href="https://github.com/">${student.portfolio}</a>
                <p class="students__email">${student.email}</p>
              </div>
            </div>
    `;
});
