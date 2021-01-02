// returns original string reversed
function reverseAString(str) {
  return str.split('').reverse().join('');
}

//given solution
function reverseAString0(str) {
  // return str.split('').reverse().join('');
  let reversedStr = '';
  
  for(let i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
  }
  
  return reversedStr;
}

function init(){
  const str = 'hello';
  const result = reverseAString(str);
  const result0 = reverseAString0(str);
  
  console.log("result: ", result);
  console.log("result0: ", result0);
}

init();
