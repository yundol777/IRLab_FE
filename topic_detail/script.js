const data = {
  content:
    '<article>\n      <img src="../src/assets/images/dummyImage.jpg" alt="캠퍼스의 오후 풍경" style="max-width:100%;border-radius:6px;margin-bottom:16px;" />\n      <p>\n        수업 사이의 짧은 시간, 우리는 종종 스마트폰을 켜서 스크롤을 채우곤 한다.\n        오늘은 그런 10~30분을 조금 다르게 써본 경험을 적어본다. 작은 습관이 모여\n        하루의 온도를 바꿔 놓을 수 있다는 걸 최근에 깨달았다.\n      </p>\n\n      <h2>시작하기 전에 — 체크리스트</h2>\n      <ul>\n        <li>휴대폰은 방해금지 모드로</li>\n        <li>간단한 물과 간식 챙기기</li>\n        <li>5분 루틴(스트레칭/심호흡/간단한 메모)</li>\n      </ul>\n\n      <h2>짧은 시간에 할 수 있는 추천 활동</h2>\n      <ol>\n        <li><strong>산책</strong> — 캠퍼스 한 바퀴를 느리게 걸으면 생각이 정리된다.</li>\n        <li><strong>미니 독서</strong> — 시 한 편이나 짧은 칼럼 하나를 읽어보자.</li>\n        <li><strong>정리 정돈</strong> — 노트나 TODO를 5분만 정리해도 마음이 가벼워진다.</li>\n        <li><strong>친구에게 메시지 쓰기</strong> — 짧은 안부 한 줄이 관계를 따뜻하게 만든다.</li>\n      </ol>\n\n      <blockquote>\n        "짧은 휴식은 재충전의 단위다. 길게 쉬는 것만이 답은 아니다."\n      </blockquote>\n\n      <h2>작은 실험 — 10분 메모 루틴 (예시)</h2>\n      <p>아래는 실제로 내가 2주 동안 실행한 10분 루틴이다. 간단해서 바로 따라 할 수 있다.</p>\n      <pre><code>// 10-minute micro-journal (pseudo)\n00:00 - 01:00 : 자리 정리\n01:00 - 03:00 : 심호흡 2분 + 가벼운 스트레칭\n03:00 - 07:00 : 오늘의 할 일 3가지 메모\n07:00 - 10:00 : 감사한 일 1개와 한 줄 다짐 작성\n</code></pre>\n\n      <h2>결과와 느낀 점</h2>\n      <p>\n        2주간 지속해보니, 하루 중 불필요한 소란이 줄고 집중 블록을 더 잘 지킬 수 있게 됐다.\n        특히 시험 기간에 \'짧은 리셋\'을 자주 하니 긴장도 덜하고 집중력의 품질이 올라갔다.\n      </p>\n\n      <h2>관련 리소스</h2>\n      <p>짧은 활동을 위해 제가 자주 보는 링크와 오디오를 적어둔다.</p>\n      <ul>\n        <li><a href="#" aria-label="한 줄 명언 모음">한 줄 명언 모음</a></li>\n        <li><a href="#" aria-label="5분 명상 오디오">5분 명상 오디오</a></li>\n      </ul>\n\n      <div class="tags">\n        태그:\n        <a href="/tags/대학생">#대학생</a>\n        <a href="/tags/자기계발">#자기계발</a>\n        <a href="/tags/루틴">#루틴</a>\n      </div>\n\n      <footer>\n        <p>이 글이 마음에 들었다면 ♥ 버튼을 눌러주세요. 더 궁금한 점이나 여러분의 루틴을 댓글로 공유해도 좋아요!</p>\n      </footer>\n    </article>',
};

let query = window.location.search;
let param = new URLSearchParams(query);

let tag = param.get('tag');
let date = param.get('date');
let title = param.get('title');
// let content = param.get('content');

const insertTag = document.querySelector('.topics__tag');
const insertDate = document.querySelector('.topics__date');
const insertTitle = document.querySelector('.topics__title');
const insertContent = document.querySelector('.topics__content');

insertTag.innerHTML += `
${tag}
`;

insertDate.innerHTML += `
${date}
`;

insertTitle.innerHTML += `
${title}
`;

insertContent.innerHTML += `
${data.content}`;
