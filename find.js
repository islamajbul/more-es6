const numbers = [1,55,5,78,95,25,36,54,97];
const number = numbers.find(n => n % 5 == 0);
const numberAll = numbers.filter(n => n % 5 == 0);
console.log(number);
console.log(numberAll);

const products = [
    {id: 1, name: 'laptop', price: 145000},
    {id: 2, name: 'mobile', price: 95000},
    {id: 3, name: 'watch', price: 25000},
    {id: 4, name: 'macBook', price: 275000},

];