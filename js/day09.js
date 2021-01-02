// returns sum of all odd Fibonnci numbers

//using for statement
function sumOddFibonacciNumbers(num) {
  let n1=1;
  let n2=0;
  let next=1;
  let result=1;
  for (i=1;next<num; i++){
    next=n1+n2;
    if((n1+n2)%2!=0&&next<num){
    result+=next;
    }
    n2=n1;
    n1=next;
  }
  return result;
}

//using while statement
function sumOddFibonacciNumbers2(num) {
  let n1 = 1;
  let n2 = 1;
  let next;
  let result = n1;
  while(n2<=num) {
     if(n2<=num && n2%2===1) {
         result+=n2;
     }  
     next = n1 + n2;
     n1 = n2;
     n2 = next;
  }
  return result;
}

//given solution
function sumOddFibonacciNumbers0(num) {
  let sum = 0;
  let previous = 0; //n1
  let current = 1;  //n2
  while(current <= num) {
      if(current % 2 === 1) {
          sum += current;
      }
      const nextValue = current + previous; //next=n1+n2
      previous = current;
      current = nextValue;
  }
  return sum;
}


function init(){
  const num = 10;
  const result0 = sumOddFibonacciNumbers0(num);
  const result = sumOddFibonacciNumbers(num);
  const result1 = sumOddFibonacciNumbers2(num);
  console.log("solution result 1: ", result0);
  console.log("for result 1: ", result);
  console.log("while result 1: ", result1);

  const num2 = 1000;
  const result0_1 = sumOddFibonacciNumbers0(num2);
  const result2_1 = sumOddFibonacciNumbers(num2);
  const result3_1 = sumOddFibonacciNumbers2(num2);
  console.log("solution result 2: ", result0_1);
  console.log("for result 2: ", result2_1);
  console.log("while result 2: ", result3_1);
}

init();

