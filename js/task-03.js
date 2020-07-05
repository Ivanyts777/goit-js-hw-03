"use strict";

const findBestEmployee = function (employees) {
  const values = Object.values(employees);
  const names = Object.keys(employees);
  let maxPoints = values[0];
  let nameOfBest = names[0];

  for (let i = 0; i < values.length; i += 1) {
    if (maxPoints < values[i]) {
      maxPoints = values[i];
      nameOfBest = names[i];
    }
  }
  return nameOfBest;
};

/*
 * Викличи функції для перевірки працездатності твоєї реалізації.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux
