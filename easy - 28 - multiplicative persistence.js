/*
Have the function MultiplicativePersistence(num) take the num parameter being passed which will always be a positive integer and return its multiplicative persistence which is the number of times you must multiply the digits in num until you reach a single digit. For example: if num is 39 then your program should return 3 because 3 * 9 = 27 then 2 * 7 = 14 and finally 1 * 4 = 4 and you stop at 4. 
*/

function MultiplicativePersistence(num) { 

  var mult = function(product, count){
    count = count || 0;
    if(product.toString().length === 1){
      return count; 
    } else{
      var stringNum = product.toString().split('');
      var newProd = 1;
      for(var i = 0; i < stringNum.length; i++){
        newProd *= stringNum[i];
      }
      count++;
      return mult(newProd, count);
    }
  };
  
  var result = mult(num, 0);
  return result;

}