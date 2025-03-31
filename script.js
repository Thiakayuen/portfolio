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


  let timer;
  const hamburger = document.getElementById("hamburger");
  
  window.addEventListener("scroll", () => {
      if (!hamburger) return; // Ensure element exists
  
      // Hide the hamburger menu when scrolling
      hamburger.style.opacity = "0";
      hamburger.style.pointerEvents = "none";
  
      // Clear any previous timer
      clearTimeout(timer);
  
      // Set a timer to show the hamburger when scrolling stops
      timer = setTimeout(() => {
          hamburger.style.opacity = "1";
          hamburger.style.pointerEvents = "auto";
      }, 500); // Adjust delay as needed
  });





  
  
