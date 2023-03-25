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
function calculateMortgage() {
  let percent = window.percent.value;
  let contribution = window.contribution.value;
  let amount = window.amount.value;
  let countMonths = window.countMonths.value;

  if (isNaN(percent, contribution, amount, countMonths)) {
    let result = calculateTotalMortgage(
      percent,
      contribution,
      amount,
      countMonths
    )
    let span = window.mortgageResult;
    span.textContent = result;
  } else 
    return false;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  // Контроль корректность введенных данных.
  if (percent > 0) {
    percent = +percent;
  } else if (percent != 0 || percent == 0) {
    return `“Параметр "Процентная ставка" содержит неправильное значение”.`;
  }

  if (contribution >= 0) {
    contribution = +contribution;
  } else if (contribution != 0) {
    return `“Параметр "Первоночальный взнос" содержит неправильное значение”.`;
  }

  if (amount >= 0) {
    amount = +amount;
  } else if (amount != 0) {
    return `“Параметр "Общая сумма" содержит неправильное значение”.`;
  }

  // Расчет количества месяцев, на которые оформляется ипотека.
  let currentDate = new Date(); // Дата с какого числа берется ипотеки
  countMonths = new Date(window.countMonths.value); //Дата до какого числа берется ипотека
  let payPeriod =0 - (currentDate.getFullYear() - countMonths.getFullYear()) * 12 - (currentDate.getMonth() - countMonths.getMonth());
  countMonths = payPeriod; // Количество месяцев, на которые оформляется ипотека.
  let returnAmount = amount - contribution; // Тело кредита, которое необходимо вернуть банку.
  percent = percent / 100 / 12; // Преобразование процентной ставки из годовой в месячную.
  let monthlyPay = amount * (percent + percent / ((1 + percent) ** countMonths - 1)); // Ежемесячный платеж.
  let totalAmount = monthlyPay * countMonths; // Сумма, которую придется заплатить клиенту.
  console.log(totalAmount.toFixed(2));
  return totalAmount.toFixed(2); //  Возврат результата в функцию
}

console.log(calculateTotalMortgage(0, 0, 10000, 36));
console.log(calculateTotalMortgage(15, -5, 10000, 36));
console.log(calculateTotalMortgage(15, 0, -8, 36));

console.log(calculateTotalMortgage(10, 0, 50000, 12));
console.log(calculateTotalMortgage(10, 1000, 50000, 12));
console.log(calculateTotalMortgage(10, 20000, 20000, 48));
console.log(calculateTotalMortgage(10, 0, 10000, 36));
console.log(calculateTotalMortgage(15, 0, 10000, 36));
