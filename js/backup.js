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



  // take the result of the dice apply to the palyer movement
  $redDice.on("click", function(event){
    $box0.attr("class", "dogTwo");
    console.log("dice clicked");
    dogOneRollDice()
    dogTwoRollDice()
    var currentTurn = setTurn()
    var dogOneMove = "#box" + dogOnecurrentStep.toString();
    var dogTwoMove = "#box" + dogTwocurrentStep.toString();
    if (currentTurn === playerOne){
      dogOneMoveCount++
      $(dogOneMove).attr("class",'dogOne');
      if ($('#box19').class === 'dogOne') {
        dogOneMoveCount = 0;
        boardMsg(playerOne + " WIN!");
        return;
        } else {
          turn = playerTwo;
          boardMsg(playerTwo + "'s turn!" + " Rolled " + dogOneRandomDice);
          }
        return;
    } else if (currentTurn === playerTwo) {
        dogTwoMoveCount++;
        $(dogTwoMove).attr("class", 'dogTwo');
      } if ($('#box19').class === 'dogTwo'){
          dogTwoMoveCount = 0;
          boardMsg(playerTwo + " WIN!");
          return;
        } else {
            turn = playerOne;
            boardMsg(playerOne + "'s turn!" + " Rolled " + dogTwoRandomDice)
          }
        return;


  });









  // Start & Reset Game function
  $startGame.on("click", function(event){
    console.log("game started");
    // $box0.attr("class", "dogOne");
    // $box0.attr("class", "dogTwo");
    $box0.attr("class", "dog");
  })

  $resetGame.on("click", function(event){
    console.log("reset button clicked");
    $board.attr("class", "board");
    $dogOne.attr("class", "board");
    $dogTwo.attr("class", "board");
    $box0.addClass('dog');
    // currentStep = 0;
  })



});
