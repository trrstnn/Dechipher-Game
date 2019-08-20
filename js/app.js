/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 

let game;

const startButton = document.getElementById('btn__reset');
startButton.addEventListener('click',function(){
    console.log('app start')
    game = new Game(); 
    game.startGame();
});
const screenKeyboard = document.getElementById('qwerty');
screenKeyboard.addEventListener('click',event =>{ 
    if(event.target.className === 'key'){
        game.handleInteraction(event.target);
    }
});


