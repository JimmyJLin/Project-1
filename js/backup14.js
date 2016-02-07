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
    this.currentPos = ['','']

  }

  dogOne = new Dog('Lord Vader', $(".dogOne"), 0, 0, true, 0, []);
  dogTwo = new Dog('Sir Clementtine', $(".dogTwo"), 0, 0, false, 0,[]);

  // Game Constructor
  function Board(){
    this.cells = []
    this.currentTurn = true;
    this.winner = '';

    function boardMsg(x){
      return $("#messageBoard").text(x) // pass the function value to the messageboard
    }
    function diceMsg(x){
      return $("#diceMessage").text(x) // pass dice rolled result to the diceboard
    }

    // gameRandomCheck
    function gameRandomCheck(){
      if (dogOne.currentStep == boardPos[3] || dogOne.currentStep == 6 || dogOne.currentStep == 9 || dogOne.currentStep == 12 || dogOne.currentStep == 16 || dogOne.currentStep == 19){
        gameRandomEvent();
        return;
      } else if (dogTwo.currentStep == boardPos[3] || dogTwo.currentStep == boardPos[6] || dogTwo.currentStep == boardPos[9] || dogTwo.currentStep == boardPos[12] || dogTwo.currentStep == boardPos[16] || dogTwo.currentStep == boardPos[19]){
        gameRandomEvent();
        return;
      }
    }

    function goToCrate(){
      if (dogOne.currentStep == boardPos[10]) {
        $("#dogOne").css({transform: 'translate(0px, -5px)'});
      } else if (dogTwo.currentStep == boardPos[10]) {
        $("#dogTwo").css({transform: 'translate(0px, -5px)'});
        }
      return;
    }

    function checkWinner(){
      if (dogOne.curentStep > 19){
        $("#dogOne").css({transform: 'translate(0px,-5px)'});
        boardMsg("Congratulation!! " + this.dog + " WINS!!!")
      } else if (dogTwo.currentStep > 19){
        $("#dogTwo").css({transform: 'translate(0px,-5px)'});
        boardMsg("Congratulation!! " + this.dog + " WINS!!!")
      }
    }


    function switchPlayer(){
      if (this.currentTurn == true){
        console.log("DogOne Turn")
        var diceRoll = diceRoll();
        diceMsg(dogOne.name + " Rolled " + diceRoll);
        dogOne.currentStep += diceRoll;
        dogOne.move = dogOne.currentStep.toString();
        dogOne.moveCount++;
        DogOneMovingXandY()
        boardMsg("")
        this.currentTurn = false;
        gameRandomCheck()
        goToCrate()
        checkWinner()
        return;
      } else if (this.currentTurn == false) {
        console.log("DogTwo Turn")
        var diceRoll = diceRoll();
        diceMsg(dogTwo.name + " Rolled " + diceRoll);
        dogTwo.currentStep += diceRoll;
        dogTwo.move = dogTwo.currentStep.toString();
        dogTwo.moveCount++;
        DogTwoMovingXandY();
        boardMsg("")
        this.currentTurn = true;
        gameRandomCheck()
        goToCrate()
        checkWinner()
        return;
      }
    }
  }


  $redDice.on("click", function(event){
    // debugger;
    console.log("dice clicked");
    switchPlayer()
  }


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
