
// Constructor Function

function fun() {
    console.log(this);
    this.name = "Sabeel";
    this.age="22"
}

// fun();


function Person(name, age) {
    
    this.name = name;
    this.age = age;
}

Person.prototype.sayHello=function () {
    console.log(`Hello from ${this.name}`);
}


const p1 = new Person("Kartik", 22);
const p2 = new Person("Monu", 21);
const p3 = new Person("Sabeel", 22);


// This keyword

// Implicit Binding
const car = {
    name: "Audi",
    price: 200000,
    getPrice: function () {
        // console.log(this);
        return this.price;
    }
}


// Explicit Binding

function fun(name,age) {
    console.log(this);
    console.log(this.m)
    console.log(name);
    console.log(age);
}

const obj = {
    l: 10,
    m: true,
    n:"Hello"
}



// fun.call(obj, 'Monu', 22);


const f = fun.bind(obj);

f("Kartik", 23);





