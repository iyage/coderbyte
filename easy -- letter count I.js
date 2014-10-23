/*
Have the function LetterCountI(str) take the str parameter being passed and return the first word with the greatest number of repeated letters. For example: "Today, is the greatest day ever!" should return greatest because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If there are no words with repeating letters return -1. Words will be separated by spaces. 
*/
function LetterCountI(str){
str = str.split(" ");
var max = 1;
for(var i = 0; i < str.length; i++){
	if(count(str[i]) > max){
		max = str[i];
	}
	console.log(max)
}
if(max < 2){
	return -1
}
else{
	return max;
}

}

function count(word){
	var letters = {};
	var list = [];
	var highest;
	for(var j = 0; j < word.length; j++){
		if(!(word[j] in letters)){
			letters[word[j]] = 0
		}
		letters[word[j]]++;
	}

	for(key in letters){
		list.push(letters[key]);
	}
	highest = Math.max.apply(null, list);
	console.log(highest)
	return highest;
}
