/*
Have the function PrimeMover(num) return the numth prime number. The range will be from 1 to 10^4. For example: if num is 16 the output should be 53 as 53 is the 16th prime number. 
*/
function PrimeMover(num) { 
  primes = [];
    for(var i = 1; primes.length <= num ; i ++){
      if(isPrime(i)){
        primes.push(i)
          }
    }
    console.log(primes)
  return primes[primes.length - 1];
}

function isPrime(number){
  for(var j = 2; j < number; j++){
    if(number % j == 0){
      return false;
    }
  }
  return true;
}
