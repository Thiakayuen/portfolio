document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const sidebar = document.querySelector(".sidebar");
    const overlay = document.querySelector(".overlay");

    menuIcon.addEventListener("click", function () {
        sidebar.classList.add("active");
        overlay.classList.add("active");
    });

    overlay.addEventListener("click", function () {
        sidebar.classList.remove("active");
        overlay.classList.remove("active");
    });
});

document.getElementById("hamburger").addEventListener("click", function () {
    document.getElementById("sidebar").classList.toggle("open");
  });
  
  let scrollTimeout;
const hamburger = document.getElementById("hamburger");

window.addEventListener("scroll", function () {
    hamburger.classList.add("hidden"); 

    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        hamburger.classList.remove("hidden"); 
    }, 200);
});
