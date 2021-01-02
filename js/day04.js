// returns current century
function centuryFromYear(year) {
  return Math.ceil(year/100);
}

//given solution
function centuryFromYear0(year) {
  const century = year / 100;
  
  if(year % 100 === 0) {
      return century;
  }
  
  return Math.floor(century) + 1;
}

function init(){
  const year1 = 1905;
  const year2 = 2000;
  const result1 = centuryFromYear(year1);
  const result2 = centuryFromYear(year2);
  const result01 = centuryFromYear0(year1);
  const result02 = centuryFromYear0(year2);

  console.log("result 1: ", result1);
  console.log("result 2: ", result2);
  console.log("result 01: ", result01);
  console.log("result 02: ", result02);

}

init();