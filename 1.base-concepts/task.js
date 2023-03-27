"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2) - 4 * a * c;
  console.log('d = ' + d);

  if (d < 0)
       arr = [];

  else if (d === 0)
        arr = [-b/(2*a)];
  else {
      arr = [(-b + Math.sqrt(d) ) / (2 * a), (-b - Math.sqrt(d) ) / (2 * a)];
  }
  return arr;
}
console.log(solveEquation(1, 5, 4));
console.log(solveEquation(1, 2, 1));
console.log(solveEquation(1, 2, 10));


"use strict";
function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (!isNaN(percent) && !isNaN(contribution) && !isNaN(amount)) {
   percent = percent / 100 / 12; // Преобразование процентной ставки из годовой в месячную.
   let returnAmount = amount - contribution; // Тело кредита, которое необходимо вернуть банку.
   let monthlyPay = returnAmount * (percent + percent / ((1 + percent) ** countMonths - 1)); // Ежемесячный платеж.
   let totalAmount = Number(monthlyPay * countMonths); // Сумма, которую необходимо вернуть.   
   return Number(totalAmount.toFixed(2));
 }
   return false;
}

console.log(calculateTotalMortgage("percent", 0, 10000, 36));
console.log(calculateTotalMortgage(15, "contribution", 10000, 36));
console.log(calculateTotalMortgage(15, 0, "amount", 36));

console.log(calculateTotalMortgage(10, 0, 50000, 12));
console.log(calculateTotalMortgage(10, 1000, 50000, 12));
console.log(calculateTotalMortgage(10, 20000, 20000, 48));
console.log(calculateTotalMortgage(10, 0, 10000, 36));
console.log(calculateTotalMortgage(15, 0, 10000, 36));