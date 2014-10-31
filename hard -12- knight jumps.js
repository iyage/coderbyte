/*
Have the function PrimeChecker(num) take num and return 1 if any arrangement of num comes out to be a prime number, otherwise return 0. For example: if num is 910, the output should be 1 because 910 can be arranged into 109 or 019, both of which are primes. 

*/
function KnightJumps(str) { 
var nums = str.match(/\d/g);
nums = nums.map(Number);
  var totalMoves = 0;
  var x = nums[0];
  var y = nums[1];
  console.log(x, y)
//check up move
  //check up left
if(((x-1) > 0 && (x-1) <=8) && ((y + 2) <= 8)) totalMoves++;
  //check up right
if(((x+1) <= 8 && (x+1) <=8) && ((y + 2) <= 8)) totalMoves++;
  
//check down move
  if(((x-1) > 0 && (x-1) > 0) && ((y - 2) > 0)) totalMoves++;
  if(((x+1) <= 8 && (x+1) <=8) && ((y - 2) > 0)) totalMoves++;
//check left move
if(((x-2) > 0 && (x-2) > 0) && ((y - 1) > 0)) totalMoves++;
  if(((x-2) > 0 && (x-2) > 0) && ((y + 1) <= 8)) totalMoves++;
//check right move
  if(((x+2) <=8 && (x+2) <=8) && ((y - 1) > 0)) totalMoves++;
  if(((x+2) <=8 && (x+2) <=8) && ((y + 1) <= 8)) totalMoves++;
  
  return totalMoves;
}
   
