2/* Declare variables below to save the different sections (divs) of your story*/
let storyOpening = document.querySelector(".story-opening");
let optionOne = document.querySelector(".option-one")
let optionTwo = document.querySelector(".option-two")
let optionOneScreen = document.querySelector(".option-one-screen")
let optionTwoScreen = document.querySelector(".option-two-screen")
let optionOneEnd = document.querySelector(".option-one-end")
let optionTwoEnd = document.querySelector(".option-two-end")

optionOne.onclick = function(){
  optionOneScreen.style.display = "block";
  storyOpening.style.display = "none";
}

optionTwo.onclick = function(){
  optionTwoScreen.style.display = "block";
  storyOpening.style.display = "none";
}

/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
INSERT_VARIABLE.onclick=function(){

};

INSERT_VARIABLE.onclick=function(){

};


INSERT_VARIABLE.onclick=function(){

};

*/
