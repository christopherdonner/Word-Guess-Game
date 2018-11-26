var userInput
var secretWord=[]
var word1=["t","e","s","t"]
var word2=["c","h","r","i","s"]
var word3=["d","o","n","n","e","r"]
var wordsList=[word1, word2, word3]
var gameBoardtext = document.getElementById("blankWord");
var currentWord=[]
var wordPickerInt

wordPickerInt=Math.floor(Math.random() * wordsList.length);
console.log(wordPickerInt);
console.log(wordsList[wordPickerInt]);

currentWord=wordsList[wordPickerInt];


for (var j=0; j<currentWord.length; j++){
    secretWord.push("_")
}
gameBoardtext.textContent=secretWord

//function captureInput(){
      document.onkeyup = function(event) 
        {
        var userInput = event.key.toLowerCase(); // Captures the key press, converts it to lowercase, and saves it to a variable.
        console.log(userInput);
        //}
    

//function checkValue(){
    //console.log(`word1.length: ${word1.length}`);
    //console.log(word1[0]);
    for (var i=0; i<currentWord.length; i++){
        //console.log(word1[i]);
        if (userInput===currentWord[i]){
            secretWord[i]=currentWord[i]
            }
            //alert(`${word1[i]} is correct!`)
        }
    


    
    gameBoardtext.textContent=secretWord
    }

/*captureInput();
checkValue();
}*/