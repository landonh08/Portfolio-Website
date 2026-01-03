document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("particle-container");
  const numParticles = 10;
  const particles: { el: HTMLSpanElement; x: number; y: number; vx: number; vy: number; }[] = [];

  for (let i = 0; i < numParticles; i++) {
    const span = document.createElement("span");
    span.classList.add("particle");

    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    const vx = (Math.random() - 0.5) * 0.2;
    const vy = (Math.random() - 0.5) * 0.2;

    container?.appendChild(span);
    particles.push({ el: span, x, y, vx, vy });
  }

  // Animate
  function animate() {
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x > window.innerWidth) p.x = 0;
      if (p.x < 0) p.x = window.innerWidth;
      if (p.y > window.innerHeight) p.y = 0;
      if (p.y < 0) p.y = window.innerHeight;

      p.el.style.transform = `translate3d(${p.x}px, ${p.y}px, 0)`;
    });
    requestAnimationFrame(animate);
  }

  animate();

  // Update positions on resize
  window.addEventListener("resize", () => {
    particles.forEach(p => {
      p.x = Math.random() * window.innerWidth;
      p.y = Math.random() * window.innerHeight;
    });
  });
});