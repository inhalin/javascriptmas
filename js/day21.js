// returns true if a value can be found that by adding one number from each list
function sumOfTwo(nums1, nums2, value) {
  let result="no result";
  for(let i=0;i<nums1.length;i++){
    for(let j=0;j<nums2.length; ){
      let element=parseInt(nums1[i])+parseInt(nums2[j]);
      if(element!==value){
        j++;
      }else{
        result="true";
        return result;
      }
    }
  }
  return result;
}

function sumOfTwo(nums1, nums2, value) {
  const map = {};
  
  for(let num of nums1) {
    const difference = value - num;
    map[difference] = difference;
  }
  
  for(let num of nums2) {
    if(map.hasOwnProperty(num)) {
        return true;
    }
  }
  
  return false;
}

function init(){
  const nums1 = [1, 2, 3];
  const nums2 = [10, 20, 30, 40];
  const value = 42;
  const result = sumOfTwo(nums1, nums2, value);
  console.log("result: ", result);  // true
}

init();