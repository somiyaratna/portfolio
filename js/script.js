// ======== NAVBAR TOGGLE ==============
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// ====== ACTIVE SECTION COLOR CHANGE =======

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  // ===== STICKY NAVBAR ==============
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  // == REMOVE TOGGLE ICON NAVBAR WHEN CLICK NAVBAR LINK (SCROLL)==
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};
