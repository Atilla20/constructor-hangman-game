//contains a constructor Letter
//Constructor should be able to display something like an underscore( a blank placeholder)


function Letter(letter) {

    //populates word with underscore, until letters are guessed

    this.current = "_";

    //stores the letter
    this.letter = letter;
    // boolean, if true the letter will be shown
    this.show = false;

    this.toString = function(letter) {
        if(this.letter === letter) {
            this.current = this.letter;
            return true;
        }
            return false;
        }

        this.letterShows = function() {
            return this.current;
        }
    };

module.exports = Letter;