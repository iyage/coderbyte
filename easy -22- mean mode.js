/*
Have the function MeanMode(arr) take the array of numbers stored in arr and return 1 if the mode equals the mean, 0 if they don't equal each other (ie. [5, 3, 3, 3, 1] should return 1 because the mode (3) equals the mean (3)). The array will not be empty, will only contain positive integers, and will not contain more than one mode. 
*/
function MeanMode(arr) { 
  var mean, mode;
  var total = 0;
  var max = 0;
  var numbers = {};

  for (var i = 0; i < arr.length; i++){
    total+=arr[i];
    if(!(arr[i] in numbers)){
     numbers[arr[i]] = 0;
   }
   numbers[arr[i]]++
   if(numbers[arr[i]] > max){
    max = arr[i]
  }
}

mean = total/arr.length;
mode = max;

if(mean == mode){
  return 1;
}
else {
  return 0;
}

}
