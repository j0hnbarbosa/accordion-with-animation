const slideId = document.getElementById("slide-id");
let accordionHeight = '0px';

const openAccordion = (e) => {
  if (slideId.classList.contains("open")) {
    slideId.style.setProperty('height', `0px`);
    slideId.classList.remove("open");
  } else {
    slideId.style.setProperty('height', `${accordionHeight}px`);
    slideId.classList.add("open");
  }
};

function slideDiv() {
  openAccordion();
}

const initialAccordionHeight = () => {
  accordionHeight = slideId.scrollHeight;
  slideId.style.setProperty('height', `0px`);
}

initialAccordionHeight();