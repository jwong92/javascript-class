$(document).ready(function(){

//On page load, remove all the specials
$("[id^='group']").css("display", "none");

// Set two colors of sign

//Timer for when to run the flicker
//Timer for how long it stays black
//Timer for how long it stays red
//Timer for how long it stays black
//Timer for how long it stays red
var a;
var b;
var flick = setInterval(flicker, 2000);

function flicker() {
  a = setInterval(toBlack, 100);
  console.log("A");
  b = setInterval(toRed, 200);
  console.log("B");
  // clearFlicker();
}

function toBlack() {
  $("#n").css("color","#FFF");
  clearInterval(a);
  console.log("white");
}

function toRed() {
  $("#n").css("color", "#FF3B3F");
  clearInterval(b);
  console.log("red");
}

function clearFlicker() {
  clearInterval(flick);
  console.log("clear");
}

//Find the day of the week
var today = new Date;
var day = today.getDay();
var fullDate = today.toDateString();

//Display today's Date
$("#date span").html(fullDate);

//Display the special for today's date
$("#group-" + day).css("display", "block");

})//END OF PAGE LOAD
