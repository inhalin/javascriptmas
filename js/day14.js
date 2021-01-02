// returns largest difference between adjacent values
function arrayMaximalAdjacentDifference(nums) {
  let result=Math.abs(nums[0]-nums[1]);
  for(let i=1;i<nums.length-1;i++){
    if(result<Math.abs(nums[i]-nums[i+1])){
      result=Math.abs(nums[i]-nums[i+1]);
    }
  }
  return result;
}

function arrayMaximalAdjacentDifference2(nums) {
  let abs = [];
  for(let i=0; i<nums.length-1; i++) {
      abs.push(Math.abs(nums[i]-nums[i+1]));
  }
  const result = Math.max(...abs); // spread operator
  return result;
}

//given solution
function arrayMaximalAdjacentDifference0(nums) {
  let maxDifference = 0;
  for(let i = 0; i < nums.length - 1; i++) {
      const absoluteDifference = Math.abs(nums[i] - nums[i + 1]);
      if(maxDifference < absoluteDifference) {
          maxDifference = absoluteDifference;
      }
  }
  return maxDifference;
}

function init(){
  const nums = [2, 4, 1, 0];
  const result = arrayMaximalAdjacentDifference(nums);
  console.log("result 1: ", result);  //3

  const result1_1=arrayMaximalAdjacentDifference2(nums);
  console.log("result1-1 : ", result1_1);

  const nums2 = [2, 9, 1, 0];
  const result2 = arrayMaximalAdjacentDifference(nums2);
  console.log("result 2: ", result2);  //8

  const result3 = arrayMaximalAdjacentDifference2(nums2);
  console.log("result 3: ", result3);  //8
}

init();