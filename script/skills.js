const skillsLink = document.querySelector(".skills");
const skillsClose = document.querySelector(".skills-close");
const windowOpened = "window-opened";

skillsLink.addEventListener("click", (e) => {
  e.preventDefault();
  document.body.classList.toggle(windowOpened);
});

skillsClose.addEventListener("click", () => {
  document.body.classList.toggle(windowOpened);
});