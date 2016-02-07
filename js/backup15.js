$(document).ready(function(){
  console.log("js loaded");

  // Global variables
  var $startGame = $('#startButton');
  var $resetGame = $('#resetButton');
  var $box0 = $("#box0");
  var $board = $('.board');
  var $dogOne = $(".dogOne")
  var $dogTwo = $(".dogTwo")
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
    this.currentPos =
    function currentPos(){
      // var pos = currentStep
      for (var i = 0; i < boardPos[6]; i++){
        console.log(boardPos[i])
      }
    }

  }

  dogOne = new Dog('Lord Vader', $(".dogOne"), 0, 0, true, 0, []);
  dogTwo = new Dog('Sir Clementtine', $(".dogTwo"), 0, 0, false, 0,[]);


  // message board
  function boardMsg(x){
    return $("#messageBoard").text(x) // pass the function value to the messageboard
  }
  function diceMsg(x){
    return $("#diceMessage").text(x) // pass dice rolled result to the diceboard
  }

    // css anditiona moving from position to position
    function DogOneMovingXandY(){
      for (var i = 0; i < dogOne.move; i++){
        var boardX = boardPos[i][0] + "px"
        var boardY = boardPos[i][1] + 'px';
        $("#dogOne").css({transform: 'translate(' + boardX + ',' + boardY + ')'});
      }
      return;
    }

    function DogTwoMovingXandY(){
      for (var i = 0; i < dogTwo.move; i++){
        var boardX = boardPos[i][0] + "px"
        var boardY = boardPos[i][1] + 'px';
        $("#dogTwo").css({transform: 'translate(' + boardX + ',' + boardY + ')'});
      }
      return;
    }


      // gameRandomCheck
      function gameRandomCheck(){
        if (dogOne.currentStep == 3 || dogOne.currentStep == 6 || dogOne.currentStep == 9 || dogOne.currentStep == 12 || dogOne.currentStep == 16 || dogOne.currentStep == 19){
          dogOneGameRandomEvent();
          return;
        } if (dogTwo.currentStep == 3 || dogTwo.currentStep == 6 || dogTwo.currentStep == 9 || dogTwo.currentStep == 12 || dogTwo.currentStep == 16 || dogTwo.currentStep == 19){
          dogTwoGameRandomEvent();
          return;
        }
      }

    // Game random move Event
    function dogOneGameRandomEvent(){
      var random = Math.random();
      if (random < 0.25){
        console.log("Move + 2");
        dogOne.currentStep += 2;
        dogOne.move = dogOne.currentStep;
        DogOneMovingXandY();
        boardMsg(dogOne.name + " Move forward two spaces");
      } else if (random < 0.50) {
        console.log("Move - 2");
        dogOne.currentStep -=2;
        dogOne.move = dogOne.currentStep;
        DogOneMovingXandY();
        boardMsg(dogOne.dog + " Move backward two spaces");
      } else if (random < 0.75){
        console.log("Move + 1");
        dogOne.currentStep += 1;
        dogOne.move = dogOne.currentStep;
        DogOneMovingXandY();
        boardMsg(dogOne.name + " Move forward one spaces");
      } else if (random < 1) {
        console.log("Move - 1");
        dogOne.currentStep -= 1;
        dogOne.move = dogOne.currentStep;
        DogOneMovingXandY();
        boardMsg(dogOne.name + " Move backward one spaces");
      }
      checkWinner();
      return;
    }

    function dogTwoGameRandomEvent(){
      var random = Math.random();
      if (random < 0.25){
        console.log("Move + 2");
        dogTwo.currentStep += 2;
        dogTwo.move = dogTwo.currentStep;
        DogTwoMovingXandY();
        boardMsg(dogTwo.name + " Move forward two spaces");
      } else if (random < 0.50) {
        console.log("Move - 2");
        dogTwo.currentStep -=2;
        dogTwo.move = dogTwo.currentStep;
        DogTwoMovingXandY();
        boardMsg(dogTwo.name + " Move backward two spaces");
      } else if (random < 0.75){
        console.log("Move + 1");
        dogTwo.currentStep += 1;
        dogTwo.move = dogTwo.currentStep;
        DogTwoMovingXandY();
        boardMsg(dogTwo.name + " Move forward one spaces");
      } else if (random < 1) {
        console.log("Move - 1");
        dogTwo.currentStep -= 1;
        dogTwo.move = dogTwo.currentStep;
        DogTwoMovingXandY();
        boardMsg(dogTwo.name + " Move backward one spaces");
      }
      checkWinner();
      return;
    }

    // checkWinner function
    function checkWinner(){
      if (dogOne.curentStep > 19){
        $("#dogOne").css({transform: 'translate(0px,-5px)'});
        boardMsg("Congratulation!! " + dogOne.name + " WINS!!!")
      } else if (dogTwo.currentStep > 19){
        $("#dogTwo").css({transform: 'translate(0px,-5px)'});
        boardMsg("Congratulation!! " + dogTwo.name + " WINS!!!")
      }
    }


    // goToCrate when landed on square 10
    function goToCrate(){
      if (dogOne.currentStep == 10) {
        boardMsg(dogOne.name + " was a bad boy! Go to Crate!!!")
        $("#dogOne").css({transform: 'translate(730px, -740px)'});
        $("#dogOne").css({transform: 'translate(0px, -5px)'});
        dogOne.currentStep = 0;
      } if (dogTwo.currentStep == 10) {
        boardMsg(dogTwo.name + " was a bad boy! Go to Crate!!!")
        $("#dogTwo").css({transform: 'translate(730px, -740px)'});
        $("#dogTwo").css({transform: 'translate(0px, -5px)'});
        dogTwo.currentStep = 0;
        }
      return;
    }
    // random dice Roll to move between 1-6
    // function diceRoll(){
    //   var randomDice = Math.floor((Math.random() * 6) + 1);
    //   return randomDice;
    // }

    // swtich player function
    function switchPlayer(){
      function diceRoll(){
        var randomDice = Math.floor((Math.random() * 6) + 1);
        return randomDice;
      }
      if (currentTurn == true){
        console.log("DogOne Turn")
        var diceRoll = diceRoll();
        diceMsg(dogOne.name + " Rolled " + diceRoll);
        dogOne.currentStep += diceRoll;
        dogOne.move = dogOne.currentStep.toString();
        dogOne.moveCount++;
        DogOneMovingXandY()
        currentTurn = false;
        boardMsg("")
        gameRandomCheck()
        goToCrate()
        checkWinner()
        return;
      } else if (currentTurn == false) {
        console.log("DogTwo Turn")
        var diceRoll = diceRoll();
        diceMsg(dogTwo.name + " Rolled " + diceRoll);
        dogTwo.currentStep += diceRoll;
        dogTwo.move = dogTwo.currentStep.toString();
        dogTwo.moveCount++;
        DogTwoMovingXandY();
        currentTurn = true;
        boardMsg("")
        gameRandomCheck()
        goToCrate()
        checkWinner()
        return;
      }
    }


  // Roll dice to play the game
  $redDice.on("click", function(event){
    // debugger;
    console.log("dice clicked");
    switchPlayer();
  })


  // Start game
  $startGame.on("click", function(event){
    console.log("game started");
    $box0.append($("#dogTwo"));
    $box0.append($("#dogOne"));
  })

  $resetGame.on("click", function(event){
    console.log("reset button clicked");
    $("#vaderOne").append($("#dogOne"));
    $("#clemenTwo").append($("#dogTwo"));
    this.turn = true;
    this.currentStep = 0;
    this.moveCount = 0;
    boardMsg("");
    diceMsg("");
  })


});
