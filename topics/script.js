const data = [
  {
    img: '../src/assets/images/humanImage.jpg',
    tag: 'event',
    date: '2025-07-01',
    title: '개발자 컨퍼런스 참석',
    content:
      '도쿄에서 열린 2025 개발자 컨퍼런스에 참석하여 최신 기술 동향과 다양한 세션을 통해 많은 인사이트를 얻었습니다. 업계 전문가들과의 교류도 뜻깊은 경험이었습니다.',
  },
  {
    img: '../src/assets/images/humanImage.jpg',
    tag: 'paper',
    date: '2025-07-02',
    title: '자료구조 개념 복습',
    content:
      '배열, 연결 리스트, 스택, 큐, 트리, 그래프 등 주요 자료구조의 개념을 복습하고 각 구조의 특징과 사용 예시에 대해 정리했습니다.',
  },
  {
    img: '../src/assets/images/dummyImage.jpg',
    tag: 'event',
    date: '2025-07-03',
    title: '스터디 모임 뒤풀이',
    content:
      '오랜만에 스터디 멤버들과 모여 그동안의 학습 경험을 나누고, 함께한 시간들을 되돌아보며 즐거운 뒤풀이 시간을 가졌습니다.',
  },
  {
    img: '../src/assets/images/humanImage.jpg',
    tag: 'paper',
    date: '2025-07-04',
    title: '알고리즘 문제 풀이 정리',
    content:
      '최근에 풀었던 알고리즘 문제들의 풀이 방법과 접근 방식을 정리하면서, 자주 실수하는 부분도 함께 메모해두었습니다.',
  },
  {
    img: '../src/assets/images/humanImage.jpg',
    tag: 'event',
    date: '2025-07-05',
    title: '동아리 정기 모임',
    content:
      '프로그래밍 동아리 정기 모임에 참석하여 프로젝트 진행 상황을 공유하고 다음 계획을 논의했습니다. 회의 후에는 간단한 게임도 함께 즐겼습니다.',
  },
  {
    img: '../src/assets/images/humanImage.jpg',
    tag: 'paper',
    date: '2025-07-06',
    title: '운영체제 강의 정리',
    content:
      '운영체제 강의 내용을 정리하며 프로세스, 스레드, 메모리 관리, 파일 시스템 등 주요 개념을 복습하고 요약했습니다.',
  },
  {
    img: '../src/assets/images/humanImage.jpg',
    tag: 'event',
    date: '2025-07-07',
    title: '기술 세미나 참가',
    content:
      '최신 IT 기술 트렌드를 다루는 기술 세미나에 참석하여 AI, 클라우드, 보안 등 다양한 주제에 대해 배울 수 있었습니다.',
  },
  {
    img: '../src/assets/images/humanImage.jpg',
    tag: 'paper',
    date: '2025-07-08',
    title: '네트워크 개념 노트 정리',
    content:
      '네트워크 강의에서 배운 OSI 7계층, TCP/IP, IP 주소 체계, 라우팅 등을 중심으로 노트 정리를 진행했습니다.',
  },
  {
    img: '../src/assets/images/humanImage.jpg',
    tag: 'event',
    date: '2025-07-09',
    title: '친구들과 영화 관람',
    content:
      '오랜만에 친구들과 모여 극장에서 영화를 관람하고, 상영 후에는 영화에 대한 다양한 의견을 나누며 즐거운 시간을 보냈습니다.',
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
      <div class="topic__card" onclick="location.href='http://localhost:5173/topic_detail/index.html?tag=${userData.tag}&date=${userData.date}&title=${userData.title}'">
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
    <div class="topic__card" onclick="location.href='http://localhost:5173/topic_detail/index.html?tag=${userData.tag}&date=${userData.date}&title=${userData.title}'">
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
      <div class="topic__card" onclick="location.href='http://localhost:5173/topic_detail/index.html?tag=${userData.tag}&date=${userData.date}&title=${userData.title}'">
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
      <div class="topic__card" onclick="location.href='http://localhost:5173/topic_detail/index.html?tag=${userData.tag}&date=${userData.date}&title=${userData.title}'">
      <img src="${userData.img}" alt="card priview image">
      <p>${userData.tag} | ${userData.date}</p>
      <p>${userData.title}</p>
      </div>
      `;
  });
});
