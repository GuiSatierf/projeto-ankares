const slider = document.querySelector('.carouselItems');
const SCROLL_SPEED = 3;

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * SCROLL_SPEED;
  slider.scrollLeft = scrollLeft - walk;
});

slider.addEventListener('mouseup', () => {
  finishDrag();
});

slider.addEventListener('mouseleave', () => {
  finishDrag();
});

function finishDrag() {
  isDown = false;
  slider.classList.remove('active');
}
