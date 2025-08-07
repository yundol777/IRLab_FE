let query = window.location.search;
let param = new URLSearchParams(query);

let tag = param.get('tag');
let date = param.get('date');
let title = param.get('title');
let content = param.get('content');
let image = param.get('img');

const insertTag = document.getElementById('tag');
const insertDate = document.getElementById('date');
const insertTitle = document.getElementById('title');
const insertContent = document.getElementById('content');
const insertImage = document.getElementById('image');

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
${content}`;

insertImage.innerHTML += `
<img src="${image}" alt="topic image"></img>`;
