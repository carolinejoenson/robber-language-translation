var swedish = document.getElementById("textareaLeft");
var robberLanguage = document.getElementById("textareaRight");

//update output every time the input changes 
swedish.addEventListener("input", setRobberLanguage);
robberLanguage.addEventListener("input", setSwedishLanguage);

//translate Swedish to robber language
function translateToRobberLanguage(){
    var swedishString = swedish.value;
    var swedishStringLength = swedishString.length;
    var robberLanguageTranslation = "";
    for (i=0; i<swedishStringLength; i++){
        const allLetters = /([a-ö])/gi; 
        const excludeVowels = /[^aeiouyåäö]/gi;
        if (allLetters.test(swedishString[i]) && excludeVowels.test(swedishString[i])){
            robberLanguageTranslation += (swedishString[i] + "o" + swedishString[i].toLowerCase());
        }
        else {
            robberLanguageTranslation += (swedishString[i]);
        }
    }
    return robberLanguageTranslation
}

//translate robber language to Swedish
function translateToSwedish(){
    var robberLanguageString = robberLanguage.value;
    var robberLanguageStringLength = robberLanguageString.length;
    var swedishTranslation = "";
    for (var i=0; i<robberLanguageStringLength; i++){
        const allLetters = /([a-ö])/gi; 
        const excludeVowels = /[^aeiouyåäö]/gi;
        const letterO = /[o]/gi;
        if (allLetters.test(robberLanguageString[i]) && excludeVowels.test(robberLanguageString[i]) && letterO.test(robberLanguageString[i+1]) && robberLanguageString[i].toLowerCase()==robberLanguageString[i+2]){
            swedishTranslation += (robberLanguageString[i]);
            i+=2;
        }
        else {
            swedishTranslation += (robberLanguageString[i]);
        }
    }
    return swedishTranslation
}

//set translation to same as output to display
function setRobberLanguage(){
    robberLanguage.value = translateToRobberLanguage();  
}

function setSwedishLanguage(){
    swedish.value = translateToSwedish();  
}