const menuBtn = document.getElementById('nav-toggle-btn');
const mobileMenu = document.getElementById('mobile-menu');
mobileMenu.classList.remove('show');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('show');
});

// works container refactorisation

const worksContainer = document.getElementById('works-container');

const works = [
  {
    id: 1,
    title: 'TODO - List App',
    content:
      "A productivity tool designed to help users manage their daily tasks and to-dos efficiently.",
    habilities: ['HTML', 'CSS', 'JavaScript'],
    img: './assets/img/img-placeholder-todo.png',
    liveLink: 'https://alejuda.github.io/TODO-List/',
    sourceLink: 'https://github.com/Alejuda/TODO-List',
  },
  {
    id: 2,
    title: 'Website Portfolio',
    content:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    habilities: ['HTML', 'Bootstrap', 'Ruby'],
    img: './assets/icons/Img Placeholder-3-desktop.png',
    liveLink: '#',
    sourceLink: '#',
  },
  {
    id: 3,
    title: 'Profesional Art Printing Data More',
    content:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    habilities: ['HTML', 'Bootstrap', 'Ruby'],
    img: './assets/img/Img Placeholder2.png',
    liveLink: '#',
    sourceLink: '#',
  },
  {
    id: 4,
    title: 'Data Dashboard Healthcare',
    content:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    habilities: ['HTML', 'Bootstrap', 'Ruby'],
    img: './assets/icons/Img Placeholder-2-desktop.png',
    liveLink: '#',
    sourceLink: '#',
  },
  {
    id: 5,
    title: 'Website Portfolio',
    content:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    habilities: ['HTML', 'Bootstrap', 'Ruby'],
    img: './assets/icons/Img Placeholder-3-desktop.png',
    liveLink: '#',
    sourceLink: '#',
  },
  {
    id: 6,
    title: 'Multi-Post stories',
    content:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    habilities: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
    img: './assets/img/Img Placeholder.png',
    liveLink: '#',
    sourceLink: '#',
  },
  {
    id: 7,
    title: 'Profesional Art Printing Data More',
    content:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    habilities: ['CSS', 'HTML', 'Ruby'],
    img: './assets/icons/Img Placeholder-1-desktop.png',
    liveLink: '#',
    sourceLink: '#',
  },
];

works.map((work) => {
  if (work.id <= 5) {
    worksContainer.innerHTML += `
  <div onclick="showModule(${work.id})" class="card-container back-img ${
  work.title.split(' ')[0]
}" tabindex="0" id="${work.id}">
    <div class="text-container margin-x-13">
      <h3 class="card-title white">
        ${work.title}
      </h3>
      <p class="card-description white">
        ${work.content}
      </p>
      <ul class="tags list-style-none">
        <li class="tag-description-2">${work.habilities[0]}</li>
        <li class="tag-description-2">${work.habilities[1]}</li>
        <li class="tag-description-2">${work.habilities[2]}</li>
      </ul>
    </div>
    <button class="see-btn wide display-none-desktop"> See project </button>
  </div>
  `;
  }
  return worksContainer.innerHTML;
});

function showModule(id) {
  if (id === 0) { return; }
  const modal = document.getElementById('modal-container');
  const modalTitle = document.getElementById('modal-title');
  const habilities = document.getElementById('habilities-container');
  const modalImg = document.getElementById('modal-img');
  const modalDesc = document.getElementById('modal-description');
  const liveLink = document.getElementById('modal-live-link');
  const sourceLink = document.getElementById('modal-source-link');
  const closeModal = document.getElementById('modal-close-btn');

  works[id - 1].habilities.forEach((hab) => {
    habilities.innerHTML += `<div class="habilitie">${hab}</div>`;
  });

  liveLink.addEventListener('click', () => {
    modal.style.left = '100vw';
    habilities.innerHTML = '';
  });
  sourceLink.addEventListener('click', () => {
    modal.style.left = '100vw';
    habilities.innerHTML = '';
  });
  closeModal.addEventListener('click', () => {
    modal.style.left = '100vw';
  });

  modalTitle.innerHTML = `${works[id - 1].title}`;
  modalImg.src = `${works[id - 1].img}`;
  modalDesc.innerHTML = `${works[id - 1].content}`;
  liveLink.href = `${works[id - 1].liveLink}`;
  sourceLink.href = `${works[id - 1].sourceLink}`;

  modal.style.left = '0';
}

showModule(0);

const formContent = document.getElementById('form');
const nameContent = document.getElementById('name');
const emailContent = document.getElementById('email');
const contentContent = document.getElementById('content');

let userInfo = { name: '', email: '', content: '' };

const getUserInfo = () => {
  if (localStorage.getItem('userInfo')) {
    userInfo = JSON.parse(localStorage.getItem('userInfo'));
  }
  return userInfo;
};

nameContent.value = getUserInfo().name;
emailContent.value = getUserInfo().email;
contentContent.value = getUserInfo().content;

formContent.addEventListener('submit', (e) => {
  e.preventDefault();

  const userInfo = {
    name: nameContent.value,
    email: emailContent.value,
    content: contentContent.value,
  };
  localStorage.setItem('userInfo', JSON.stringify(userInfo));
});