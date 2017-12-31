$(document).ready(function(){
// Clear the form
$(".input-row input, textarea").val("");

//POP UP BOX
// number of jobs
var jobs = 10;
var jobClass = ".";

//Determine the class that was clicked
$("li a").on("click", function(){
  $("#sbt-mssg").addClass("hidden");
  jobClass += $(this).attr("class");
  $(".pop-up").removeClass("hidden");
  fillJobDescr(jobClass);
  jobClass = ".";
});

// function that will associate the job clicked to the description - variables of title, id, manager, and description
function fillJobDescr(job) {
  var a = $(job+"-1").html();
  var b = $(job+"-2").html();
  var c = $(job+"-3").html();
  var d = $(job+"-4").html();
  $("#job-title").html(a);
  $("#job-id").html(b);
  $("#job-manager").html(c);
  $("#job-description").load("job-desc.html" + " " + d);
}

// Close pop up box
$("#close").on("mouseover", function(){
  $("#close").css("cursor", "pointer");
});
$("#close").on("click", function(){
  $(".pop-up").addClass("hidden");
  $(".input-row input, textarea").val("");
});

// SUBMIT BUTTON
$("#sbt-btn").on("click", function(){
  $("#sbt-mssg").removeClass("hidden");
  $(".input-row input, textarea").val("");
})

$("#sbt-btn").on("mouseover",function(){
  $(this).css("cursor", "pointer");
})

}); //END PAGE LOAD
