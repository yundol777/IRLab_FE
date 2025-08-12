const data = [
  {
    name: 'MeetChat',
    participants: ['김지은', '박현우', '이서윤'],
    duration: '2025.3 ~ 2025.6',
    description: '실시간 채팅과 중간 지점 기반 장소 추천 기능을 결합한 모바일 앱',
    image: '../src/assets/images/dummyImage.jpg',
  },
  {
    name: 'WeatherToDo',
    participants: ['김지은', '정민호'],
    duration: '2025.6~2025.8',
    description:
      '날씨 정보와 투두리스트를 결합한 개인 일정 관리 앱 날씨 정보와 투두리스트를 결합한 개인 일정 관리 앱 날씨 정보와 투두리스트를 결합한 개인 일정 관리 앱 날씨 정보와 투두리스트를 결합한 개인 일정 관리 앱 날씨 정보와 투두리스트를 결합한 개인 일정 관리 앱 날씨 정보와 투두리스트를 결합한 개인 일정 관리 앱날씨 정보와 투두리스트를 결합한 개인 일',
    image: '../src/assets/images/dummyImage.jpg',
  },
  {
    name: 'Campus Volunteer Map',
    participants: ['이서영', '박찬호', '김지은'],
    duration: '2025.5~2025.8',
    description: '캠퍼스 주변 컴퓨터 관련 봉사활동 위치와 일정을 제공하는 웹 서비스',
    image: '../src/assets/images/dummyImage.jpg',
  },
  {
    name: 'Naver Blog Clone',
    participants: ['김지은', '오세훈'],
    duration: '2025.8~진행중',
    description: '개인 콘텐츠 기록과 공유를 지원하는 블로그 플랫폼 개발',
    image: '../src/assets/images/dummyImage.jpg',
  },
  {
    name: 'IR Search Engine',
    participants: ['박민수', '김지은', '최다은'],
    duration: '2025.4~2025.7',
    description: '정보 검색 랩 연구 기반 맞춤형 검색 엔진 프로토타입',
    image: '../src/assets/images/dummyImage.jpg',
  },
];

const cardList = document.querySelector('.section__content');

data.forEach((userData) => {
  cardList.innerHTML += `
  <div class="card">
            <div class="card__text">
              <p class="card__title">${userData.name}</p>
              <p class="card__meta">${userData.participants.join('·')}, ${userData.duration}</p>
              <p class="card__content">${userData.description}</p>
            </div>
            <div class="card__img">
              <img src="${userData.image}" alt="" />
            </div>
  </div>
  `;
});
