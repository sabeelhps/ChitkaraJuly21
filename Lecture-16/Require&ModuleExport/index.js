
// Requiring a file
// const math = require('./math');
const { PI, square, add, magicNumber } = require('./math');


// console.log(PI);
// console.log(add(2,3));
// console.log(square(8));
// console.log(magicNumber);


const obj = {
    firstName: 'Sabeel',
    age:22
}



const { firstName:myname, age } = obj;

console.log(myname);
console.log(age);



const car = {
    name: "BMW",
    price:100000
}

const racingCar = {
    ...car,
    maxSpeed: 400,
    color:'blue'
}

console.log(racingCar);

