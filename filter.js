const numbers = [1,5,78,95,25,36,54,97];
const bigNums = numbers.filter(num => num > 30);
const tinyNums = numbers.filter(num => num < 30);
const even = numbers.filter(num => num % 2 == 0);
const odd = numbers.filter(num => num % 2 == 1);
// console.log(bigNums);
// console.log(tinyNums);
// console.log(even);
// console.log(odd);

const products = [
    {id: 1, name: 'laptop', price: 145000},
    {id: 2, name: 'mobile', price: 95000},
    {id: 3, name: 'watch', price: 25000},
    {id: 4, name: 'macBook', price: 275000},

];

const product = products.filter(p => p.price > 100000);
console.log(product);