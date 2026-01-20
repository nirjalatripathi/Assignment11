//  Accessing elements
let heading = document.getElementById("mainHeading");
let paragraphs = document.getElementsByClassName("text");
let buttons = document.getElementsByTagName("button");
let input = document.querySelector("#nameInput");
let allParas = document.querySelectorAll("p");

//  Printing elements in console
console.log(heading);
console.log(paragraphs);
console.log(buttons);
console.log(input);
console.log(allParas);

//  Change text content of heading
heading.textContent = "DOM Basics Completed";

//  Change HTML content of paragraph
document.getElementById("mainPara").innerHTML = "<b>Paragraph has been changed. </b>";
