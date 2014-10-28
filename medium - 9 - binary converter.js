/*
Have the function BinaryConverter(str) return the decimal form of the binary value. For example: if 101 is passed return 5, or if 1000 is passed return 8. 
*/

function BinaryConverter (str){

str = str.split("");
console.log(str);

var total = 0;
var exp;
for(var i = 0; i <= str.length; i++){
	if(str[i] == "1"){
		exp = str.length -1 - i
		console.log(exp);
		total += (Math.pow(2, exp))
	}

}
return total;
