var userInput
var secretWord=[]
var word0=["m","a","g","g","i","e"]
var word1=["m","a","r","g","e"]
var word2=["b","a","r","t"]
var word3=["h","o","m","e","r"]
var word4=["l","i","s","a"]
var word5=["m","i","l","l","h","o","u","s","e"]
var word6=["s","p","r","i","n","g","f","i","e","l","d"]
var word7=["f","l","a","n","d","e","r","s"]
var word8=["k","r","u","s","t","y"]
var word9=["w","i","g","g","u","m"]
var wordsList=[word0, word1, word2, word3, word4,word5,word6, word7, word8, word9]
var gameBoardtext=document.getElementById("blankWord");
var retriesValue=document.getElementById("retries");
var alreadyTriedText=document.getElementById("alreadyTried");
var currentWord
var wordPickerInt
var success=0
var retriesRemaining=10
var alreadyTried=[]

function pickWord(){
    //pick random word from wordsList array
    wordPickerInt=Math.floor(Math.random() * wordsList.length);
    currentWord=wordsList[wordPickerInt]; //set as currentWord
    console.log(currentWord)
    }
    
    function blankBoard(){
    //blank out game board
    for (var j=0; j<currentWord.length; j++){
        secretWord.push("_");
        console.log(`secretWord:${secretWord}`)
        }
    }

function resetGame(){
    secretWord=[];
    wordPickerInt=0;
    retriesRemaining=10;
    alreadyTried=[];
    pickWord();
    blankBoard();
    gameBoardtext.textContent=secretWord
retriesValue.textContent=retriesRemaining
}



pickWord();
blankBoard();

//draw elements to html
gameBoardtext.textContent=secretWord
retriesValue.textContent=retriesRemaining

//capture keypress
      document.onkeyup = function(event) 
        {
        var userInput = event.key.toLowerCase(); // Captures the key press, converts it to lowercase, and saves it to a variable.
        console.log(userInput);
        alreadyTried.push(userInput);

//check user input value against currentWord         
    for (var i=0; i<currentWord.length; i++){
        if (userInput===currentWord[i]){
            secretWord[i]=currentWord[i];
            gameBoardtext.textContent=secretWord;
            success=1;
            }
        }
        if (success===0){retriesRemaining--;}
    success=0;
//check for win condition
        if (secretWord.toString()==currentWord.toString()) {
                    //gameBoardtext.textContent=secretWord;
                    alert("YOU DID IT!");
                    resetGame();
                    }
           
        if (retriesRemaining===0){
            alert("YOU LOSE!!");
            resetGame();
        }
    //if (success===FALSE){retriesRemaining--;}
    
    gameBoardtext.textContent=secretWord;
    retriesValue.textContent=retriesRemaining;
    alreadyTriedText.textContent=alreadyTried;
}