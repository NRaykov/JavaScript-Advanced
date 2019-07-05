/***
 Inheritance is when you design your types around what they ARE,
    and composition is when you design types around what they DO.
 ***/

//INHERITANCE
//Character -> Human -> Sam
//Character -> Robot -> x73

const Character = {

    talk: function (...msg) {
        console.log(msg.join(' '));
    }
};

//Prototype inheritance 'Character is prototype (parent object)
const Human = Object.create(Character, {
    speed: {
        value: 50
    },
    name: {
        value: 'Hektor'
    }
});

Human.walk = function () {
    this.talk(this.name, 'Walking');
};
Human.eat = function () {
    this.talk(this.name, 'Eating')
};


//// Robot Object

const Robot = Object.create(Character, {
    speed: {
        value: 80
    },
    id: {
        value: 'THX1138'
    }
});
Robot.drive = function () {
    this.talk(this.id, '\u26A1', 'Driving')

};
Robot.wifi = function () {
    this.talk(this.id, '\u26A1', 'Connecting')

};


const sam = Object.create(Human, {
    name: {
        value: 'Samuel'
    }
});

sam.walk();
sam.talk('Hello from Samuel');

const x73 = Object.create(Robot, {
    id: {
        value: 'x73'
    }
});

x73.drive();
x73.wifi();

