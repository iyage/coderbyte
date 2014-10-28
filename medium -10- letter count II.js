/*
Have the function LetterCount(str) take the str parameter being passed and return the first word with the greatest number of repeated letters. For example: "Today, is the greatest day ever!" should return greatest because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If there are no words with repeating letters return -1. Words will be separated by spaces. 
*/
function LetterCount(str) { 
  str = str.toLowerCase().split(" ");
  var max = 0;
  for(var i = 0; i < str.length; i++){
    if(count(str[i]) > max){
      max = count(str[i])
      word = str[i]
    }
  }
  if(max == 1){
    return -1
  }
  else{
  return word;
}
}

function count(word){
  var letters = {};
  var highest = 0;
  word = word.split("");

  for(var j = 0; j < word.length; j++){
    if(!(word[j] in letters)){
      letters[word[j]] = 0;
    }
    letters[word[j]]++;
    if(letters[word[j]] > highest){
      highest = letters[word[j]];
    }
  }
  return highest;
}
