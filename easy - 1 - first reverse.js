/*Have the function FirstReverse(str) take the str 
parameter being passed and return the string in reversed order. */

function FirstReverse(str){
  newArray = [];
  str.split("");
  for(var i = str.length-1; i >= 0; i--){
    newArray.push(str[i])
  }
  newArray = newArray.join("").toString();
  return newArray;
}
