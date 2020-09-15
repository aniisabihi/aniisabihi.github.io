const skillsLink = document.querySelector(".page-header li:nth-child(1) a");
const skillsClose = document.querySelector(".skills-close");
const windowOpened = "window-opened";

skillsLink.addEventListener("click", (e) => {
  e.preventDefault();
  document.body.classList.toggle(windowOpened);
});

skillsClose.addEventListener("click", () => {
  document.body.classList.toggle(windowOpened);
});
