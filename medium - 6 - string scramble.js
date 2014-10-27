/*
Have the function StringScramble(str1,str2) take both parameters being passed and return the string true if a portion of str1 characters can be rearranged to match str2, otherwise return the string false. For example: if str1 is "rkqodlw" and str2 is "world" the output should return true. Punctuation and symbols will not be entered with the parameters. 
*/

function StringScramble(str1,str2) { 

str1 = str1.toLowerCase().split('');
str2 = str2.toLowerCase().split('');
  
  var length = str1.length;
  var newarr = [];
  for(var i = 0; i < str2.length; i++){
    if(str1[str1.indexOf(str2[i])] == undefined){
      console.log(str2[i])
      return false;
    }
    else{
        delete str1[str1.indexOf(str2[i])];
    }
  }
  return true;
}
