/*

*/

function ArithGeoII(arr) { 
  if(checkAr(arr) == true){
    return "Arithmetic"
      }
  else if(checkGeo(arr) == true){
    return "Geometric"
      }
  else{
    return -1;
  }      
}

function checkAr(array){
  var diff = array[1] - array[0];
  for(var i = 1; i + 1 < array.length - 1; i++){
    if(array[i+1] - array[i] != diff){
      return false;
    }
  }
  return true;
}

function checkGeo(array){
  var div = array[1]/array[0];
  for(var j = 0; j + 1 < array.length; j++){
    if(array[j+1]/array[j] != div){
      return false;
    }
  }
  return true;
}
