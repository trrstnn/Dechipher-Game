/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
     constructor(phrase){
         this.phrase = phrase.toLowerCase();
         
     }

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

    checkLetter(letter){
        if(this.phrase.includes(letter)){
            return true
        }else{
            return false
        }
    }

    showMatchedLetter(letter) {
        if(this.checkLetter(letter)){
            const matchedLetter = document.getElementsByClassName(`${letter}`);
            matchedLetter.forEach(letter => letter.classList.add('show'))
            
        }
    }


 }