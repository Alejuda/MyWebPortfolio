const menuBtn = document.getElementById("nav-toggle-btn");
const mobileMenu = document.getElementById("mobile-menu");
mobileMenu.classList.remove("show");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("show");
});

// works container refactorisation

let worksContainer = document.getElementById("works-container");

const works = [
  {
    id: 1,
    title: "Data Dashboard <br> Healthcare",
    content:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    habilities: ["HTML", "Bootstrap", "Ruby"],
    img: "./assets/icons/Img Placeholder-2-desktop.png",
    liveLink: "#",
    sourceLink: "#",
  },
  {
    id: 2,
    title: "Website Portfolio",
    content:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    habilities: ["HTML", "Bootstrap", "Ruby"],
    img: "./assets/icons/Img Placeholder-3-desktop.png",
    liveLink: "#",
    sourceLink: "#",
  },
  {
    id: 3,
    title: "Profesional Art Printing Data More",
    content:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    habilities: ["HTML", "Bootstrap", "Ruby"],
    img: "./assets/img/Img Placeholder2.png",
    liveLink: "#",
    sourceLink: "#",
  },
  {
    id: 4,
    title: "Data Dashboard <br> Healthcare",
    content:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    habilities: ["HTML", "Bootstrap", "Ruby"],
    img: "./assets/icons/Img Placeholder-2-desktop.png",
    liveLink: "#",
    sourceLink: "#",
  },
  {
    id: 5,
    title: "Website Portfolio",
    content:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    habilities: ["HTML", "Bootstrap", "Ruby"],
    img: "./assets/icons/Img Placeholder-3-desktop.png",
    liveLink: "#",
    sourceLink: "#",
  },
];

works.map((work) => {
  worksContainer.innerHTML += `
  <div class="card-container back-img ${
    work.title.split(" ")[0]
  }" tabindex="0" id="${work.id}">
    <div class="text-container margin-x-13">
      <h3 class="card-title white">
        ${work.title}
      </h3>
      <p class="card-description white">
        ${work.content}
      </p>
      <ul class="tags list-style-none">
        <li class="tag-description-2">HTML</li>
        <li class="tag-description-2">Bootstrap</li>
        <li class="tag-description-2">Ruby</li>
      </ul>
    </div>
    <button onclick="showModule(${
      work.id
    })" class="see-btn wide display-none-desktop"> See project </button>
  </div>
  `;
});