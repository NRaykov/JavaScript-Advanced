// Class style functions

class Dog {
    constructor() {
        this.sound = 'Snoop'
    }

    talk() {
        return console.log(this.sound);
    }
}

const sniffles = new Dog();
sniffles.talk(); // this refers to sniffles


window.addEventListener('load', () => {
    $('button').click(()=> {
        alert(sniffles.talk); // undifined
    });
});

//********************** Refactor Dog to Factory Function ****************


//It's also known as 'Module Revealing Pattern'
const dog = () => {
    const sound = 'Snoop'; // sound is protected (we don't have access outside the dog class)

    return {
        talk: () => console.log(sound)
    }
};

const sayWhat = dog();
sayWhat.talk();
