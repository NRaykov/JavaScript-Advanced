'use strict';

const foo = {
    a: 1,
    b: function () {
        console.log(this.a);
    }
};

function bar (a) {
    return a();
}

//bar(foo.b);

foo.b();


console.log("1"+2+3); //123 ;(
console.log(1+2+"3"); //33

