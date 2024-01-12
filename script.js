console.log("My first JS Project");

function mySelect0(){
let buttons = document.querySelectorAll(".btn");
console.dir(buttons);

let sec2 = document.querySelector(".sec2");
console.dir(sec2);
sec2.style.background = "linear-gradient(#04ff00, #014d00)";

buttons[0].style.background = "green";
buttons[0].style.color = "white";

}

function mySelect1(){
let buttons = document.querySelectorAll(".btn");
console.dir(buttons);

let sec2 = document.querySelector(".sec2");
console.dir(sec2);
sec2.style.background = "linear-gradient(#ffb6b6,  #e66465)";
buttons[1].style.background = "#e66465";
buttons[1].style.color = "white";
}

function mySelect2(){
let buttons = document.querySelectorAll(".btn");
console.dir(buttons);

let sec2 = document.querySelector(".sec2");
console.dir(sec2);
sec2.style.background = "linear-gradient(#ebcb7a, #9b7617)";

buttons[2].style.background = "goldenrod";
buttons[2].style.color = "white";
}

// function mySelect1(){
// let buttons = document.querySelectorAll(".btn");
// console.dir(buttons);
// let idx = 0;
// for(let btn of buttons){
//     btn.style.background = "green";
//     idx++;
//     btn.style.background = "pink";
// }
// }