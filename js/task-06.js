"use strict";

const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроїд", price: 400, quantity: 7 },
  { name: "Захоплення", price: 1200, quantity: 2 },
];

const calculateTotalPrice = function (allProducts, productName) {
  let totalPrice;
  for (const products of allProducts) {
    if (products.name === productName) {
      totalPrice = products.price * products.quantity;
    }
  }
  return totalPrice;
};

/*
 * Викличи функції для перевірки працездатності твоєї реалізації.
 */
console.log(calculateTotalPrice(products, "Радар")); // 5200

console.log(calculateTotalPrice(products, "Дроїд")); // 2800
