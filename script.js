const menu = document.getElementById("menu");
const nav = document.getElementById("nav");
const cursorLight = document.querySelector(".cursor-light");
const reveals = document.querySelectorAll(".reveal");

menu.addEventListener("click", () => {
  nav.classList.toggle("active");
});

document.addEventListener("mousemove", (e) => {
  cursorLight.style.left = e.clientX + "px";
  cursorLight.style.top = e.clientY + "px";
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

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();