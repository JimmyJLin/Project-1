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
  function diceMsg(x){
    return $("#diceMessage").text(x)
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
    // return diceMsg("Rolled " + dogOneRandomDice);
  }

  function dogTwoRollDice(){
    dogTwoRandomDice = Math.floor((Math.random() * 6) + 1);
    dogTwocurrentStep += dogTwoRandomDice;
    return dogTwoRandomDice;
    // return diceMsg("Rolled " + dogTwoRandomDice);
  }

  // set player turn
  // function setTurn(){
  //   if (turn == true){
  //     currentTurn = playerOne;
  //   } else {
  //     currentTurn = playerTwo;
  //   }
  //   return currentTurn
  // }


  // game logic
  // switch between players
  // function not displaying the movement after one cycle.
  function switchPlayer(){
    var dogOneMove = "#box" + dogOnecurrentStep.toString();
    var dogTwoMove = "#box" + dogTwocurrentStep.toString();
    // var turn = true;
    if (turn == false){
      dogTwoRollDice();
      diceMsg("Rolled " + dogTwoRandomDice);
      $(dogTwoMove).append($("#dogTwo"));
      dogTwoMoveCount++
      turn = true;
      return;
      } else if (turn == true) {
        dogOneRollDice();
        diceMsg("Rolled " + dogOneRandomDice);
        $(dogOneMove).append($("#dogOne"));
        dogOneMoveCount++
        turn = false;
        return;
        }
  };

  // rolling dice & move


  // click event to roll dice
  $redDice.on("click", switchPlayer)

  $redDice.on("click", function(event){
    console.log("dice clicked");
    // display which player turn
  // currentPlayer roll dice & display message
    // setTurn();
    switchPlayer();
    // boardMsg(currentTurn + "'s turn!");
  })

  // display dice rolled result
  // display which player's turn

  if ($("#box19").class === "dogOne"){
    console.log("Player One Win!")
  }



  // Start & Reset Game function
  $startGame.on("click", function(event){
    console.log("game started");
    $box0.append($("#dogTwo"));
    $box0.append($("#dogOne"));
    // $startGame.off("click")
  })


  $resetGame.on("click", function(event){
    console.log("reset button clicked");
    $box0.append($("#dogOne"));
    $box0.append($("#dogTwo"));
    $startGame.on("click")
  })



});
