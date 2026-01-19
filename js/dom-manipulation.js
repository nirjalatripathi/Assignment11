// Change style of heading
heading.style.color = "white";
heading.style.fontSize = "30px";
heading.style.backgroundColor = "Pink";

//  Add new element
let newPara = document.createElement("p");
newPara.textContent = "A new element has been added";
document.body.appendChild(newPara);

// Remove element
// newPara.remove();


//  Change image source
let image = document.getElementById("myImage");
image.src = "https://i.pinimg.com/1200x/a0/93/c2/a093c2fc39bfbac6fc40f3975c98daf5.jpg";

// Read input value and display
let inputField = document.getElementById("nameInput");
inputField.addEventListener("keyup", function () {
   document.getElementById("mainPara").textContent = inputField.value;
});

// Create list from array
let languages  = ["C", "C++", "Java"];

let list = document.getElementById("list");

for (let i = 0; i < languages.length; i++) {
    let li = document.createElement("li");
    li.textContent = languages[i];
    list.appendChild(li);
};
