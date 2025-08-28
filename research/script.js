const data = [
  {
    id: 1,
    link: 'https://arxiv.org/abs/2504.10001',
    title: '시간 기반 생성 추천 시스템의 고도화',
    summary:
      '본 논문은 사용자 선호도의 시간적 변화를 반영하는 생성형 추천 모델을 제안한다. 실험 결과, 기존 모델 대비 추천 정확도가 크게 향상되었음을 확인하였다.',
    date: '2025-06-15T00:00:00Z',
    name: '이선경, 박성민, 윤민철, 이종욱',
  },
  {
    id: 2,
    link: null,
    title: '다중 관점 기반 패시지 재순위화 기법',
    summary:
      '대규모 언어모델을 활용하여 패시지 재순위화를 수행하는 다중 관점 기반 기법을 제안한다. 다양한 데이터셋에서 최신 성능을 달성하였다.',
    date: '2025-07-02T00:00:00Z',
    name: '나정우, 권준, 최은성, 이종욱',
  },
  {
    id: 3,
    link: null,
    title: '검색 증강 생성에서의 충돌 최소화 전략',
    summary:
      '검색 증강 생성 과정에서 모델의 기존 지식과 외부 검색 결과 간 충돌을 줄이는 새로운 프롬프팅 기법을 제안한다.',
    date: '2025-08-21T00:00:00Z',
    name: '최은성, 박준, 이혜리, 이종욱',
  },
  {
    id: 4,
    link: 'https://arxiv.org/abs/2409.20001',
    title: '연구 성과 공유를 위한 웹 아카이브 시스템',
    summary:
      '연구실 성과를 효과적으로 관리·공유할 수 있는 웹 기반 아카이브 시스템을 설계하였다. 실제 운영 사례를 통해 효율성이 입증되었다.',
    date: '2024-09-10T00:00:00Z',
    name: '정윤석, 김철수, 이민지',
  },
  {
    id: 5,
    link: null,
    title: '블록체인 기반 학습 이력 관리 모델',
    summary:
      '블록체인을 활용하여 학습 이력을 안전하게 관리하는 모델을 제안한다. 스마트 계약을 통해 이력 검증 과정을 자동화하였다.',
    date: '2024-10-22T00:00:00Z',
    name: '최수연, 박영호, 이종욱',
  },
];

const researchList = document.querySelector('.research__list');
let currentYear = 0;
let date = 0;

data.forEach((research) => {
  date = new Date(research.date);

  if (date.getFullYear() !== currentYear) {
    currentYear = date.getFullYear();
    researchList.innerHTML += `
         <div class="research__year">
            <h3>${date.getFullYear()}</h3>
         </div>
        `;
  }

  researchList.innerHTML += `
    <div class="research__item">
        <div class="research__title">
            <p>${research.title}</p>
            ${research.link ? `<img class="research__link" src="../src/assets/icons/external-link.svg" />` : ``}
        </div>
        <div class="research__content">
            <p>${research.summary}</p>
        </div>
        <div class="research__info">
            <p>${research.name}</p>
            <p class="research__date">${date.getMonth() + 1 + '월 ' + date.getDate() + '일'}</p>
        </div>
    </div>
  `;
});
