class Computer {

    constructor(videoCard, cpu, os, hardDrive, price) {
        this.videoCard = videoCard;
        this.cpu = cpu;
        this.os = os;
        this.hardDrive = hardDrive;
        this.price = price;

    }

    claculatePrice() {

        this.price = 1000;

        if(this.videoCard || this.cpu || this.os || this.hardDrive) {
            this.price  += 1000;
        }

        return console.log(this.price);

    }

}

class Laptop extends Computer {

    // spread operator (...args) will collect all the arguments from parent constructor
    constructor(...args){
        super(...args);
    }

}

let laptop = new Laptop('nVidia', 'Intel i7', 'Windows', 'SSD');
laptop.claculatePrice();


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
