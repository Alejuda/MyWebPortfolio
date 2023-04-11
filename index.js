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
        title: "Data Dashboard Healthcare",
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
        title: "Data Dashboard Healthcare",
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
      {
        id: 6,
        title: "Multi-Post stories",
        content: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
        habilities: ["CSS", "HTML", "Bootstrap", "Ruby"],
        img: "./assets/img/Img\ Placeholder.png",
        liveLink: "#",
        sourceLink: "#",
      },
      {
        id: 7,
        title: "Profesional Art Printing Data More",
        content: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
        habilities: ["CSS", "HTML", "Ruby"],
        img: "./assets/icons/Img\ Placeholder-1-desktop.png",
        liveLink: "#",
        sourceLink: "#",
      },
];

