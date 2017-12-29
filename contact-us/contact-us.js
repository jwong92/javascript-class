$(document).ready(function(){


  // on click of the submit button. show the car and add the animation
  $("#sbt-btn").on("click", function(){
    $("i").removeClass("hidden");
    $(".fa-motorcycle").css({
      "animation":"motorcycle 5s linear"
    });
    return false;
  });



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


});//END PAGE LOAD
