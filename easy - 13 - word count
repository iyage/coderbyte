/* Have the function WordCount(str) take the str string parameter 
being passed and return the number of words the string contains 
(ie. "Never eat shredded wheat" would return 4). Words will be 
separated by single spaces. 
*/

function WordCount(str) { 

 var array = [];
  for ( i = 0; i < str.length; i++){
   array.push(str.charAt(i)); 
  }
  
 var wordCount = 1;
  for(var j = 0; j < array.length; j++){
    if((array[j] == " ") && (array[j+1] != " ")){
      wordCount++;
    }
  }
  return wordCount; 
};
