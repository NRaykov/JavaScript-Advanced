const vehicle = (function () {
    const vehicle = {};
    
    vehicle.init = function (model) {
        this.model = model;
        return this;
        
    };


    vehicle.move = function () {
        return this.model + "... is moving";
    };

    return vehicle;
})();

let someVehicle = Object.create(vehicle).init('BMW');

console.log(someVehicle);


const car = (function(parent) {
    const car = Object.create(parent);

    return car;
})(vehicle);


let someCar = Object.create(car).init('Audi');

console.log(someCar.move());

for (let key in someCar) {
    console.log(key);
}
