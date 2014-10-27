/*
Have the function Division(num1,num2) take both parameters being passed and return the Greatest Common Factor. That is, return the greatest number that evenly goes into both numbers with no remainder. For example: 12 and 16 both are divisible by 1, 2, and 4 so the output should be 4. The range for both parameters will be from 1 to 10^3. 
*/
function Division(num1,num2) { 

var num1f = findGCF(num1);
var num2f = findGCF(num2);
  
  var checknum;
  var length = num1f.length - 1;
  for(var i = length; i >= 0; i--){
    if(num2f[num2f.indexOf(num1f[i])] != undefined){
      return num1f[i]
    }
  }
}

function findGCF(number){
var factors = []
  for(var j = 1; j <= number; j++){
    if(number % j == 0){
      factors.push(j);
        }
  }
  console.log(factors)
return factors;
}
