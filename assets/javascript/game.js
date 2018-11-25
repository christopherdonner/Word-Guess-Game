
var userInput
var secretWord
var wordsList=["word1","word2","word3"]

function captureInput(){
      document.onkeyup = function(event) 
        {
        // Captures the key press, converts it to lowercase, and saves it to a variable.
        var userInput = event.key.toLowerCase();
        console.log(userInput)
        }
    }
captureInput();
    
