const Animal = (function () {

    //Constructor
    function Animal(name, age) {

        this.name = name;
        this.age = age;

    }
    //Classic Inheritance
    Animal.prototype.toString = function () {
        return this.name + ' ' + this.age;
    };

    return Animal;

})();


const Cat = (function (parent) {

    //Constructor
    function Cat (name, age, sleep) {

        //Call basic constructor ( SAME AS constructor() {super} )
        parent.call(this, name, age, sleep);
        this.sleep = sleep;
    }

    Cat.prototype.toString = function () {
        let baseResult = parent.prototype.toString.call(this);

        return baseResult + ' ' + this.sleep;

    }
    
})(Animal);

