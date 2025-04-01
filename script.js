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



// Popup Message
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    let formData = new FormData(this); // Get form data

    fetch("https://formspree.io/f/mqapdorq", {
        method: "POST",
        body: formData,
        headers: { "Accept": "application/json" }
    })
    .then(response => {
        if (response.ok) {
            document.getElementById("popup-message").style.display = "block"; // Show pop-up
            setTimeout(() => { 
                document.getElementById("popup-message").style.display = "none"; 
            }, 3000); // Hide pop-up after 3 seconds
            this.reset(); // Clear form
        } else {
            alert("Message failed to send!");
        }
    })
    .catch(error => alert("Something went wrong!"));
});


