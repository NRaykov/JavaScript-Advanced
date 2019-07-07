function Person(saying) {
    this.saying = saying;
}

Person.prototype.talk = function () {
    console.log("I say ", this.saying);
};

//Initiate and Object

//Alternative method for creating 'new' keyword
function newnew(constructor) {
    const obj = {};
    Object.setPrototypeOf(obj, constructor.prototype);
    const arrArgs = Array.prototype.slice.apply(arguments);
    constructor.apply(obj, arrArgs.slice(1));

    return obj;
}


// let crockford = new Person('SEMICOLONAS1!!!one!one');
// crockford.talk();

let crockford = newnew(Person, 'SEMICOLONAS1!!!one!one');
crockford.talk();
