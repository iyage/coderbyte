function BracketMatcher(str) { 
var stack = [];

  
  for(var i = 0; i < str.length; i++){
    var chr = str[i]
    
    if(chr === '('){
      stack.push(chr)
    } 
    else if(chr === ')'){
      if(stack.pop() !== '('){
        return 0;
      }
    }
  }
  
  return stack.length === 0 ? 1 : 0;
         
}
   