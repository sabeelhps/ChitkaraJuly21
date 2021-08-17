
// ES6 Class Syntax

class Car{

    constructor(name,price) {
        this.name = name;
        this.price = price;
    }

    getPrice() {
        return this.price;
    }

    // Getter 
    get getName() {
        return this.name;
    }

    // Setter Method
    set setPrice(newPrice) {
        this.price = newPrice;
    }

}



class RacingCar extends Car{


    constructor(name, price, maxSpeed, color) {
        // Calling the parent class constructor
        super(name, price);
        this.maxSpeed = maxSpeed;
        this.color = color;
    }

    getMaxSpeed() {
        return this.maxSpeed;
    }

    get getColor() {
        return this.color;
    }

    set setMaxSpeed(newSpeed) {
        this.maxSpeed = newSpeed;
    }

}


const c1 = new Car("BWM", 9999999);

const c2 = new Car("Audi", 100000000);

const r1 = new RacingCar("Ferrari", 10000, 500, "Red");