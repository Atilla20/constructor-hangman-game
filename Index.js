// This file contains the logic for the course of the game
//Depends on Word.j

//Randomly selects a word and uses Word constructor to store it
//Propmts the user for each guess, and keeps track of remaining guesses. 

//CONSTRUCTOR FUNCTION
//Instruction:
//main.js will contain the logic of your app. Running it in Terminal/Bash will start the game.
//The app should end when a player guesses the correct word or runs out of guesses.

var Word = require("./word.js");
var prompt = require("prompt");
var Game = require('./game.js');

prompt.start(); //starting the prompt



function newGame() {

    console.log("New Game");

    var hangmanGame = new Game();
    var userGuess = 10;

	letTheGameBegin(userGuess);
//=====================================================================================
		function letTheGameBegin(guesses){
			console.log("Guesses left: " + guesses);
			if(hangmanGame.currentWord.comparingWords() === true){ // checks to see if whole word has been guessed.
                console.log("You win!");
                
               
			}
			//if the user is out of guesses!
			if(guesses <= 0){
                
                console.log("Game Over! But good try.");
               
               
			}

		// will display the "_" and the number of spaces in the game.
		console.log(hangmanGame.currentWord.display());

	prompt.get(["userGuess"], function(error, result){
		if(error){
			return error;
		}
		//checks to see if word has been found
		if(hangmanGame.currentWord.foundIt(result.userGuess) === false){
            guesses --; 
		}
        letTheGameBegin(guesses);// loops back up until word is found or number of guesses = 0.

        if(hangmanGame.currentWord.comparingWords() === true || guesses <= 0) {
            newGame();

           
            
        }
        
        

	});
}
}
newGame();


