/*
Have the function LongestWord(sen) take the sen parameter being passed 
and return the largest word in the string. If there are two or more words 
that are the same length, return the first word from the string with 
that length. Ignore punctuation and assume sen will not be empty. 
*/

function LongestWord(sen) { 
sen = sen.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"").split(" ");
var max = "";


for(var i = 0; i < sen.length; i++){
	if(sen[i].length > max.length){
		max = sen[i];
	}
}
return max;
}
