/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
     constructor(){
         this.missed=0;
         this.phrases = this.createPhrases();
         this.activePhrase = null;
     };

       createPhrases(){
         const storedPhrases = [
             {phrase:"Kill Two Birds With One Stone"},
             {phrase:"An Arm and a Leg"},
             {phrase:"A Dime a Dozen"},
             {phrase:"Beating Around the Bush"},
             {phrase:"Back to Square One"}  
         ]
         return storedPhrases;
       }
    

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
          const thisPhrase = randomPhrase.phrase
          this.activePhrase = thisPhrase;
          thisPhrase.addPhraseToDisplay()
          
          
       }

       checkForWin(){
        let allLetters = document.getElementsByClassName('letter');
        let matchedLetters = document.getElementsByClassName('show');
        if(matchedLetters.length == allLetters.length){
         return (shownLetters.length == sumLetters.length) ? true : false;
       }
       }
       
    
        gameOver(gameWon) {
    const startScreen = document.getElementById('overlay');
    startScreen.style.display = 'block';

    const gameEndMessage = document.getElementById('game-over-message');
    const gameEndOverlay = document.getElementById('overlay');
    if (gameWon) {
      gameEndMessage.textContent = 'Good Work, You Won!';
      gameEndOverlay.classList.replace('start', 'win');
    } else {
      gameEndMessage.textContent = 'You Lost... Beter Luck Next Time!';
      gameEndOverlay.classList.replace('start', 'lose');
    }
  }

    removeLife() {
    let heart = document.getElementsByTagName('img');
    heart[this.missed].setAttribute('src', 'images/lostHeart.png');
    this.missed += 1;

    if (this.missed === 5) {
      this.gameOver();
    }
  }
       

        handleInteraction(button) {
        button.disabled = true;

        if(!this.activePhrase.checkLetter(button.textContent)) {
            button.classList.add('wrong');
            this.removeLife();
        } else {
            button.classList.add('chosen');
            
            this.activePhrase.showMatchedLetter(button.textContent);
            this.checkForWin();
        }
        
        if(this.checkForWin()) {
            this.gameOver(true);
        }
        }
}