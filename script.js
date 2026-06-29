/* ========================================
   ALPHASTUDIO - JAVASCRIPT PRINCIPAL
   Versión optimizada para PC y móvil
   ======================================== */


/* ========================================
   1. ELEMENTOS DEL HTML
   ======================================== */

const menu = document.getElementById("menu");
const nav = document.getElementById("nav");

const cursorDot = document.querySelector(".cursor-dot");
const cursorLight = document.querySelector(".cursor-light");

const reveals = document.querySelectorAll(".reveal");
const particlesContainer = document.getElementById("particles");


/* ========================================
   2. DETECCIÓN DE DISPOSITIVO
   ======================================== */

const isMobile = window.innerWidth <= 768;
const isDesktop = window.innerWidth > 768;


/* ========================================
   3. MENÚ MÓVIL
   ======================================== */

if (menu && nav) {
  menu.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}


/* ========================================
   4. MODO MÓVIL ULTRA LIGERO
   Sin GSAP, sin cursor, sin partículas
   ======================================== */

if (isMobile) {
  reveals.forEach((element) => {
    element.classList.add("active");
  });
}


/* ========================================
   5. MODO ESCRITORIO
   Efectos premium solo en PC
   ======================================== */

if (isDesktop) {
  initCustomCursor();
  initScrollReveal();
  initParticles();
  loadGsapAnimations();
}


/* ========================================
   6. CURSOR PERSONALIZADO
   ======================================== */

function initCustomCursor() {
  if (!cursorDot || !cursorLight) return;

  document.addEventListener("mousemove", (e) => {
    cursorDot.style.left = e.clientX + "px";
    cursorDot.style.top = e.clientY + "px";

    cursorLight.style.left = e.clientX + "px";
    cursorLight.style.top = e.clientY + "px";
  });
}


/* ========================================
   7. ANIMACIONES AL HACER SCROLL
   ======================================== */

function initScrollReveal() {
  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
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


/* ========================================
   8. PARTÍCULAS
   ======================================== */

function initParticles() {
  if (!particlesContainer) return;

  const totalParticles = 12;

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


/* ========================================
   9. CARGA GSAP SOLO EN ESCRITORIO
   ======================================== */

function loadGsapAnimations() {
  const gsapScript = document.createElement("script");

  gsapScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js";

  gsapScript.onload = () => {
    initGsapAnimations();
    initLogoMouseEffect();
  };

  document.body.appendChild(gsapScript);
}


/* ========================================
   10. ANIMACIONES GSAP
   ======================================== */

function initGsapAnimations() {
  if (typeof gsap === "undefined") return;

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
}


/* ========================================
   11. EFECTO DEL LOGO CON EL MOUSE
   ======================================== */

function initLogoMouseEffect() {
  if (typeof gsap === "undefined") return;

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
}