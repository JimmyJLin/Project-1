$(document).ready(function(){

  // Global variables
  var $startGame = $('#startButton');
  var $resetGame = $('#resetButton');
  var $box0 = $("#box0");
  var $board = $('.board');
  var $dogOne = $("#dogOne")
  var $dogTwo = $("#dogTwo")
  var $redDice = $(".redDice");
  var currentTurn = true;

  var boardPos = [
    ['0','-150'],['0','-300'],['0','-450'],['0','-600'],['0','-740'],
    ['140','-740'],['290','-740'],['440','-740'],['590','-740'],['730','-740'],
    ['730','-585'], ['730','-442'],['730','-300'],['730','-155'],['730','-5'],
    ['584','-5'],['438','-5'],['289','-5'],['140','-5'],['0','-5']
  ]

  // Dog constructor
  function Dog(name, icon, currentStep, moveCount, turn, move){
    this.name = name;
    this.icon = icon;
    this.currentStep = currentStep;
    this.moveCount = moveCount;
    this.turn = turn;
    this.move = move;

  }

  dogOne = new Dog('Lord Vader', $("#dogOne"), 0, 0, true, 0, []);
  dogTwo = new Dog('Sir Clementtine', $("#dogTwo"), 0, 0, false, 0,[]);


  // message board
  function boardMsg(x){
    return $("#messageBoard").text(x) // pass the function value to the messageboard
  }
  function diceMsg(x){
    return $("#diceMessage").text(x) // pass dice rolled result to the diceboard
  }

  //default game message @ startGame
  $("#messageBoard").text("Press Start Game to begin")
  $("#diceMessage").text("Each player click on red dice to roll, first player to reach the finish line wins!")


  // checkWinner function
  function checkWinner(){
    if (dogOne.curentStep > 19){
      prompt("Congratulation!! " + dogOne.name + " WINS!!!")
      $dogOne.css({transform: 'translate(0px,-5px)'});
    } else if (dogTwo.currentStep > 19){
      prompt("Congratulation!! " + dogTwo.name + " WINS!!!")
      $dogTwo.css({transform: 'translate(0px,-5px)'});
    }
    return;
  }

    // move Dog one to the next position (currentPos + rolled dice) - loop through the array and find that position -
    function DogOneMovingXandY(){
      // checkWinner();
      for (var i = 0; i < dogOne.move; i++){
        var boardX = boardPos[i][0] + "px"
        var boardY = boardPos[i][1] + 'px';
        $dogOne.css({transform: 'translate(' + boardX + ',' + boardY + ')'});
      }
      return;
    }

    // for random event movemently - move Dog one to the next position (currentPos + rolled dice) - loop through the array and find that position -
    function DogOneRandomMovingXandY(){
      for (var i = 0; i < dogOne.move; i++){
        var boardX = boardPos[i][0] + "px"
        var boardY = boardPos[i][1] + 'px';
        setTimeout(function(){
          $("#dogOne").css({transform: 'translate(' + boardX + ',' + boardY + ')'});
        }, 3000);
      }
      return;
    }

    // move Dog one to the next position (currentPos + rolled dice) - loop through the array and find that position -
    function DogTwoMovingXandY(){
      // checkWinner();
      for (var i = 0; i < dogTwo.move; i++){
        var boardX = boardPos[i][0] + "px"
        var boardY = boardPos[i][1] + 'px';
        $dogTwo.css({transform: 'translate(' + boardX + ',' + boardY + ')'});
      }
      return;
    }

    // for random event movemently - move Dog one to the next position (currentPos + rolled dice) - loop through the array and find that position -
    function DogTwoRandomMovingXandY(){
      for (var i = 0; i < dogTwo.move; i++){
        var boardX = boardPos[i][0] + "px"
        var boardY = boardPos[i][1] + 'px';
        setTimeout(function(){
          $("#dogTwo").css({transform: 'translate(' + boardX + ',' + boardY + ')'});
        }, 3000);
      }
      return;
    }

      // gameRandomCheck - 6 random event tiles
      function gameRandomCheck(){
        if (dogOne.currentStep == 3 || dogOne.currentStep == 6 || dogOne.currentStep == 9 || dogOne.currentStep == 12 || dogOne.currentStep == 16 || dogOne.currentStep == 19){
          dogOneGameRandomEvent();
          return;
        } if (dogTwo.currentStep == 3 || dogTwo.currentStep == 6 || dogTwo.currentStep == 9 || dogTwo.currentStep == 12 || dogTwo.currentStep == 16 || dogTwo.currentStep == 19){
          dogTwoGameRandomEvent();
          return;
        }
      }

    // dog One random event generator - 1/4 move + 2; 1/4 move - 2; 1/4 move + 1; 1/4 move - 1;
    function dogOneGameRandomEvent(){
      var random = Math.random();
      if (random < 0.25){
        dogOne.currentStep += 2;
        dogOne.move = dogOne.currentStep;
        DogOneRandomMovingXandY();
        boardMsg(dogOne.name + " move forward two spaces");
      } else if (random < 0.50) {
        dogOne.currentStep -=2;
        dogOne.move = dogOne.currentStep;
        DogOneRandomMovingXandY();
        boardMsg(dogOne.name + " move backward two spaces");
      } else if (random < 0.75){
        dogOne.currentStep += 1;
        dogOne.move = dogOne.currentStep;
        DogOneRandomMovingXandY();
        boardMsg(dogOne.name + " move forward one spaces");
      } else if (random < 1) {
        dogOne.currentStep -= 1;
        dogOne.move = dogOne.currentStep;
        DogOneRandomMovingXandY();
        boardMsg(dogOne.name + " move backward one spaces");
      }
      return;
    }

    // dog two random event generator - 1/4 move + 2; 1/4 move - 2; 1/4 move + 1; 1/4 move - 1;
    function dogTwoGameRandomEvent(){
      var random = Math.random();
      if (random < 0.25){
        dogTwo.currentStep += 2;
        dogTwo.move = dogTwo.currentStep;
        DogTwoRandomMovingXandY();
        boardMsg(dogTwo.name + " move forward two spaces");
      } else if (random < 0.50) {
        dogTwo.currentStep -=2;
        dogTwo.move = dogTwo.currentStep;
        DogTwoRandomMovingXandY();
        boardMsg(dogTwo.name + " move backward two spaces");
      } else if (random < 0.75){
        dogTwo.currentStep += 1;
        dogTwo.move = dogTwo.currentStep;
        DogTwoRandomMovingXandY();
        boardMsg(dogTwo.name + " move forward one spaces");
      } else if (random < 1) {
        dogTwo.currentStep -= 1;
        dogTwo.move = dogTwo.currentStep;
        DogTwoRandomMovingXandY();
        boardMsg(dogTwo.name + " move backward one spaces");
      }
      return;
    }


    // goToCrate when landed on square 10
    function goToCrate(){
      if (dogOne.currentStep == 10) {
        boardMsg(dogOne.name + " was a bad boy! Go to Crate!!!")
        $dogOne.css({transform: 'translate(730px, -740px)'});
        setTimeout(function(){
          $dogOne.css({transform: 'translate(0px, -5px)'});
        }, 3000);
        dogOne.currentStep = 0;
      } if (dogTwo.currentStep == 10) {
        boardMsg(dogTwo.name + " was a bad boy! Go to Crate!!!")
        $dogTwo.css({transform: 'translate(730px, -740px)'});
        setTimeout(function(){
          $dogTwo.css({transform: 'translate(0px, -5px)'});
        }, 3000);
        dogTwo.currentStep = 0;
        }
      return;
    }

    // swtich player function
    function switchPlayer(){
      // random dice Roll to move between 1-6
      function diceRoll(){
        var randomDice = Math.floor((Math.random() * 6) + 1);
        return randomDice;
      }

      if (currentTurn == true){
        var diceRoll = diceRoll();
        diceMsg(dogOne.name + " Rolled " + diceRoll);
        dogOne.currentStep += diceRoll;
        dogOne.move = dogOne.currentStep.toString();
        dogOne.moveCount++;
        DogOneMovingXandY()
        currentTurn = false;
        gameRandomCheck()
        goToCrate()
        setTimeout(function(){
          boardMsg("");
          diceMsg(dogTwo.name + "'s turn!!");
        }, 5000);
        checkWinner()
        return;
      } else if (currentTurn == false) {
          var diceRoll = diceRoll();
          diceMsg(dogTwo.name + " Rolled " + diceRoll);
          dogTwo.currentStep += diceRoll;
          dogTwo.move = dogTwo.currentStep.toString();
          dogTwo.moveCount++;
          DogTwoMovingXandY();
          currentTurn = true;
          gameRandomCheck()
          goToCrate()
          setTimeout(function(){
            boardMsg("");
            diceMsg(dogOne.name + "'s turn!!");
          }, 5000);
          checkWinner()
          return;
      }
    }


  // Roll dice to play the game
  $redDice.on("click", function(event){
    switchPlayer();
  })


  // Start game
  $startGame.on("click", function(event){
    boardMsg("");
    diceMsg(dogOne.name + "'s turn!!");
    $box0.append($dogTwo);
    $box0.append($dogOne);
  })

  $resetGame.on("click", function(event){
    $("#vaderOne").append($dogOne);
    $("#clemenTwo").append($dogTwo);
    this.turn = true;
    dogOne.currentStep = 0;
    dogOne.moveCount = 0;
    dogTwo.currentStep = 0;
    dogTwo.moveCount = 0;
    boardMsg("");
    diceMsg("");
  })




});
