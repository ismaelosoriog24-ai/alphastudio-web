const menu = document.getElementById("menu");
const nav = document.getElementById("nav");
const cursorDot = document.querySelector(".cursor-dot");
const cursorLight = document.querySelector(".cursor-light");
const reveals = document.querySelectorAll(".reveal");
const particlesContainer = document.getElementById("particles");

menu.addEventListener("click", () => {
  nav.classList.toggle("active");
});

if(window.innerWidth > 768){

document.addEventListener("mousemove",(e)=>{

    if(cursorDot && cursorLight){

        cursorDot.style.left=e.clientX+"px";
        cursorDot.style.top=e.clientY+"px";

        cursorLight.style.left=e.clientX+"px";
        cursorLight.style.top=e.clientY+"px";

    }

});

}

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

  for (let i = 0; i < 45; i++) {
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

gsap.from(".header", {
  y: -80,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
});

gsap.from(".hero-logo", {
  scale: 0.6,
  opacity: 0,
  duration: 1.4,
  ease: "power4.out"
});

gsap.from(".hero .tag", {
  y: 30,
  opacity: 0,
  duration: 1,
  delay: 0.3,
  ease: "power3.out"
});

gsap.from(".hero h1", {
  y: 60,
  opacity: 0,
  duration: 1.2,
  delay: 0.5,
  ease: "power4.out"
});

gsap.from(".hero .description", {
  y: 40,
  opacity: 0,
  duration: 1,
  delay: 0.8,
  ease: "power3.out"
});

gsap.from(".hero .buttons", {
  y: 35,
  opacity: 0,
  duration: 1,
  delay: 1,
  ease: "power3.out"
});

document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;

  gsap.to(".hero-logo", {
    x: x,
    y: y,
    duration: 0.8,
    ease: "power3.out"
  });
});