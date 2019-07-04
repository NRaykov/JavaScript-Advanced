//********************* THE WRONG WAY
const animal = {
    toString: () => {
        return 'animal';
    }
};

const dog = {
    name: 'Max',
    toString: () => {
        return 'Overrides but NOT pre assign'
    }
};

dog.__proto__ = animal;
console.log(animal.toString());
console.log(dog.toString());


//********************* THE RIGHT WAY
const Animal = {
    toString: () => {
        return 'animal';
    }
};

const Dog = Object.create(Animal);
console.log(Dog.toString());

//Create new properties 1st way
Dog.name = 'MAx';
Dog.age = 23;

//Define new properties 2nd way
const Dog = Object.defineProperties(animal, {
    name: {
        value: 'MAx'
    },
    age: {
        value: 23
    }
});
