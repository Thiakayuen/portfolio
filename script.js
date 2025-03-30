document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const sidebar = document.querySelector(".sidebar");
    const overlay = document.querySelector(".overlay");
    const closeBtn = document.querySelector(".close-btn");

    menuIcon.addEventListener("click", function () {
        sidebar.classList.add("active");
        overlay.classList.add("active");
    });

    closeBtn.addEventListener("click", function () {
        sidebar.classList.remove("active");
        overlay.classList.remove("active");
    });

    overlay.addEventListener("click", function () {
        sidebar.classList.remove("active");
        overlay.classList.remove("active");
    });
});


document.getElementById("hamburger").addEventListener("click", function () {
    document.getElementById("sidebar").classList.toggle("open");
  });
  
  document.getElementById("closeSidebar").addEventListener("click", function () {
    document.getElementById("sidebar").classList.remove("open");
  });
  




const cursorCircle = document.querySelector(".cursor-circle");

document.addEventListener("mousemove", (e) => {
  cursorCircle.style.left = `${e.clientX}px`;
  cursorCircle.style.top = `${e.clientY}px`;
});



