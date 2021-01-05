// Navigation color change
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll("a");

const options = {
  threshold: 0.7,
};
const navCheck = (entries) => {
  entries.forEach((entry) => {
    const className = entry.target.className.split(" ")[0];
    const index = entry.target.getAttribute("data-index");

    if (entry.isIntersecting) {
      if (!navItems[index].classList[1]) {
        navItems[index].classList.add(`${className}-active`);
      } else {
        navItems[index].classList.remove(`${className}-active`);
      }
    }
  });
};

const observer = new IntersectionObserver(navCheck, options);

const setObservers = () => {
  sections.forEach((section) => {
    observer.observe(section);
  });
};

setObservers();
