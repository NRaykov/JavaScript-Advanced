'use strict'

function two() {
    var isValid;
}

function one() {
    var isValid = true;
    two();
}

var isValid = false;
one();

//****** Scope Chain
function sayMyName() {
    var a = 'a';
    return function findName() {
        var b = 'b';
        console.log(b); // output b
        console.log(c); // Reference Error c is not defined
        return function printName() {
            var c = 'c';
            console.log(a); // output a
            return 'Max'
        }
    }
}

sayMyName()()();
