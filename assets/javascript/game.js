
var userInput
var secretWord=[]
var wordsList=[word1, word2, word3]
var word1=["t","e","s","t"]
var word2=[]
var word3=[]
var gameBoardtext = document.getElementById("blankWord");





//function captureInput(){
      document.onkeyup = function(event) 
        {
        // Captures the key press, converts it to lowercase, and saves it to a variable.
        var userInput = event.key.toLowerCase();
        console.log(userInput);
        //}
    

//function checkValue(){
    //console.log(`word1.length: ${word1.length}`);
    //console.log(word1[0]);
    for (var i=0; i<word1.length; i++){
        //console.log(word1[i]);
        if (userInput===word1[i]){
            secretWord[i]=word1[i]
            }
            //alert(`${word1[i]} is correct!`)
        }
    
        for (var j=0; j<word1.length; j++){
            secretWord.push("_")
        }

    
    gameBoardtext.textContent=secretWord
    }

/*captureInput();
checkValue();
}*/
