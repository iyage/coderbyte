/*
Have the function CaesarCipher(str,num) take the str parameter and perform a Caesar Cipher shift on it using the num parameter as the shifting number. A Caesar Cipher works by shifting each letter in the string N places down in the alphabet (in this case N will be num). Punctuation, spaces, and capitalization should remain intact. For example if the string is "Caesar Cipher" and num is 2 the output should be "Ecguct Ekrjgt".
*/
function CaesarCipher(str,num) { 

var alphalow = ["a", "b", "c", "d", "e", "f", "g", "h", "i", 
	"j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", 
    "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", 
	"j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", 
    "u", "v", "w", "x", "y", "z"];
var alphacap = alphalow.join("").toUpperCase().split('');


str = str.split('');

for(var i = 0; i < str.length; i++){
	if(str[i].match(/\w/)){
		if(str[i] === str[i].toLowerCase()){
			str[i] = alphalow[alphalow.indexOf(str[i]) + num];
		}
		else{
			str[i] = alphacap[alphacap.indexOf(str[i]) + num];
		}
	}
}
str = str.join("");
return str;  
}
