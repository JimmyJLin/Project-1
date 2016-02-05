## Puppy Race

##### Inspiration:
Monoploy inspired board game without the complexities of the game.  

![](img/Puppy_Race.jpg)

#### Basic Game:

1. As a user, I want move the two french bulldog puppies through the board through various obstacles from the start to end.
  * user will be able to Start & Reset Game
    * Start Game - move player pieces to start location
      * Randomly choose which player will start the game
      * Display the name of the player
      * Enable player to be able to click on dice
    * Reset Game - clear the board and move the player pieces to the start location

2. As the user click on the dice, it will randomly generate a number between1-6, each puppies will move accordingly.
  * user start playing by clicking on the dice (located at the center of the board)
    * randomly select which player to start the game & display above the dice
    * return Random (1-6) as the the allowable move
    * use the return value and move the player piece
  * Enable 2nd player - once the 1st player completed the move
    * user will be able to click on the dice
    * return Random (1-6) as the the allowable move
    * use the return value and move the player piece

3. Throughout the board, user will encounter 6 random event generators where they could be asked to move back X # of steps or move forward X # of steps.
  * When user lands on square 3, 6, 9, 12, 16, 19 with ? mark
    * Random generator to move the player forward or backward
      * 25% move forward by 2 square
      * 25% move backward by 2 square
      * 25% move forward by 1 square
      * 25% move backward by 1 square
  * Display message

4. There will be two spots where the puppies can pee for free on a red fire hydrant.
  * When user lands on 5 & 15 (red hydrant) they can pee for free
  * Display message

5. Half way through the board, there is a square where user's puppy will be sent to the kennel for being a bad puppy (back to the start position)
  * when user lands on square 10 - for being a bad puppy, they go to Crate (back to start or square 5?)
  * Display message

6. Once one of the puppy reach the end, game over and display which puppy won the game.
  * possible conflict if start / end at the same square?

#### Bonus features
1. Implement 3rd random events - skip turns within the random event generator
2. Game run for more than 1 complete cycle
3. each square contain certain quantity of bones, as user move along the board, they can start collecting bones.
4. display the bones colected by each puppies
5. implement square where will deduct bones from the player when they land on it.
6. the game ends within 30mins, which ever puppies(user) has the most bones win.
7. add more players.
