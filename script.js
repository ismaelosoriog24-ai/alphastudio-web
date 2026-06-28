const menu = document.getElementById("menu");
const nav = document.getElementById("nav");
const cursorDot = document.querySelector(".cursor-dot");
const cursorLight = document.querySelector(".cursor-light");
const reveals = document.querySelectorAll(".reveal");
const particlesContainer = document.getElementById("particles");

menu.addEventListener("click", () => {
  nav.classList.toggle("active");
});

document.addEventListener("mousemove", (e) => {
  if (cursorDot && cursorLight) {
    cursorDot.style.left = e.clientX + "px";
    cursorDot.style.top = e.clientY + "px";

    cursorLight.style.left = e.clientX + "px";
    cursorLight.style.top = e.clientY + "px";
  }
});

function revealOnScroll() {
  reveals.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - 120) {
      element.classList.add("active");
    }
  });
}

function createParticles() {
  if (!particlesContainer) return;

  const totalParticles = 45;

  for (let i = 0; i < totalParticles; i++) {
    const particle = document.createElement("span");
    particle.classList.add("particle");

    particle.style.left = Math.random() * 100 + "%";
    particle.style.top = Math.random() * 100 + "%";
    particle.style.animationDuration = 8 + Math.random() * 12 + "s";
    particle.style.animationDelay = Math.random() * 8 + "s";
    particle.style.opacity = Math.random();

    particlesContainer.appendChild(particle);
  }
}

window.addEventListener("scroll", revealOnScroll);

createParticles();
revealOnScroll();