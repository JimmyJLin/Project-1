$(document).ready(function(){
  console.log("js loaded");

// global variables
  var $startGame = $('#startButton');
  var $resetGame = $('#resetButton');
  var $box0 = $("#box0");
  var $board = $('.board');
  var $dogOne = $(".dogOne")
  var $dogTwo = $(".dogTwo")
  var $redDice = $(".redDice");
  var playerOne = 'Lord Vader';
  var playerTwo = 'Sir Clementine';
  var turn = true;
  var dogOneCurrentStep = 0;
  var dogTwoCurrentStep = 0;
  var dogOneMoveCount = 0;
  var dogTwoMoveCount = 0;




  // message board
  function boardMsg(x){
    return $("#messageBoard").text(x) // pass the function value to the messageboard
  }
  function diceMsg(x){
    return $("#diceMessage").text(x) // pass dice rolled result to the diceboard
  }


  // playerTwo randomly roll dice and return result between 1-6
  function dogOneRollDice(){
    var dogOneRandomDice = Math.floor((Math.random() * 6) + 1); // randomly generate a whole number between 1-6
    return dogOneRandomDice; // return the value of the Math.Random
  }

  // playerTwo randomly roll dice and return result between 1-6
  function dogTwoRollDice(){
    var dogTwoRandomDice = Math.floor((Math.random() * 6) + 1); // randomly generate a whole number between 1-6
    return dogTwoRandomDice; // return the value of the Math.Random
  }


  // switches between playerOne and PlaerTwo; keep track of moves; and move the game pieces;
  var dogOneMove;
  var dogTwoMove;
  function switchPlayer(){
    if (turn == false){
      var diceRoll = dogTwoRollDice();
      diceMsg(playerTwo + " Rolled " + diceRoll);
      dogTwoCurrentStep += diceRoll
      dogTwoMove = "#box" + dogTwoCurrentStep.toString();
      $(dogTwoMove).append($("#dogTwo").slideUp(500).delay(1000).fadeIn(500));
      dogTwoMoveCount++
      turn = true;
      boardMsg("")
      dogTwoRandomEventMove()
      goToCrate()
      checkWinner()
      return;
      } else if (turn == true) {
        var diceRoll = dogOneRollDice();
        diceMsg(playerOne + " Rolled " + diceRoll);
        dogOneCurrentStep += diceRoll
        dogOneMove = "#box" + dogOneCurrentStep.toString();
        $(dogOneMove).append($("#dogOne").slideUp(500).delay(1000).fadeIn(500));
        dogOneMoveCount++
        turn = false;
        boardMsg("")
        dogOneRandomEventMove()
        goToCrate()
        checkWinner()
        return;
      }
  }

  // winning condition - if player gets to starting position
  function checkWinner(){
    if (dogOneCurrentStep > 19){
      $box0.append($("#dogOne"));
      boardMsg("Congratulation!! " + playerOne + " WINS!!!")
    } else if (dogTwoCurrentStep > 19) {
      $box0.append($("#dogTwo"));
      boardMsg("Congratulation!! " + playerTwo + " WINS!!!")
    }
  }

  // sent to Kennel - if player lands on square 15 - sent back to start postion
  function goToCrate(){
    if (dogOneCurrentStep == 10) {
      $box0.append($("#dogOne").slideUp(500).delay(1000).fadeIn(500));
      boardMsg(playerOne + " was a bad boy! Go to Crate!!!")
      dogOneCurrentStep = 0;
      turn = false;
    } if (dogTwoCurrentStep == 10) {
      $box0.append($("#dogTwo").slideUp(500).delay(1000).fadeIn(500));
      boardMsg(playerTwo + " was a bad boy! Go to Crate!!!")
      dogTwoCurrentStep = 0;
      turn = true;
    }
  }

  // Dog One Random event - 1/4 move+2; 1/4 move-2; 1/4 +1; 1/4 move -1;
  function dogOneRandomEvent(){
    var random = Math.random();
    if (random < 0.25) {
      console.log("Move + 2")
      dogOneCurrentStep += 2;
      dogOneMove = "#box" + dogOneCurrentStep;
      $(dogOneMove).append($("#dogOne").slideUp(500).delay(1000).fadeIn(500));
      boardMsg(playerOne + " move forward two spaces") // this works moving forward by 2
    } else if (random < 0.50) {
      console.log("Move - 2")
      dogOneCurrentStep -= 2;
      dogOneMove = "#box" + dogOneCurrentStep;
      $(dogOneMove).append($("#dogOne").slideUp(500).delay(1000).fadeIn(500));
      boardMsg(playerOne + " move backward two spaces") // displayed message but not moving the icon, but is tracking the count correctly
    } else if (random < 0.75){
      console.log("Move +1")
      dogOneCurrentStep += 1;
      dogOneMove = "#box" + dogOneCurrentStep;
      $(dogOneMove).append($("#dogOne").slideUp(500).delay(1000).fadeIn(500));
      boardMsg(playerOne + " move forward one space") // works moving forward by 1
    } else if (random < 1){
      console.log("Move -1")
      dogOneCurrentStep -= 1;
      dogOneMove = "#box" + dogOneCurrentStep;
      $(dogOneMove).append($("#dogOne").slideUp(500).delay(1000).fadeIn(500));
      boardMsg(playerOne + " move backward one space") // display message but not moving the icon - seem like the bakend works.. just not moving the pic
    }
    checkWinner()
    return;
  }

  // Take in DogOneRandomEvent & move DogOne
  function dogOneRandomEventMove(){
    if (dogOneCurrentStep == 3 || dogOneCurrentStep == 6 || dogOneCurrentStep == 9 || dogOneCurrentStep == 12 || dogOneCurrentStep == 16 || dogOneCurrentStep == 19){
      dogOneRandomEvent()
      return;
    }
  }

  // Dog Two Random event - 1/4 move+2; 1/4 move-2; 1/4 +1; 1/4 move -1;
  function dogTwoRandomEvent(){
    var random = Math.random();
    if (random < 0.25) {
      console.log("Move + 2")
      dogTwoCurrentStep += 2;
      dogTwoMove = "#box" + dogTwoCurrentStep;
      boardMsg(playerTwo + " Move backward two spaces")
      $(dogTwoMove).append($("#dogTwo").slideUp(500).delay(1000).fadeIn(500));
    } else if (random < 0.50) {
      console.log("Move - 2")
      dogTwoCurrentStep -= 2;
      dogTwoMove = "#box" + dogTwoCurrentStep;
      $(dogTwoMove).append($("#dogTwo").slideUp(500).delay(1000).fadeIn(500));
      boardMsg(playerTwo + " Move backward two spaces") // working move the icon backward by 2, rather just one - count off by the # of move
    } else if (random < 0.75){
      console.log("Move +1")
      dogTwoCurrentStep += 1;
      dogTwoMove = "#box" + dogTwoCurrentStep;
      $(dogTwoMove).append($("#dogTwo").slideUp(500).delay(1000).fadeIn(500));
      boardMsg(playerTwo + " Move forward one space") // working move forward by 1
    } else if (random < 1){
      console.log("Move -1")
      dogTwoCurrentStep -= 1;
      dogTwoMove = "#box" + dogTwoCurrentStep;
      $(dogTwoMove).append($("#dogTwo").slideUp(500).delay(1000).fadeIn(500));
      boardMsg(playerTwo + " Move backward one space") // working move backward by 1
    }
      checkWinner()
      return;
  }

  function dogTwoRandomEventMove(){
    if (dogTwoCurrentStep == 3 || dogTwoCurrentStep == 6 || dogTwoCurrentStep == 9 || dogTwoCurrentStep == 12 || dogTwoCurrentStep == 16 || dogTwoCurrentStep == 19){
      dogTwoRandomEvent()
      return;
    }
  }

  // Roll dice to play the game - set player turn and switch between two players
  $redDice.on("click", function(event){
    console.log("dice clicked");
    // setTurn();
    switchPlayer();
  })



  // Start Game and postion two players at starting point
  $startGame.on("click", function(event){
    console.log("game started");
    $box0.append($("#dogTwo"));
    $box0.append($("#dogOne"));
  })

  // Reset game function & clear board
  $resetGame.on("click", function(event){
    console.log("reset button clicked");
    $("#vaderOne").append($("#dogOne"));
    $("#clemenTwo").append($("#dogTwo"));
    turn = true;
    dogOneCurrentStep = 0;
    dogTwoCurrentStep = 0;
    dogOneMoveCount = 0;
    dogTwoMoveCount = 0;
    boardMsg("");
    diceMsg("");
  })



});
