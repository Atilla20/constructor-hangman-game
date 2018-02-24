//Constructor function for randomly selecting a word for the player.
var Word = require("./word.js");


var Game = function(){
	this.hiddenWords = ["bananas", "oranges", "apples", "watermelon", "pineapple", "blackberries", "raspberries", "strawberries", "blueberries", "mangoes", "kiwi"];

	this.randomWord = this.hiddenWords[ Math.floor(Math.random() * this.hiddenWords.length)];
    this.currentWord = new Word(this.randomWord);
   
	
}
	var hangMan = new Game();
	// console.log(hangMan.randomWord);

module.exports = Game;