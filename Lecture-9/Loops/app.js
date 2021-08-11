

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);

// Repeats statements - Looops


// for (initialisation; condition check; updation condition) {
    
// }


// for (let i = 1; i <= 10; i++){
//     console.log(i);
// }


// const arr = ['Mango', 'Banana', 'Oranges'];

// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }


// Infinite Loop 
// for (let i = 0; i > -10; i++){
//     console.log(i);
// }

// Break Keyword

// for (let i = 1; i <= 10; i++){
//     console.log(i);
    
//     if (i === 5) {
//         break; //brings you out of the innersmost loop
//     }
    
// }

// for (let i = 1; i <= 10; i++){
    

//     if (i === 5) {
//         continue; 
//     }

//     console.log(i);
    
// }


// while loops

// let i = 100;

// while (i >= 0) {
//     console.log(i);
//     i -= 10;
// }


// for-of loops

// const fruits = ['Mango', 'Apple', 'Oranges', 'Grapes'];


// for (let fruit of fruits) {
//     console.log(fruit);
// }

// for - in loops

const car = {
    name: "Audi",
    price: 200000,
    color: ['Red', 'Black'],
    isDiscBrake:true
}

for (let i in car) {
    // console.log(car[i])
    console.log(`${i}-->${car[i]}`);
}
