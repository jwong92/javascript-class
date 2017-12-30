$(document).ready(function(){
  // associate the click of the link to the description

// number of jobs
var jobs = 10;
var jobClass = ".";

//Determine the class that was clicked
$("a").on("click", function(){
  jobClass += $(this).attr("class");
  $(".pop-up").removeClass("hidden");
  fillJobDescr(jobClass);
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
  $("#job-description").html(d);
}



}); //END PAGE LOAD
