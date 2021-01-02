// shift previous postions from the left to a smaller value or store -1
function arrayPreviousLess(nums) {
  for(let i=nums.length-1; i>-1;i--){
    if(nums[i]>nums[i-1]){
      nums.splice(i,1,nums[i-1]);
    }else{
      nums.splice(i,1,-1);
    }
  }
  return nums;
}

function arrayPreviousLess(nums) {
  const previousLess = [];
  
  for(let i = nums.length -1; i >= 0; i--) {
      for(let j = i; j >= 0; j--) {
          if(nums[i] > nums[j]) {
              previousLess.unshift(nums[j]);
              break;
          } else if (j === 0) {
              previousLess.unshift(-1);
          }
      }
  }
  
  return previousLess;
}

function init(){
  const nums = [3, 5, 2, 4, 5];
  const result = arrayPreviousLess(nums);
  console.log("result: ", result);  // [-1, 3, -1, 2, 4]
}

init();