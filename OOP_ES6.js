class Computer {

    constructor(videoCard, cpu, os, hardDrive, price) {
        this.videoCard = videoCard;
        this.cpu = cpu;
        this.os = os;
        this.hardDrive = hardDrive;
        this.price = price;

    }
}

Computer.prototype.calculatePrice = (price) => {

    this.price = price;

    if(this.videoCard || this.cpu || this.os || this.hardDrive) {
        this.price  += 1000;
    }

    return console.log("This is calc price: " + this.price);
};



///Laptop Object

class Laptop extends Computer {

    // spread operator (...args) will collect all the arguments from parent constructor
    constructor(...args){
        super(...args);
    }

}

Laptop.prototype.soundCard = function(price) {
    console.log("This is whole price: " + (this.price += price));
};


let laptop = new Laptop('nVidia', 'Intel i7', 'Windows', 'SSD');

//Is not a function ??????
laptop.claculatePrice(2000);



laptop.soundCard(300);


class PC extends Computer {

    constructor(...args) {
        super(...args);
    }

}
//Create new Object
let pc = new PC('ATI', 'Intel i3', 'Linux', 'HDD');

//Add new property with prototype inheritance
pc = Object.defineProperties(Computer, {
    monitor: {
        value: (name) => {
          return alert(name);
        }
    }
});
pc.monitor('LCD');
