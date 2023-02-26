const numbers = [2,4,6,8,10];
// const output = [];
// for(const number of numbers){
//     const doubled = number * 2;
//     output.push(doubled);
// }
// console.log(output);

// function

function getDoubles(numbers){
    const output = [];
    for(const number of numbers){
        const doubled = doubleIt(number);
        output.push(doubled);
    }
    return output;
}

function doubleItOld(num){
    return num*2;
} 

const doubleIt = num => num * 2;
const makeDouble = numbers.map(doubleIt);

const result = getDoubles(numbers);
console.log(result);
console.log(makeDouble);

// Another Example
const fiveTimes = [1,3,5,7,9].map(x => x * 5);
console.log(fiveTimes)