const form=document.querySelector('.js-form'),
  deposit=form.querySelector('.js-deposit'),
  rate=form.querySelector('.js-rate'),
  threshold=form.querySelector('.js-threshold'),
  result=document.querySelector('.js-result');

function depositProfit(deposit, rate, threshold) {
  let sum=0;
  for (let i; deposit<threshold ;i++){
    deposit=deposit+(deposit*rate/100);
    sum++;
  }
  result.innerHTML=`${sum} years`;
}

// returns number of years it will take to hit threshold based off of deposit & rate
function handleSubmit(event){
  event.preventDefault();
  const currentDeposit=parseInt(deposit.value);
  const currentRate=parseInt(rate.value);
  const currentThreshold=parseInt(threshold.value);
  
  depositProfit(currentDeposit,currentRate,currentThreshold);
}

// given solution
// function depositProfit0(deposit, rate, threshold) {
//   let year = 0;
//   let currentAccountValue = deposit;

//   while(threshold > currentAccountValue) {
//       currentAccountValue += currentAccountValue * (rate / 100);
//       year++;
//   }
//   return year;
// }

function init(){
  form.addEventListener('submit', handleSubmit);
}

init();


