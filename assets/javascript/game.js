var userInput
var secretWord=[]
var word1=["m","a","r","g","e"]
var word2=["b","a","r","t"]
var word3=["h","o","m","e","r"]
var word4=["l","i","s","a"]
var word5=["m","i","l","l","h","o","u","s","e"]
var wordsList=[word1, word2, word3, word4,word5]
var gameBoardtext = document.getElementById("blankWord");
var currentWord=[]
var wordPickerInt
var success
var wordString="testWord"
var wordArray=[]

function arrayifyWords(){
for (i=0; i<wordString.length; i++){
    wordArray.push(wordString[i]);
}
console.log(wordArray)
}

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
            success++;
                if (success===currentWord.length){
                    alert("YOU DID IT!")
                }
            }
            //alert(`${word1[i]} is correct!`)
        }
    


    
    gameBoardtext.textContent=secretWord
    }

/*captureInput();
checkValue();
}*/