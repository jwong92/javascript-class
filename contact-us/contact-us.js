$(document).ready(function(){


  // on click of the submit button. show the car and add the animation
  $("#sbt-btn").on("click", function(){
    $("i").removeClass("hidden");
    $(".fa-motorcycle").css({
      "animation":"motorcycle 3s linear"
    });
    var showMssg = setInterval(sent, 3000);

    return false;
  });

// Function the add a confirmation message
function sent() {
  $(".sent-mssg").removeClass("hidden");
}

// on click of the clear button, clear the page
  $("#clear-btn").on("click", function(){
    clear();
  });

// https://jonsuh.com/blog/detect-the-end-of-css-animations-and-transitions-with-javascript/

//Function to determine the animation end
function whichAnimationEvent(){
  var t,
      el = document.createElement("fakeelement");

  var animations = {
    "animation"      : "animationend",
    "OAnimation"     : "oAnimationEnd",
    "MozAnimation"   : "animationend",
    "WebkitAnimation": "webkitAnimationEnd"
  }

  for (t in animations){
    if (el.style[t] !== undefined){
      return animations[t];
    }
  }
}

//Determine when the animation ends, and then execute the
var animationEvent = whichAnimationEvent();

$(".fa-motorcycle").on(animationEvent, function() {
  $(".fa-motorcycle").addClass("hidden");
});

// Function to clear the form
function clear() {
  $("#myForm")[0].reset();
}

});//END PAGE LOAD
