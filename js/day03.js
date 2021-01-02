// returns largest positive integer possible for digit count

//처음 보자마자 푼 방법
//배열의 개수가 늘어나면 이 방법으로 풀기는 힘들다.
function chunkyMonkey(values, size) {
  const arr1=values.slice(0,size);
  const arr2=values.slice(size);
  const result=[arr1, arr2];

  return result;
}

//for문 사용
function chunkyMonkey2(values, size) {
  let arr = [];
  for(i=0;i<values.length;i+=size){
      const res = values.slice(i,i+size);
      arr.push(res);
  }
  return arr;
}

//given solution
function chunkyMonkey0(values, size) {
  const nested = [];
  let count = 0;
  
  while(count < values.length) {
      nested.push(values.slice(count, count += size));
  }
  
  return nested;
}

function init(){
  const values1 = ["a", "b", "c", "d"];
  const values2=[1,2,3,4,5,6,7];
  const size1 = 2;
  const size2 = 3;
  const result = chunkyMonkey(values1, size1);
  const result2 = chunkyMonkey2(values2, size2);
  const result0 = chunkyMonkey0(values1, size1);

  console.log("result: ", result);
  console.log("result2: ", result2);
  console.log("result0: ", result0);

}

init();

