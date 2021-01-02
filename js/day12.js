// returns true/false for valid/invalid time
function validTime(str) {
  const hour=parseInt(str.split(':')[0]);
  const min=parseInt(str.split(':')[1]);
  if(hour<24&&hour>=0){
    if(min<60&&min>=0){
      return true;
    }else{
      return false;
    }
  }else{
    return false;
  }
}

//given solution
function validTime0(str) {
  const [hours, minutes] = str.split(':');
  
  if(parseInt(hours) > 23 || parseInt(hours) < 0) {
      return false;
  }
  if(parseInt(minutes) > 59 || parseInt(minutes) < 0) {
      return false;
  }
  return true;
}


function init(){
  const str = '13:58';
  const result = validTime(str);
  console.log("result 1: ", result);  //true

  const str2 = '25:51';
  const result2 = validTime(str2);
  console.log("result 2: ", result2);  //false

  const str3 = '02:76';
  const result3 = validTime(str3);
  console.log("result 3: ", result3);  //false
}

init();