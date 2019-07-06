class SuperUser {

    constructor(name){
        this._name = name;
    }

    get name() {
        return this._name.toUpperCase();
    }

    //setter method allows to change property of the object external
    set name(newname) {
        return this._name = newname;
    }
}

class User extends SuperUser {

    constructor(lastName,...args) {
        super(...args);
        this.lastName = lastName;
    }

    showAlert() {
        alert('Alert')
    }
}

let user1 = new User('max');
user1.name = 'john';
console.log(user1.name);




