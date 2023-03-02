var input = document.getElementById("textareaLeft");
var output = document.getElementById("textareaRight");

//update output every time the input changes 
input.addEventListener("input", setOutput);

//translate input
function translation(inputString){
    var inputString = input.value;
    var inputStringLength = inputString.length;
    var outputString = "";
    for (i=0; i<inputStringLength; i++){
        const allLetters = /([a-ö])/gi; 
        const excludeVowels = /[^aeiouyåäö]/gi;
        if (allLetters.test(inputString[i]) && excludeVowels.test(inputString[i])){
            outputString += (inputString[i] + "o" + inputString[i]);
        }
        else {
            outputString += (inputString[i]);
        }
    }
    return outputString
}

//set translated text to same as output to display
function setOutput(){
    output.value = translation();  
}