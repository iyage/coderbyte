/*
Have the function DivisionStringified(num1,num2) take both parameters being passed, divide num1 by num2, and return the result as a string with properly formatted commas. If an answer is only 3 digits long, return the number with no commas (ie. 2 / 3 should output "1"). For example: if num1 is 123456789 and num2 is 10000 the output should be "12,345". 
*/
function DivisionStringified(num1,num2) { 
	var div = Math.round(num1/num2).toString().split("");


for(var i = -3; div.length + i > 0; i-=4){
	div.splice(i, 0, ",");
}

div = div.join("");

return div;
}
