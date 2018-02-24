// Contains a constructor, Word that depends on the Letter constructor. 


//requiring the letter.js file

var Letter = require('./letter.js');

function Word(word) {
    this.word = word;
    this.guessedWord = [];
    this.youWin = false;
    this.guesses = [];

    //

    this.checkWord = function() {
        for(var i = 0; i < this.word.length; i++) {
            var newLetter = new Letter(this.word[i]);
            this.guessedWord.push(newLetter);
        }
    }

    this.checkWord();


    //finds letter in guesses array

    this.foundIt = function(guessLetter) {
        for(var i = 0; i < this.guesses.length; i++) {
            if(guessLetter === this.guesses[i]) {
                return true;
            }
        }
        console.log(guessLetter);
        var added = false;

        this.guesses.push(guessLetter);

        for(var i = 0; i <this.guessedWord.length; i++) {
            if(this.guessedWord[i].toString(guessLetter)) {
                this.guessedWord[i].showsLetter = true;
                added = true;
            }
        }
        return added;
    }


    //this compares user's guess with hidden letter in word
    this.comparingWords = function() {
        for(var i = 0; i < this.word.length; i++) {
            //"hidden letter:", this.word.charAt(i)
            //"letters:", this.guessedWord[i].current
            if(this.word.charAt(i) != this.guessedWord[i].current) {
                return false;
            }
        }
        return true;
    }

    //displays letters in an empty string

    this.display = function() {
        var emptyString = "";
        for(var i = 0; i < this.guessedWord.length; i++) {
            emptyString += this.guessedWord[i].current + " ";
        }
        return emptyString;
    }

}


module.exports = Word;