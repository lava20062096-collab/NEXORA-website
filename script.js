// MOBILE MENU

function toggleMenu() {

    let menu = document.getElementById("navLinks");

    menu.classList.toggle("active");

}


// CLOSE MENU AFTER CLICKING LINK

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", function() {

        document.getElementById("navLinks")
        .classList.remove("active");

    });

});


// CONTACT FORM VALIDATION

document.getElementById("contactForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value.trim();

    let email = document.getElementById("email").value.trim();

    let subject = document.getElementById("subject").value.trim();

    let message = document.getElementById("message").value.trim();

    let result = document.getElementById("result");

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if(name === "" || email === "" ||
       subject === "" || message === "") {

        result.innerHTML = "Please fill all fields.";

        result.style.color = "red";

        return;

    }


    if(!emailPattern.test(email)) {

        result.innerHTML = "Please enter a valid email address.";

        result.style.color = "red";

        return;

    }


    result.innerHTML =
    "Thank you, " + name + "! Your form is valid.";

    result.style.color = "green";

    document.getElementById("contactForm").reset();

});