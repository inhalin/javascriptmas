// size property
// charCodeAt()
// split()

function alphabetSubsequence(str) {

}

function alphabetSubsequence(str) {
  const chars = str.split('');
  const charCodes = chars.map((char) => char.charCodeAt(0));
  
  if(new Set(charCodes).size !== charCodes.length) {
      return false;
  }
  
  for (let i = 0; i < charCodes.length - 1; i++) {
      if(charCodes[i] > charCodes[i + 1]) {
          return false;
      }
  }
  
  return true;
}

function init(){
  // returns false when it has duplicate letters
  const str = 'effg';
  const result = alphabetSubsequence(str);
  console.log("result 1: ", result);  //false

  // returns false when NOT in ascending a - z order
  const str2 = 'cdce';
  const result2 = alphabetSubsequence(str2);
  console.log("result 2: ", result2);  //false

  // returns true when no duplicates and is ascending a - z order
  const str3 = 'ace';
  const result3 = alphabetSubsequence(str3);
  console.log("result 3: ", result3);  // true
}

init();