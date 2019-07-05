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

class Laptop extends Computer{

    constructor(videoCard, cpu, os, hardDrive){
        super(videoCard, cpu, os, hardDrive);
    }

}

let laptop = new Laptop('nVidia', 'Intel i7', 'Windows', 'SSD');
laptop.claculatePrice();
