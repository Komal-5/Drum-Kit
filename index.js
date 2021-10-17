/* Way1---document.querySelector("button").addEventListener("click",handleClick);
function handleClick(){
  alert("I got clicked");
}*/
/*Way2---document.querySelector("button").addEventListener("click",function(){
  alert("I got clicked");
});*/

//Adding event listener to all the buttons
var buttons=document.querySelectorAll(".drum").length;//becuase there can be more button tags in the doc so be more specific
//Detecting button press
for(var i=0;i<buttons;i++){
  document.querySelectorAll("button")[i].addEventListener("click",function(){
    /*var audio=new Audio("sounds/tom-1.mp3");//creating an Audio object
    audio.play();*/
    // this.style.color="white";//when we click the button color will change to white
    var buttonInnerHtml= this.innerHTML;
    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
  });
}
//Detecting keyboard press
document.addEventListener("keypress",function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key){
  switch(key){
    case "w":
      var tom1=new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2=new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3=new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4=new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare=new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash=new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kick=new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    default: console.log(buttonInnerHtml);

  }
}

function buttonAnimation(currentKey){
  var activeButton=document.querySelector("."+currentKey); //to target the class
  activeButton.classList.add("pressed"); //adding class to elements
  /*but we can see thet after being pressed it does not return to the original mode again
  so we need to remove the above class after a delay of say 0.1 sec */
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);//0.1 sec =100ms
}
