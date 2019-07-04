// JavaScript Engine
function jsengine(code) {
    return code.split(/\s+/);
}
jsengine('var a = 5');


//******************************* Inline caching
function findUser(user) {
    return `found ${user.firstName} ${user.lastName}`;
}

const userData = {
    firstName: 'Max',
    lastName: 'Junior'
};

findUser(userData);

//Hidden classes
function Animal(x,y) {
    this.x = x;
    this.y = y;
}

const obj1 = new Animal(1,2);
const obj2 = new Animal(4,5);

//Call stack & Memory Heap
const number = 610; //allocate memory for primitive type 'number'
const string = 'some text'; //allocate memory fot primitive type 'string'

const obj = { //allocate memory for an object ant it's values
    firtName: 'Nedyalko',
    lastName: 'Raykov'
};


//******************************* Call stack
function substact(num) {
    return num - 2;

}

function calculate() {
    const sumTotal = 4 + 5;

    return substact(sumTotal); // subtract 9 - 2 = 7
}

calculate(); // Call stack stores functions and variables


//******************************* Stack overflow

function inception() {
    inception();
}
//inception();
// VM141:1 Uncaught RangeError: Maximum call stack size exceeded


//Memory Leak
// const arr = [];
// for(let i = 5; i > 1; i++) {
//     arr.push(i-1);
// }

//Global variables
var a = 5;
var b = 7;
var c = 8;

//Event listeners can cause memory leak
var button = document.getElementById('button');
button.addEventListener('click', () => {
    //....
});

//Memory leak by setInterval
setInterval(() => {
   //.....
});


//******************************* WEB API
console.log('1');
setTimeout(() => { // this moved away from the call stack send to Web API
    console.log('2');

}, 0);

console.log('3');

//The output will be: 1,3 and 2


//******************************* Event Loop
function achieveNirvana() {
    console.log('You are enlightened');
}
function c() {
    setTimeout(achieveNirvana, 3000);
}
function b() {
    c();
}
function a() {
    b();
}

a();


