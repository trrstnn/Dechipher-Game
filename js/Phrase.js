/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */



 class Phrase {
     constructor(phrase){
         this.phrase = phrase.toLowerCase();
         
     }

/**
* Checks if passed letter is in phrase
* @param (string) letter - Letter to check
**/
checkLetter(letter){
    if(this.phrase.includes(letter)){
        return true
    }else{
        return false
    }
}
/**
* Display phrase on game board
*/

     addPhraseToDisplay(){
        const ul = document.getElementById('phrase');
        const characters = this.phrase.split('');

        characters.forEach(character => {
            let li = document.createElement('li');
            ul.append(li);

            if (character === ' ') {
                li.setAttribute('class', 'space' )

            } else {
                li.classList.add('letter', `${character}`);
                li.innerText = character;
                
            }
        });
    }


/**
* Displays passed letter on screen after a match is found
* @param (string) letter - Letter to display
*/
    showMatchedLetter(letter) {
        if(this.checkLetter(letter)){
            const matchedLetter = document.getElementsByClassName(`${letter}`);
            for (let i = 0; i < matchedLetter.length; i+=1) {
                matchedLetter[i].classList.add('show');
                
            }
            
        }
    }


 }