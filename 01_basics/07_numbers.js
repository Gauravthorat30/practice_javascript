const score = 100;
const number = new Number(4000);
console.log(typeof number);
console.log(typeof score);
console.log(number);
console.log(score);
console.log(number.toFixed(1));
console.log(number.toString().length);

const otherNumber = 123.149;
console.log(otherNumber.toPrecision(4));

const hunders = 10000000;
console.log(hunders.toLocaleString('en-in'));

console.log(Math.round(4.4));
console.log(Math.ceil(4.0));
console.log(Math.min(10 , 5 , 20))

console.log(Math.floor((Math.random() * 10) + 1));

const max = 100;
const min = 50;

console.log(Math.floor((Math.random() + 1) * (max - min)))