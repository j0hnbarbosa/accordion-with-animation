const slideId = document.getElementById("slide-id");
let accordionHeight = '0px';

const openAccordion = (e) => {
  if (slideId.style.getPropertyValue("height")) {
    slideId.style.removeProperty("height");
  } else {
    slideId.style.setProperty('height', `${accordionHeight}px`);
  }
};

function slideDiv() {
  openAccordion();
}

const initialAccordionHeight = () => {
  accordionHeight = slideId.scrollHeight;
}

initialAccordionHeight();