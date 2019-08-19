/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
     constructor(){
         this.missed = 0;
         this.phrases = [
          new Phrase("Kill Two Birds With One Stone"),
          new Phrase("An Arm and a Leg"),
          new Phrase("A Dime a Dozen"),
          new Phrase("Beat Around the Bush"),
          new Phrase("Back to Square One")  
      ]
         this.activePhrase = null;
     };

       
        getRandomPhrase(){
            return this.phrases[Math.floor(Math.random() * 5)];
        }

     /**
    * Begins game by selecting a random phrase and displaying it to user
    */
       startGame(){
          
          const letters = document.getElementsByClassName('key');
          console.log(letters);
          const overlay = document.getElementById('overlay');
          overlay.style.display = 'none';
          const randomPhrase = this.getRandomPhrase()
          this.activePhrase = randomPhrase;
          this.activePhrase.addPhraseToDisplay()
          console.log(this.activePhrase.phrase)
          
          for(let i=0; i < letters.length; i++){
            letters[i].disabled = false;
          }
          
          

       }
       

        
/**
* Checks for winning move
* @return {boolean} True if game has been won, false if game wasn't
won
*/

       checkForWin(){
        let allLetters = document.getElementsByClassName('letter');
        let matchedLetters = document.getElementsByClassName('show');
          if(matchedLetters.length == allLetters.length){
            return true
          }else{
            return false
          }
       }
       
    
 /**
* Increases the value of the missed property
* Removes a life from the scoreboard
* Checks if player has remaining lives and ends game if player is out
*/
      removeLife() {
      let life = document.getElementsByTagName('img');
      life[this.missed].src="images/lostHeart.png";
      this.missed += 1;
      
        if (this.missed === 5) {
          this.gameOver();
        }
      }

/**
* Displays game over message
* @param {boolean} gameWon - Whether or not the user won the game
*/

      gameOver(gameWon) {
        const startScreen = document.getElementById('overlay');
        startScreen.style.display = 'block';
        const endOverlay = document.getElementById('overlay');
        const endMessage = document.getElementById('game-over-message');
          if (gameWon) {
            this.newGame();
            endMessage.textContent = 'Good Work, The message was deciphered!';
            endOverlay.classList.replace('start', 'win');
          } else {
            this.newGame();
            endMessage.textContent = 'You have failed to decipher the message... Beter Luck Next Time!';
            endOverlay.classList.replace('start', 'lose');
          }
        }
//Resets the game by resetting all elements to default settings
      newGame(){
      const phrases = document.getElementById('phrase');
      const chosen = document.querySelectorAll(".chosen");
      const wrong = document.querySelectorAll(".wrong");
      const lives = document.querySelectorAll(".tries");
      this.missed = 0;
        console.log(phrases.children);
        while (phrases.firstChild) {
          phrases.removeChild(phrases.firstChild);
        }
        for (let i = 0; i < chosen.length; i++) {
            chosen[i].className = 'key';
        }
        for (let i = 0; i < wrong.length; i++) {
        wrong[i].className = 'key';
        }
        for (let i = 0; i < lives.length; i++) {
            lives[i].firstChild.src = 'images/liveHeart.png';
        }
        
      }

      
     
/**
* Handles onscreen keyboard button clicks
* @param (HTMLButtonElement) button - The clicked button element
*/

      handleInteraction(button) {
      let currentButton  = button.textContent;
      console.log(this.activePhrase)
      console.log(currentButton);
  
      
      if(!this.activePhrase.checkLetter(currentButton)) {
          button.classList.add('wrong');
          button.disabled = true;
          this.removeLife();
      } else {
          button.classList.add('chosen');
          this.activePhrase.showMatchedLetter(currentButton);
          this.checkForWin();
          button.disabled = true;
      }
      
      if(this.checkForWin()) {
          this.gameOver(true);
      }
      console.log(button)
      }
}