// code to listen to the key that was inserted
document.addEventListener('keydown', function(event) {
    // Ensure that the key pressed is a letter
    if (event.key.length === 1 && event.key.match(/[a-z]/i)) {
        // event.key holds the value of the key pressed
        console.log("Last letter inserted:", event.key);

				// This is your code
				// checkLetter(event.key) - you should implement "checkLetter" later!
    }
});


const mainWord = document.getElementById("next-word").innerHTML
let currentLetter = 2
let isWordFinished = false


function checkLetter(letter){

    if (letter == mainWord[currentLetter]){
       //what should happen? we should go to the next index right?
    }
 
 }
 