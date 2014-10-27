/*
Have the function RunLength(str) take the str parameter being passed and return a compressed version of the string using the Run-length encoding algorithm. This algorithm works by taking the occurrence of each repeating character and outputting that number along with a single character of the repeating sequence. For example: "wwwggopp" would return 3w2g1o2p. The string will not contain any numbers, punctuation, or symbols. 
*/
function RunLength(str){
	str = str.toLowerCase().split("");

	var encode = "";
	var count = 0;
	var letter;
	letter = str[0];
	for(var i = 0; i <= str.length; i++){
		console.log(letter)
		if(str[i] == letter){
			count++;
		}
		else{
			encode += count + letter;
			letter = str[i]
			count = 1;
		}
	}


return encode;
}
