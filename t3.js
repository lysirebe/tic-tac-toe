// TIC TAC TOE GAME //

//Allows the program to read and capture the users input
const readline = require('readline')
const rl = readline.createInterface(process.stdin, process.stdout)

//Variables to be used in functions 
let board = "123456789"
let player = "X"
let p1 = "X"
let p2 = "O"

// Functions 

//Function to display board 
function showBoard(){
  console.log(`${board[0]} | ${board[1]} | ${board[2]}`)
  console.log(`${board[3]} | ${board[4]} | ${board[5]}`)
  console.log(`${board[6]} | ${board[7]} | ${board[8]}`)
}

//Function that stores other player
function otherPlayer(){
  if(player === "X"){
    return "O";
  } else{
    return "X";
  }
}

//Function that makes live changes to board
function update(input){
  for (let i = 0; i < board.length; i++){
    if(board[i] === input){
      // replaces that element in board with current player
      board = board.replace(input, player)
      // calls function to swap between players after each move  
      player = otherPlayer();
      return board;
    }
  }
}

//Function that checks if user input is valid 
function isValid(input){
  let numbers = [1,2,3,4,5,6,7,8,9];
  if(numbers.includes(parseInt(input))){
    if(board.includes(parseInt(input))){
      return true
    } else { 
      //console.log("\nTHIS SPACE IS OCCUPIED, please enter valid value");
      const newInputname = prompt("\nTHIS SPACE IS OCCUPIED, TRY AGAIN");
      return false;
    }
  } else {
    console.log("\nINVALID INPUT,TRY AGAIN");
    return false;
  }
  }

//Function that checks which player has won 
function hasWon(){
  console.log("\n")
  // horizontal winning combinations
  if(((board[0]=== p1) && (board[1]=== p1) && (board[2]=== p1)) || ((board[0]=== p2) && (board[1]=== p2) && (board[2]=== p2))){
    console.log(`GAME OVER\n\nPlayer ${otherPlayer()} won !!`);
    return true;
  } else if(((board[3]=== p1) && (board[4]=== p1) && (board[5]=== p1)) || ((board[3]=== p2) && (board[4]=== p2) && (board[5]=== p2))){
       console.log(`GAME OVER\n\nPlayer ${otherPlayer()} won !!`);
       return true;
  } else if(((board[6]=== p1) && (board[7]=== p1) && (board[8]=== p1)) || ((board[6]=== p2) && (board[7]=== p2) && (board[8]=== p2))){
       console.log(`GAME OVER\n\nPlayer ${otherPlayer()} won !!`);
       return true;

  // vertical winning combinations 
  } else if(((board[0]=== p1) && (board[3]=== p1) && (board[6]=== p1)) || ((board[0]=== p2) && (board[3]=== p2) && (board[6]=== p2))){
       console.log(`GAME OVER\n\nPlayer ${otherPlayer()} won !!`);
       return true;
  } else if(((board[1]=== p1) && (board[4]=== p1) && (board[7]=== p1)) || ((board[1]=== p2) && (board[4]=== p2) && (board[7]=== p2))){
       console.log(`GAME OVER\n\nPlayer ${otherPlayer()} won !!`)
       return true;
  } else if(((board[2]=== p1) && (board[5]=== p1) && (board[8]=== p1)) || ((board[2]=== p2) && (board[5]=== p2) && (board[8]=== p2))){
       console.log(`GAME OVER\n\nPlayer ${otherPlayer()} won !!`);
       return true;

  // diagonal winning combinations
  } else if(((board[0]=== p1) && (board[4]=== p1) && (board[8]=== p1)) || ((board[0]=== p2) && (board[4]=== p2) && (board[8]=== p2))){
       console.log(`GAME OVER\n\nPlayer ${otherPlayer()} won !!`);
       return true;
  } else if(((board[2]=== p1) && (board[4]=== p1) && (board[6]=== p1)) || ((board[2]=== p2) && (board[4]=== p2) && (board[6]=== p2))){
       console.log(`GAME OVER\n\nPlayer ${otherPlayer()} won !!`)
       return true;
  } else {
       return false
      }
    }

//Function that checks if no more moves are available 
function draw(){
  console.log("\n")
  // the regExp reads from start to the end, checking that zero or more numbers do not exist in the string 
    const regExp = /^[^0-9]*$/g;
    if(regExp.test(board) === true){
      console.log("\nGAME OVER - ITS A DRAW ");
      return true;
    } else {
      return false;
    }}

///Function that recursively prompts user for input, exiting the game once certain conditions are met
function play(){
  console.log(`\nPlayer ${player} Its your turn`)
  rl.question("\nEnter the number of the square youd like to play: ", (answer) => {
    if(isValid(answer)){
      console.log(`\nYou chose ${answer}\n`);
      showBoard(update(answer));

      if (hasWon()){
        process.exit(0);
      } else if(draw()){
          process.exit(0);
      } else {
          play();
    }

    } else {
       play();
    }
})}


// Main Program 
console.log("\n");
showBoard(board);
play();


// // functions using regex 

// function hasWonRegEx(currentPlayer){
// //haswon function with regex 
// // let every item in the list be a regexp 
// // loop through the list testing it against board 
// // while i !== combinations.length
// // if true console log player has won, return true
// // else i++

// // return false
//   let combinations = [ 
//     /X{3}|O{3}/,
//     // /^X(?! X) ^X|^O
//     "#..#..#..",
//     ".#..#..#.",
//     "..#..#..#",
//     "#...#.#..",
//     "..#.#.#.."]
// }

// function isValidRegEx(){

// }
// // (a|b) exists in this pattern
// // additional features include - tally/scoreboard, would you like to play again, strikethrough feature when win 
