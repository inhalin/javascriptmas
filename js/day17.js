// returns count of unique characters'
function differentSymbolsNaive(str) {
  const splitStr=str.split("");
  const result=[];
  for(let i=0;i<splitStr.length;i++){
    if(!result.includes(splitStr[i])){
      result.push(splitStr[i]);
    }
  }
  return result.length;
}

//풀이법2
function differentSymbolsNaive2(str) {
  let result = [];
  str.split('').forEach(element => {
    if(!result.includes(element)) {
      result.push(element);
    } 
  });
  return result.length;
}

function differentSymbolsNaive(str) {
  const chars = str.split('');
  
  return new Set(chars).size;
}

function init(){
  const str = 'cabca';
  const result = differentSymbolsNaive(str);
  console.log("result: ", result);  //3

  const str2 = 'aabbbcdeeeffghiijjjjk';
  const result2 = differentSymbolsNaive(str2);
  console.log("result2: ", result2);  //11
}
  
init();