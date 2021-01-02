// returns total of vowels(1) and consonants(2) to be added

//split(), reduce() 사용
function countVowelConsonant(str) {
  const splitStr=str.split('');
  const numbered=[];
  const reducer=(accumulator,currentValue)=>accumulator+currentValue;
  splitStr.forEach(element => {
    if(element==='a'||element==='e'||element==='i'||element==='o'||element==='u'){
      element=1;
    }else{
      element=2;
    }
    numbered.push(element);
  });
  return numbered.reduce(reducer);
}

//sum에 더해주는 방식
function countVowelConsonant2(str) {
  const splitStr=str.split('');
  const numbered=[];
  let sum=0;
  splitStr.forEach(element => {
    if(element==='a'||element==='e'||element==='i'||element==='o'||element==='u'){
      element=1;
      sum+=element;
    }else{
      element=2;
      sum+=element;
    }
    numbered.push(element);
  });
  return sum;
}

//for문 사용
function countVowelConsonant3(str) {
  str = str.split('');
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === 'a' ||
      str[i] === 'e' ||
      str[i] === 'i' ||
      str[i] === 'o' ||
      str[i] === 'u'
    ) {
      result += 1;
    } else {
      result += 2;
    }
  }
  return result;
}

//switch case 사용
function countVowelConsonant4(str) {
  const arr = str.split('');
  let arrNum = [];
  for(let i=0 ; i<arr.length ; i++) {
      switch (arr[i]) {
          case 'a' : case 'e' : case 'i' : case 'o' : case 'u' :
              arrNum.push(1);
              break;
          default :
              arrNum.push(2);
              break;
      }
  }
  const reduceArr = (accumulator, currentValue) => accumulator + currentValue;
  const sum = arrNum.reduce(reduceArr);
  return sum;
}

//given solution
function countVowelConsonant0(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const chars = str.split('');
  const total = chars.reduce((acc, char) => {
      if(vowels.includes(char)) {
          return acc + 1;
      }
      
      return acc + 2;
  }, 0);
  
  return total;
}

function init(){
  const value = 'abcde';
  const result1 = countVowelConsonant(value);
  const result2 = countVowelConsonant2(value);
  const result3 = countVowelConsonant3(value);
  const result4 = countVowelConsonant4(value);
  const result0 = countVowelConsonant0(value);
  
  console.log("result1: ", result1);
  console.log("result2: ", result2);
  console.log("result3: ", result3);
  console.log("result4: ", result4);
  console.log("result0: ", result0);
}

init();