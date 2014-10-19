/*
Have the function LetterChanges(str) take the str parameter being passed 
and modify it using the following algorithm. Replace every letter in the 
string with the letter following it in the alphabet (ie. c becomes d, z becomes a). 
Then capitalize every vowel in this new string (a, e, i, o, u) and finally 
return this modified string. 
*/
function LetterChanges(str) { 
	var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", 
	"j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", 
    "u", "v", "w", "x", "y", "z"];
    var vowels = ["a", "e", "i", "o", "u"];
    str = str.split("");

    for(var i= 0; i < str.length; i++){
    	if(str[i] == "z"){
    		str[i] = alphabet[0];
    	}
    	else if(str[i] == alphabet[alphabet.indexOf(str[i])]) {
    		str[i] = alphabet[alphabet.indexOf(str[i]) + 1];
    	}
    	
    }


    for(var j = 0; j < str.length; j++){
    	if (str[j] == vowels[vowels.indexOf(str[j])]){
    		str[j] = str[j].toUpperCase();
    	}
    }

    str = str.join("");
    return str;         
}
