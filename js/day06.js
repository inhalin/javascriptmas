// sorts the strings from shortest to longest
function sortByLength(strs) {
  return strs.sort((a,b)=>a.length-b.length);
}

function init(){
  const strs = ["abc", "", "aaa", "a", "zz"];
  const result = sortByLength(strs);

  console.log("result: ", result);
}

init();