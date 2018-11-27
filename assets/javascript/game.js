var userInput
var secretWord=[]
var word1=["m","a","r","g","e"]
var word2=["b","a","r","t"]
var word3=["h","o","m","e","r"]
var word4=["l","i","s","a"]
var word5=["m","i","l","l","h","o","u","s","e"]
var wordsList=[word1, word2, word3, word4,word5]
var gameBoardtext=document.getElementById("blankWord");
var retriesValue=document.getElementById("retries");
var currentWord
var wordPickerInt
var success=0
var retriesRemaining=10



wordPickerInt=Math.floor(Math.random() * wordsList.length);

currentWord=wordsList[wordPickerInt];

for (var j=0; j<currentWord.length; j++){
    secretWord.push("_");
    console.log(`secretWord:${secretWord}`)
}
gameBoardtext.textContent=secretWord
retriesValue.textContent=retriesRemaining
console.log(retriesRemaining)
//retriesValue.textContent=retriesRemaining

//capture keypress
      document.onkeyup = function(event) 
        {
        var userInput = event.key.toLowerCase(); // Captures the key press, converts it to lowercase, and saves it to a variable.
        console.log(userInput);

//check user input value against currentWord         
    for (var i=0; i<currentWord.length; i++){
        if (userInput===currentWord[i]){
            secretWord[i]=currentWord[i];
            gameBoardtext.textContent=secretWord;
            //success++;
        }
//check for win condition
        if (secretWord.toString()==currentWord.toString()) {
                    gameBoardtext.textContent=secretWord;
                    alert("YOU DID IT!");
                }
            
    }
        

    


    
    gameBoardtext.textContent=secretWord;
    retriesValue.textContent=retriesRemaining;
}
