function FirstFactorial(num) { 

 var result = num;
	for(var count = num - 1; count > 0; count--) {
	result *= count;
	}
	
  return result;
         
};
