const accordions = Array.from(document.getElementsByClassName('accordion'));
const details = Array.from(document.querySelectorAll('.details'));

accordions.map((accordion, index) => {
  accordion.addEventListener('click', () => {
    hidePrevious();
    details[index].classList.add('active');
    details[index].previousElementSibling.classList.add('bold');
  });
});

const hidePrevious = () => {
  details.map((detail) => {
    detail.classList.remove('active');
  });
  accordions.map((accordion, index) => {
    accordion.classList.remove('bold');
  });
};
