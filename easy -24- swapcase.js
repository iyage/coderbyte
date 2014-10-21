/*
Have the function MeanMode(arr) take the array of numbers stored in arr and return 1 if the mode equals the mean, 0 if they don't equal each other (ie. [5, 3, 3, 3, 1] should return 1 because the mode (3) equals the mean (3)). The array will not be empty, will only contain positive integers, and will not contain more than one mode. 
*/

function SwapCase(str) { 
  str = str.split("");
  
  for(var i = 0; i < str.length; i++){
    if (str[i] == str[i].toLowerCase()){
      str[i] = str[i].toUpperCase();
    }
    else{
      str[i] = str[i].toLowerCase();
        }
  }
  str = str.join("");
  return str; 
         
}
