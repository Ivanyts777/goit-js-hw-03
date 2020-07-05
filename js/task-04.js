"use strict";

const countTotalSalary = function (employees) {
  const salaries = Object.values(employees);
  console.log(salaries);
  let totalSalaries = 0;
  for (let i = 0; i < salaries[i]; i += 1) {
    totalSalaries += salaries[i];
  }
  return totalSalaries;
};

/*
 * Викличи функції для перевірки працездатності твоєї реалізації.
 */
console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  })
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  })
); // 400
