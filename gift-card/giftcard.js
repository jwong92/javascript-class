// https://stackoverflow.com/questions/12470879/a-function-inside-a-for-loop-with-jquery-and-javascript -- for click handling
$(document).ready(function(){


//BACKGROUND COLOR
$("#darkblue").on("click", function(){
  backgroundColor("#0475A3");
});

$("#teal").on("click", function() {
  backgroundColor("#03A696");
});

$("#mustard").on("click", function() {
  backgroundColor("#DBCA69");
});

$("#mauve").on("click", function() {
  backgroundColor("#A8C3FF");
})

//function to change the background color
function backgroundColor(color) {
  $(".preview").css("background", color);
}

//FONTS
var fonts = ["arial", "impact", "helv", "georgia"];
for (var i=0; i<fonts.length; i++) {
  var selector = "#" + fonts[i];
  $(selector).on("click", {id:i}, function (e){
    changeFont(fonts[e.data.id]);
  })
}

//Function to change the font
function changeFont(font) {
  $(".preview h4").css("font-family", font);
}

// ICONS
var iconArr = ["fa-car", "fa-coffee", "fa-cutlery", "fa-heart"];

for (var i=0; i<iconArr.length; i++) {
  var selector = "."+iconArr[i];
  $(selector).on("click", {id:i}, function(e) {
    removeIcon();
    addIcon(iconArr[e.data.id]);
  })
}

//Add new class
function addIcon(icon) {
  $(".icon-preview-container span").addClass("fa " + icon);
}
// Remove previous class
function removeIcon() {
  $(".icon-preview-container span").removeAttr("class");
}

})//End Page Load
