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

        const phrase = document.getElementById('phrase'); 
        const startOverlay = document.getElementById('overlay');
        const lives = document.querySelectorAll('img');
        const letters = document.getElementsByClassName('key');
        

        while (phrase.firstChild) {
            phrase.removeChild(phrase.firstChild);
        }
        for (let i = 0; i < letters.length; i++) {
            
            letters[i].disabled = false;
            letters[i].classList.add('key');
            letters[i].classList.remove('chosen', 'wrong');
            
        };

        for (let i = 0; i < lives.length; i++) {
            lives[i].src=`images/liveHeart.png`;
                
        }
            
        startOverlay.style.display = 'none';
        startOverlay.classList.remove('lose', 'win')
        this.activePhrase = this.getRandomPhrase();         
        this.activePhrase.addPhraseToDisplay();
        

       };
       

        
/**
* Checks for winning move
* @return {boolean} True if game has been won, false if game wasn't
won
*/

       checkForWin(){
        let allLetters = document.getElementsByClassName('letter');
        let matchedLetters = document.getElementsByClassName('show');
          if(matchedLetters.length === allLetters.length){
            console.log('we have a winner')
            return true
          }else{
            console.log("wrong")
            return false
            
          }
       };
       
    
 

/**
* Displays game over message
* @param {boolean} gameWon - Whether or not the user won the game
*/
      gameOver(gameWon) {
        const startScreen = document.getElementById('overlay');
        startScreen.style.display = 'block';
        const endMessage = document.getElementById('game-over-message');
          if (gameWon) {
            console.log("you won!")
            endMessage.textContent = 'Good Work, The message was deciphered!';
            startScreen.classList.remove('start');
            startScreen.classList.add('win');
           
            
          } else  {
            console.log("you lost!")
            endMessage.textContent = 'You have failed to decipher the message... Beter Luck Next Time!';
            startScreen.classList.remove('start');
            startScreen.classList.add('lose');
            
            
            }
      };
              

      
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
          this.gameOver(false);
          console.log('removed all life')
          
        }
      };  
/**
* Handles onscreen keyboard button clicks
* @param (HTMLButtonElement) button - The clicked button element
*/

      handleInteraction(button) {
      let currentButton  = button.textContent;
      console.log(this.activePhrase)
      
  
      
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
      // console.log(button)
      };
};