// insert dashes in between chars
function insertDashes(arr){
  const result=[];
  for(let i=0;i<arr.split(' ').length;i++){
    result.push(arr.split(' ')[i].split('').join('-'));
  }
  return result.join(' ');
}

//given solution
function insertDashes0(str) {
  const words = str.split(' ');
  const dashedWords = words.map((word) => {
     const chars = word.split('');
     
     return chars.join('-'); 
  });
  
  return dashedWords.join(' ');
}

function init(){
  const value = "aba caba";
  const result = insertDashes(value);
  console.log("result: ", result);  //a-b-a c-a-b-a

  const value2 = "asss ddba cfsd faba";
  const result2 = insertDashes(value2);
  console.log("result: ", result2);  //a-s-s-s d-d-b-a c-f-s-d f-a-b-a
}

init();