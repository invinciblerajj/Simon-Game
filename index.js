let buttonColours = ["red","blue","green","yellow",];
let gamePattern = [];

let randomChosenColour;
let randomNumber;

let userClickedPattern=[];
let userChosenColour;

let level=0;
let started=false;

function nextSequence() {
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
  
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
  }

$(".btn").click(function press(){
    userChosenColour=this.id;
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});

function playSound(name){
    let so= new Audio("./"+name+".mp3")
    so.play();
}

function animatePress(currentColor){
    $("#"+currentColor).addClass("pressed");
    setTimeout(function rem(){
        $("#"+currentColor).removeClass("pressed");
    },100);
}


$(document).keydown(function (){
    if(!started){
        $("#level-title").text("Level "+level);
        nextSequence();
        started=true;
    }
});

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
      playSound("wrong");
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      startOver();
    }
}

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
  }















