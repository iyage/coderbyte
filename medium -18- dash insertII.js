/*

*/

function DashInsertII(num) { 
	num = num.toString().split("").map(Number);
var temp = [];
	for(var i = 0; i< num.length; i++){
		if(num[i] == 0 || num[i+1] == 0){
			temp.push(num[i]);

		}
		else if((num[i] % 2 != 0) && (num[i+1] % 2 !=0)  && num[i+1] != undefined){
			temp.push(num[i]+"-");
		}
		else if((num[i] % 2 == 0) && (num[i+1] % 2 == 0) && num[i+1] != undefined){
	
			temp.push(num[i]+"*")
		}
		
		else{
			temp.push(num[i]);
		}
	}
	num = temp.join("");
	return num;
}
 
