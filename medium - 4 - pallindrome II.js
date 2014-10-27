/*
Have the function PalindromeTwo(str) take the str parameter being passed and return the string true if the parameter is a palindrome, (the string is the same forward as it is backward) otherwise return the string false. The parameter entered may have punctuation and symbols but they should not affect 
*/
function PalindromeTwo(str) { 

  str = str.toLowerCase().replace(/[^a-zA-Z]+/g, '');
  var rev = str.split('').reverse().join('');
  console.log(str, rev);

  if(rev == str){
    return "true";
  }
  else{
    return "false";
  }
         
}
