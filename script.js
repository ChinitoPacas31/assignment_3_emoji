document.addEventListener('mousemove', (e) => {
  const eyes = document.querySelectorAll('.eye');

  eyes.forEach(eye => {
    const rect = eye.getBoundingClientRect();
    const eyeCenterX = rect.left + rect.width / 2;
    const eyeCenterY = rect.top + rect.height / 2;

    const angle = Math.atan2(e.clientY - eyeCenterY, e.clientX - eyeCenterX);
    const offsetX = Math.cos(angle) * 10;
    const offsetY = Math.sin(angle) * 10;

    eye.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  });
});
