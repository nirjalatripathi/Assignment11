document.addEventListener("DOMContentLoaded", function () {
 // Button click 
let button = document.getElementById("dom-buton");
console.log("hello");
button.addEventListener("click", function () {
   alert("Button clicked!");
});

// Mouse enter & leave
let hoverDiv = document.getElementById("hover-div");

hoverDiv.addEventListener("mouseenter", function () {
    hoverDiv.style.backgroundColor = "lightgreen";
});
hoverDiv.addEventListener("mouseleave", function(){
    hoverDiv.style.backgroundColor="purple";
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
});

