// Navigation color change
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll("a");

const options = {
  threshold: 0.5,
};
const observeSection = (entries) => {
  entries.forEach((entry) => {
    const index = entry.target.dataset.index;
    const navData = entry.target.dataset.nav;

    if (entry.isIntersecting) {
      navItems[index].classList.add(`${navData}-active`);
    } else {
      navItems[index].classList.remove(`${navData}-active`);
    }
  });
};

const observer = new IntersectionObserver(observeSection, options);

const setObservers = () => {
  sections.forEach((section) => {
    observer.observe(section);
  });
};

setObservers();
