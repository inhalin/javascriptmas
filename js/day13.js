// returns largest positive integer possible for digit count
function extractEachKth(nums, index) {
  return nums.filter(value=> value%index!==0);
}

function init(){
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const index = 3;
  const result = extractEachKth(nums, index);
  console.log("day 13 result: ", result);

  const nums2 = [1,2,5,6,7,8,10,13,14];
  const index2 = 2;
  const result2 = extractEachKth(nums2, index2);
  console.log("day 13 result2: ", result2);
}

init();