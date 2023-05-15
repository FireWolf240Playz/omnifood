// Fixing flexbox gap property missing in some Safari versions
console.log(`Hello World`);
const myName = "Alexander Yordanov";
console.log(myName);
const h1 = document.querySelector(`.heading-primary`);

//Set current year
const yearEl = document.querySelector(`.year`);
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

//Make mobile navigation work

const btnNavEl = document.querySelector(`.btn-mobile-nav`);
const headerEl = document.querySelector(`.header`);

btnNavEl.addEventListener(`click`, function () {
  headerEl.classList.toggle(`nav-open`);
});

// Smooth scrolling animation

const allLinks = document.querySelectorAll(`a:link`);

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    const href = link.getAttribute(`href`);
    console.log(link);

    if (href === `#`) {
      window.scrollTo({
        top: 0,
        behavior: `smooth`,
      });
    }

    // Close mobile navigation
    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle(`nav-open`);
    }
  });
});

//Sticky navigation
const sectionHeroEl = document.querySelector(".section-hero");

const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting === false) {
      document.body.classList.add(`sticky`);
    }

    if (ent.isIntersecting) {
      document.body.classList.remove(`sticky`);
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: `-80px`,
  }
);
observer.observe(sectionHeroEl);

function checkFlexGap() {
  let flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  let isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
