/*Have the function DashInsert(num) insert dashes ('-') between each two odd 
numbers in num. For example: if num is 454793 the output should be 4547-9-3.
Don't count zero as an odd number. */

function DashInsert(num) { 
	num = num.toString().split("").map(Number);
var temp = [];
	for(var i = 0; i < num.length; i++){
		if((num[i] % 2 != 0) && (num[i+1] % 2 !=0) && (num[i+1] != undefined)){
			temp.push(num[i]+"-");
		}
		else if(num[i] == 0){
			temp.push(num[i]);
		}
		else{
			temp.push(num[i]);
		}
	}
	num = temp.join("");
	return num;
}
