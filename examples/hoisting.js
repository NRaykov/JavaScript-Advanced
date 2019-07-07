a(); // output 'Buy!'


function a(){
    console.log('Hi!');
}


//This function will ReWrite this place of memory with first a() function
function a() {
    console.log('Bye!'); //This function will be executed first!
}

/* *** Example 2 *** */

var a = 2;
var a = 5;
console.log(a);


/* *** Example 3 *** */

var favFood = 'grapes';

var foodThoughts = function () {

    console.log(`Original Favourite Food: ${favFood}`); //because of functional scope and HOISTING 'favFood' here is UNDEFINED

    var favFood = 'sushi';
    console.log(`New Favourite Food: ${favFood}`);

};
foodThoughts();

//**************************** Explanation of Hoisting ****************************

var favFood = undefined; // Creation Phase (JS Engine)
var favFood = 'grapes'; // Execution Phase

var foodThoughts = undefined; // Creation Phase (JS Engine);

foodThoughts = function () { //Execution Phase

    //NEW FUNCTIONAL SCOPE (new Creation and Execution phases)
    var favFood = undefined; //Creation Phase;

    console.log(`Original Favourite Food: ${favFood}`); //Execution Phase favFood is still UNDEFINED

    var favFood = undefined;//Creation Phase
    favFood = 'sushi'; //Execution Phase
    console.log(`New Favourite Food: ${favFood}`); //Execution Phase

};
foodThoughts(); //Output: Undefined, New Favourite Food: sushi
