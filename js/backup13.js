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


  function Game(){
    // random dice roll

    this.boardMsg = function(x){
      return $("#messageBoard").text(x)
    }

    this.diceMsg = function(x){
      return $("#diceMessage").text(x)
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

    // random dice Roll to move between 1-6
    function diceRoll(){
      var randomDice = Math.floor((Math.random() * 6) + 1);
      return randomDice;
    }

    // swtich player function
    function switchPlayer(){
      if (currentTurn == true){
        console.log("DogOne Turn")
        var diceRoll = diceRoll();
        diceMsg(dogOne.name + " Rolled " + diceRoll);
        dogOne.currentStep += diceRoll;
        dogOne.move = dogOne.currentStep.toString();
        dogOne.moveCount++;
        DogOneMovingXandY()
        boardMsg("")
        currentTurn = false;
        // gameRandomCheck()
        // goToCrate()
        // checkWinner()
        return;
      } else if (currentTurn == false) {
        console.log("DogTwo Turn")
        var diceRoll = diceRoll();
        diceMsg(dogTwo.name + " Rolled " + diceRoll);
        dogTwo.currentStep += diceRoll;
        dogTwo.move = dogTwo.currentStep.toString();
        dogTwo.moveCount++;
        DogTwoMovingXandY();
        boardMsg("")
        currentTurn = true;
        // gameRandomCheck()
        // goToCrate()
        // checkWinner()
        return;
      }
    }

  }

  // checkWinner function
  function checkWinner(){
    if (this.currentStep > 19){
      this.dog.css({transform: 'translate(0px,-5px)'});
      boardMsg("Congratulation!! " + this.dog + " WINS!!!")
    } else {}
    return;
  }

  // message board
  function boardMsg(x){
    return $("#messageBoard").text(x) // pass the function value to the messageboard
  }
  function diceMsg(x){
    return $("#diceMessage").text(x) // pass dice rolled result to the diceboard
  }


  // goToCrate when landed on square 10
  function goToCrate(){
    if (this.currentStep == boardPos[10]) {
      this.dog.css({transform: 'translate(0px, -5px)'});
    }
  }



  // gameRandomCheck
  function gameRandomCheck(){
    if (this.currentStep == boardPos[3] || this.currentStep == 6 || this.currentStep == 9 || this.currentStep == 12 || this.currentStep == 16 || this.currentStep == 19){
      gameRandomEvent();
      return;
    }
  }


  // Game random move Event
  function gameRandomEvent(){
    var random = Math.random();
    if (random < 0.25){
      console.log("Move + 2");
      this.currentStep += 2;
      this.move = this.currentStep;
      movingXandY();
      boardMsg(this.dog + " Move forward two spaces");
    } else if (random < 0.50) {
      console.log("Move - 2");
      this.currentStep -=2;
      this.move = this.currentStep;
      movingXandY();
      boardMsg(this.dog + " Move backward two spaces");
    } else if (random < 0.75){
      console.log("Move + 1");
      this.currentStep += 1;
      this.move = this.currentStep;
      movingXandY();
      boardMsg(this.dog + " Move forward one spaces");
    } else if (random < 1) {
      console.log("Move - 1");
      this.currentStep -= 1;
      this.move = this.currentStep;
      movingXandY();
      boardMsg(this.dog + " Move forward one spaces");
    }
    checkWinner();
    return;
  }



  // Roll dice to play the game
  $redDice.on("click", function(event){
    // debugger;
    console.log("dice clicked");
    // setTurn();
    // switchPlayer();
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
      boardMsg("")
      currentTurn = false;
      // gameRandomCheck()
      // goToCrate()
      // checkWinner()
      return;
    } else if (currentTurn == false) {
      console.log("DogTwo Turn")
      var diceRoll = diceRoll();
      diceMsg(dogTwo.name + " Rolled " + diceRoll);
      dogTwo.currentStep += diceRoll;
      dogTwo.move = dogTwo.currentStep.toString();
      dogTwo.moveCount++;
      DogTwoMovingXandY();
      boardMsg("")
      currentTurn = true;
      // gameRandomCheck()
      // goToCrate()
      // checkWinner()
      return;
    }


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
