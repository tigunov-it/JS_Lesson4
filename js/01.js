'use strict'
//ES5
function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function () {
    this.price = this.price * 0.85;
}

const product1 = new Product("Клавиатура", "1000");
const product2 = new Product("Мышь", "500");

product1.make25PercentDiscount();

console.log(product1);
console.log(product2);
