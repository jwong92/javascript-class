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
  $(".from-expiry-container").css("font-family", font);
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


// TO NAME

//Capture the name being inputted
var forName;
$("#message").keyup(function() {
  forName = $("#message").val();
  addName(forName);
})

// function to change name only if there is a value inputted
function addName(fname){
  if($("#message").val() <=0) {
    $("#name").html("________");
  }
  else {
    $('#name').html(fname);
  }
}

//FROM NAME

// Capture the name being entered
var e;
$("#in-from").keyup(function(){
   e = $("#in-from").val();
  fromName(e);
})

//function to add preview name
function fromName(name) {
  if($("#in-from").val() <= 0) {
    $("#from").html("___________");
  }
  else {
    $("#from").html(name);
  }
}

// PRICE
// Round the entered amount
var round;
$("#dollar").keyup(function() {
  var price = $("#dollar").val();
  round = Math.round(price);
  addPrice(round);
})

//function to add price
function addPrice(amount) {
  // $(".price-preview-container span").html(amount);
  if($("#dollar").val() <= 0) {
    $(".price-preview-container span").html("");
  }
  else {
    $(".price-preview-container span").html("$"+amount);
  }
}

// SUBMIT BUTTON MSSG
$("#sbt-btn").on("click", function(){
  $("#main-design > p:last-of-type").html("Far out! Your gift card is being made. We'll call you when it's ready.");
})

})//End Page Load
