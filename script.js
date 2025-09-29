console.log("Page loaded. Assets are working.");
let currentPage = 0;

window.addEventListener('load', function () {
  if (!document.body.classList.contains('main-body')) {
      document.body.classList.add('fade-in');
      // setTimeout(() => {
      //     document.body.classList.remove('fade-in');
      // }, 500);
      console.log("transition");
  }
});

window.addEventListener('scroll', () => {
  const items = document.querySelectorAll('.fade-item');
  const viewportMiddleY = window.innerHeight / 2;

  items.forEach(item => {
    const rect = item.getBoundingClientRect();
    const elementMiddleY = rect.top + rect.height / 2;
    const distanceFromCenter = Math.abs(elementMiddleY - viewportMiddleY);
    const maxDistance = window.innerHeight / 2;

    let opacity = 1 - (distanceFromCenter / maxDistance);
    opacity = Math.min(Math.max(opacity, 0), 1);

    item.style.opacity = opacity;
  });
});