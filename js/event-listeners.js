
// Button click 
let button = document.getElementById("clickBtn");

button.addEventListener("click", function () {
    alert("Button clicked!");
});

// Mouse enter & leave
let box = document.getElementById("box");

box.addEventListener("mouseleave", function () {
    box.style.backgroundColor = "lightgreen";
});

//  Keyup event
let input = document.getElementById("nameInput");
let output = document.getElementById("output");

input.addEventListener("keyup", function () {
    output.textContent = input.value;
});


// Prevent form submission
let form = document.getElementById("myForm");
let message = document.getElementById("message");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let email = document.getElementById("email").value;

    if (email === "") {
        message.textContent = "Email is required";
    } else {
        message.textContent = "Form submitted";
    }
});


