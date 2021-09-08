

console.log('Hello from NodeJS');

function add(x, y) {
    return x + y;
}

console.log(add(4, 5));

const arr = ["Sabeel", true, undefined, null, [1, 2]];

console.log(arr);

const obj = {
    name: "Kartik",
    sayName: function () {
        console.log(`Hello from ${this.name}`);
    }
}

console.log(obj.name);
console.log(obj.sayName());