$(document).ready(function(){
  console.log("js loaded");

// global variables
  var $startGame = $('#startButton');
  var $resetGame = $('#resetButton');
  var $box0 = $("#box0");
  var $board = $('.board');
  var $dogOne = $(".dogOne")
  var $dogTwo = $(".dogTwo")
  var $redDice = $('#red_dice');
  var playerOne = 'Dog One';
  var playerTwo = 'Dog Two';
  var turn = true;
  var currentPlayer = '';
  var dogOnecurrentStep = 0;
  var dogTwocurrentStep = 0;
  var dogOneMoveCount = 0;
  var dogTwoMoveCount = 0;




  // display message
  function boardMsg(x){
    return $("#messageBoard").text(x)
  }

  // Random rollDice
  // function rollDice(){
  //   randomDice = Math.floor((Math.random() * 6) + 1);
  //   dogOnecurrentStep += randomDice;
  //   dogTwocurrentStep += randomDice;
  //   return randomDice;
  // }

  function dogOneRollDice(){
    dogOneRandomDice = Math.floor((Math.random() * 6) + 1);
    dogOnecurrentStep += dogOneRandomDice;
    return dogOneRandomDice;
  }

  function dogTwoRollDice(){
    dogTwoRandomDice = Math.floor((Math.random() * 6) + 1);
    dogTwocurrentStep += dogTwoRandomDice;
    return dogTwoRandomDice;
  }

  // set player turn
  function setTurn(){
    if (turn == true){
      currentTurn = playerOne;
    } else {
      currentTurn = playerTwo;
    }
    return currentTurn
  }

  // Dog One Move
  function dogOneMove (){
    dogOneRollDice()
    boardMsg(playerOne + " rolled " + dogOneRandomDice);
    var currentTurn = setTurn()
    var dogOneMove = "#box" + dogOnecurrentStep.toString();
    if (currentPlayer = playerOne){
      dogOneMoveCount = 0
      $(dogOneMove).append($("#dogOne"));
      return;
    } else {
      currentPlayer = playerTwo;
      boardMsg(playerTwo + "'s turn!");
    }
    return;
  }
  // One Two Move
  function dogTwoMove (){
    dogTwoRollDice()
    boardMsg(playerTwo + " rolled " + dogTwoRandomDice);
    var currentTurn = setTurn()
    var dogTwoMove = "#box" + dogTwocurrentStep.toString();
    if (currentPlayer = playerTwo){
      dogTwoMoveCount = 0
      $(dogTwoMove).append($("#dogTwo"));
      return;
    } else {
      currentPlayer = playerOne;
      boardMsg(playerOne + "'s turn!");
    }
    return;
  }

  // take the result of the dice apply to the palyer movement
    $redDice.on("click", function(event){
      var currentTurn = setTurn()
      if (turn = true) {
        dogOneMove()
      } else {
        dogTwoMove()
      }


    });


    // function setTurn(){
    //   if (turn == true){
    //     currentTurn = playerOne;
    //   } else {
    //     currentTurn = playerTwo;
    //   }
    //   return currentTurn
    // }




  // Start & Reset Game function
  $startGame.on("click", function(event){
    console.log("game started");
    $box0.append($("#dogOne"));
    $box0.append($("#dogTwo"));
  })

  $resetGame.on("click", function(event){
    console.log("reset button clicked");

    // currentStep = 0;
  })



});
