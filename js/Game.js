/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
     constructor(){
         this.missed=0;
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
          const overlay = document.getElementById('overlay');
          overlay.style.display = 'none';
          const randomPhrase = this.getRandomPhrase()
          this.activePhrase = randomPhrase;
          this.activePhrase.addPhraseToDisplay()
          console.log(this.activePhrase.phrase)   
       }
       

        

       checkForWin(){
        let allLetters = document.getElementsByClassName('letter');
        let matchedLetters = document.getElementsByClassName('show');
          if(matchedLetters.length == allLetters.length){
            return true
          }else{
            return false
          }
       }
       
    
     
      removeLife() {
      let life = document.getElementsByTagName('img');
      life[this.missed].setAttribute('src', 'images/lostHeart.png');
      this.missed += 1;
        if (this.missed === 5) {
          this.gameOver();
        }
      }

      gameOver(gameWon) {
        const startScreen = document.getElementById('overlay');
        startScreen.style.display = 'block';
        const endOverlay = document.getElementById('overlay');
        const endMessage = document.getElementById('game-over-message');
          if (gameWon) {
            this.newGame();
            endMessage.textContent = 'Good Work, You Won!';
            endOverlay.classList.replace('start', 'win');
          } else {
            this.newGame();
            endMessage.textContent = 'You Lost... Beter Luck Next Time!';
            endOverlay.classList.replace('start', 'lose');
          }
        }
      newGame(){
      const phrases = document.getElementById('phrases');
      const chosen = document.querySelectorAll(".chosen");
      const wrong = document.querySelectorAll(".wrong");
      const lives = document.querySelectorAll(".tries");
       
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
        console.log(phrases);
      }

      
     

      handleInteraction(button) {
      let currentButton  = button.textContent;
      console.log(this.activePhrase)
      console.log(currentButton);
  
      button.disabled = true;
      if(!this.activePhrase.checkLetter(currentButton)) {
          button.classList.add('wrong');
          this.removeLife();
      } else {
          button.classList.add('chosen');
          this.activePhrase.showMatchedLetter(currentButton);
          this.checkForWin();
      }
      
      if(this.checkForWin()) {
          this.gameOver(true);
      }
      console.log(button)
      }
}