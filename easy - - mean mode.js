/*

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
