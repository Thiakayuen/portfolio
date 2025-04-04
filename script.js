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


document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault();

        let form = this; 
        let formData = new FormData(form); 

        fetch("https://formspree.io/f/mqapdorq", {
            method: "POST",
            body: formData, 
            headers: {
                'Accept': 'application/json' 
            }
        })
        .then(response => {
            if (response.ok) {
                let popup = document.getElementById("popup-message");
                if (popup) {
                    popup.style.display = "block"; 
                    setTimeout(() => { 
                        popup.style.display = "none"; 
                    }, 3000); 
                }
                form.reset(); 
            } else {
                response.json().then(data => {
                  if (Object.hasOwn(data, 'errors')) {
                    //errors from formspree
                    console.log(data["errors"].map(error => error["message"]).join(", "));
                    alert("Error: " + data["errors"].map(error => error["message"]).join(", "));
                  } else {
                    console.log("Oops! There was a problem submitting your form");
                    alert("Oops! There was a problem submitting your form");
                  }
                })
            }
        })
        .catch(error => alert("Something went wrong!"));
    });
});


