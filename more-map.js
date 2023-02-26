const numbers = [12,24,48,96,120];
const divisionByTwo = numbers.map(n => n/2);
const divisionByThree = numbers.map(x => x/3);
// console.log(divisionByTwo);
// console.log(divisionByThree);

const friends = ['Tom Hanks', 'Tom Cruise','Rinku Khan','Hazrat Ali'];
const firstLetters = friends.map(friends => friends[0]);
// console.log(firstLetters);
const nameLengths = friends.map(friends => friends.length);
// console.log(nameLengths);

const products = [
    {id: 1, name: 'laptop', price: 145000},
    {id: 2, name: 'mobile', price: 95000},
    {id: 3, name: 'watch', price: 25000},
    {id: 4, name: 'macBook', price: 275000},

];

// const item = products.map(product => console.log(product.name));
const items = products.map(product => product.name);
console.log(items);