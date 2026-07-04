const cube = document.querySelector('.cube');

function handlePointer(x, y) {
  const xAxis = (window.innerWidth / 2 - x) / 25;
  const yAxis = (window.innerHeight / 2 - y) / 25;
  if (cube) cube.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
}

if (cube) {
  // mouse
  document.addEventListener('mousemove', (e) => handlePointer(e.pageX, e.pageY));
  document.addEventListener('mouseleave', () => { cube.style.transform = 'rotateY(0deg) rotateX(0deg)'; });

  // touch
  document.addEventListener('touchmove', (e) => {
    if (e.touches && e.touches[0]) {
      handlePointer(e.touches[0].pageX, e.touches[0].pageY);
    }
  }, { passive: true });
  document.addEventListener('touchend', () => { cube.style.transform = 'rotateY(0deg) rotateX(0deg)'; });
}
