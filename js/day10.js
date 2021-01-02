// returns largest product of adjacent values
function adjacentElementsProduct(nums) {
  let result=nums[0]*nums[1];
  for(let i=1;i<nums.length-1;i++){
    if(result<nums[i]*nums[i+1]){
      result=nums[i]*nums[i+1];
    }
  }
  return result;
}

function adjacentElementsProduct2(nums) {
  let multiples = [];
  for(let i=0; i<nums.length-1; i++) {
      multiples.push(nums[i]*nums[i+1]);
  }
  const max = Math.max(...multiples); // spread operator
  return max;
}

function init(){
  const nums = [7, 6, -2, 9, 7, 3];
  const result = adjacentElementsProduct(nums);
  const result2 = adjacentElementsProduct2(nums);

  console.log("day 10 result: ", result);  //expect(result).toBe(63);
  console.log("day 10 result2: ", result2);  //expect(result).toBe(63);
}

init();
