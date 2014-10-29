/*
Have the function SimpleMode(arr) take the array of numbers stored in arr and return the number that appears most frequently (the mode). For example: if arr contains [10, 4, 5, 2, 4] the output should be 4. If there is more than one mode return the one that appeared in the array first (ie. [5, 10, 10, 6, 5] should return 5 because it appeared first). If there is no mode return -1. The array will not be empty. 
*/

function SimpleMode(arr) { 
	var numbers = {};
	var max = 0;
	var maxnum;

	for(var i = 0; i < arr.length; i++){
		if(!(arr[i] in numbers)){
			numbers[arr[i]] = 0;
		}
		numbers[arr[i]]++;
		if(numbers[arr[i]] > max){
			max = numbers[arr[i]]
			maxnum = arr[i]
		}

	}
  if(max > 1){
	return maxnum;
  }
  else{
    return -1
      }
         
}
