// returns minimal number of jumps in between numbers
function avoidObstacles(nums) {
  for(let i=1; ;i++){
    if(nums.every(value=>value%i!=0)){
      return i;
    }
  }
}

//given solution
function avoidObstacles0(nums) {
  const largestNum = nums.sort((a, b) => a-b)[nums.length - 1];
  console.log(largestNum);
  for (let i = 1; i <= largestNum + 1; i++) {
    if(nums.every((value) => value % i !== 0)) {
        return i;
    }
  }
}

function init(){
  const nums = [5, 3, 6, 7, 9];
  const result = avoidObstacles(nums);
  console.log("day 11 result:", result);  //4

  const nums2=[7,2,8,10,11];
  const result2=avoidObstacles(nums2);
  console.log("day 11 result2:", result2);  //3

  const nums3=[1,2,3,4,5];
  const result3=avoidObstacles(nums3);
  console.log("day 11 result3:", result3);  //6
}

init();
