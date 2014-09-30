/*
Problem: Have the function LetterCapitalize(str) take the str parameter 
being passed and capitalize the first letter of each word. Words will be 
separated by only one space. 
*/

function LetterCapitalize(str) { 


array = [];
for(var i = 0; i < str.length; i++){
	array.push(str.charAt(i));
};


for(var j = 0; j < array.length; j++){
	if (array[0] != array[0].toUpperCase()){
			array[0] = array[0].toUpperCase();
		}
	else if (array[j] == " ") {
		if(array[j+1] != array[j+1].toUpperCase()) {
			array[j+1] = array[j+1].toUpperCase();
		}
		}
}
  
str = array.join("");
return str; 
