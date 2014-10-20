/*
Have the function ArithGeo(arr) take the array of numbers stored in arr and return the string "Arithmetic" if the sequence follows an arithmetic pattern or return "Geometric" if it follows a geometric pattern. If the sequence doesn't follow either pattern return -1. An arithmetic sequence is one where the difference between each of the numbers is consistent, where as in a geometric sequence, each term after the first is multiplied by some constant or common ratio. Arithmetic example: [2, 4, 6, 8] and Geometric example: [2, 6, 18, 54]. Negative numbers may be entered as parameters, 0 will not be entered, and no array will contain all the same elements. 
*/

function ArithGeo(arr) { 
  if(checkArith(arr) == true){
    return "Arithmetic"
  }
  else if(checkGeo(arr) == true){
    return "Geometric"
  }
  else{
    return "-1"
  }
}


function checkArith(arr){
  var remainder = [];
  var temp;
  for(var i = 0; i + 1 < arr.length; i++){
   remainder.push(arr[i+1] - arr[i]);
  }

  temp = remainder[0];
  console.log(remainder);
  for(var j = 1; j < remainder.length; j++){
    if(remainder[j] != temp){
      return false;
    }
  }
  return true;
}

      
function checkGeo(arr){
  var divisors = [];
  for(var k = 0; k + 1 < arr.length; k++){
    divisors.push(arr[k+1] / arr[k]);
  }
  for(var m = 1; m < divisors.length; m++){
    if(divisors[m] != divisors[m-1]){
      return false;
    }
  }
  return true;
}
