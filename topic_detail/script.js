const topic_title = document.querySelector('.topic__title');

const data = [
  {
    tag: 'Tag',
    date: '2025.07.01',
    title: 'Topic Title',
    content:
      'TOKYO, June 2, 2025 – JCB Co., Ltd., Japan’s only global payment brand, is proud to announce that its exclusive cardmember mobile app, the MyJCB App, has been honored with the Gold Award in the Mobile Technologies, Applications, and Software Design category at the A’ Design Award & Competition.',
    img: '../src/assets/images/humanImage.jpg',
  },
];

data.forEach((userData) => {
  topic_title.innerHTML += `
    <p id=tag>${userData.tag} | ${userData.date}</p>
    <h1>${userData.title}</h1>
          <div class="topic__content">
            <div class="content__width">
              <p>${userData.content}</p>
              <p>${userData.content}</p>
              <img src="${userData.img}" alt="topic image" />
            </div>
          </div>
    `;
});
