/*
Using the JavaScript language, have the function NumberSearch(str) take the str parameter, search for all the numbers in the string, add them together, then return that final number. For example: if str is "88Hello 3World!" the output should be 91. You will have to differentiate between single digit numbers and multiple digit numbers like in the example above. So "55Hello" and "5Hello 5" should return two different answers. Each string will contain at least one letter or symbol. 
*/

function NumberAddition(str){
	str = str.split("");
	var numbers = [];
	var total = 0;
	var count = 0;
	var number = "";
	var digits = /\d+/g;

for(var i = 0; i < str.length; i++){
	if(str[i].match(digits)){
		number+= str[i];
		if(i == str.length - 1){
		numbers.push(number);
		number = "";
		}
	}
	else if(!(str[i].match(digits)) && number != ""){
		numbers.push(number);
		number = "";
	}

}

numbers = numbers.map(Number);
console.log(numbers);
for(var j = 0; j < numbers.length; j++){
	total+=numbers[j];
}

return total;

}
