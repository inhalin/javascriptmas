//returns ammount of total equal candy to be eaten
function candies(children, candy) {
  return Math.floor(candy/children)*children;
}

function init(){
  const children=3;
  const candy=10;
  const result=candies(children, candy);
  console.log(`result: ${result}`);
}

init();