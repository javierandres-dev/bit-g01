//console.log('TS file works!');
var str = 'Hola';
var fn = function () { return true; };
/* DATA TYPES */
// String
var myStrVar;
myStrVar = 'a';
myStrVar = "'comment'";
myStrVar = 'World';
myStrVar = "".concat(str, ", ").concat(myStrVar, "!");
//console.log('myStrVar:', myStrVar);
// Number
var myNumVar;
myNumVar = 10;
myNumVar = 3.14;
myNumVar = 0xff;
myNumVar = 10 + 3.14 + 0xff;
//console.log('myNumVar', myNumVar);
// Boolean
var myBoolVar;
myBoolVar = true;
myBoolVar = 10 < 5;
myBoolVar = fn();
//console.log('myBoolVar', myBoolVar);
// Any
var myAnyVar;
myAnyVar = 'a';
myAnyVar = 'word';
myAnyVar = 10;
myAnyVar = true;
//console.log('myAnyVar:', myAnyVar);
// String Array
var stringArr;
stringArr = ['one', 'two', 'three'];
stringArr.push('four');
//console.log('stringArr:', stringArr);
// Number Array
var numArr;
numArr = [1, 2, 3];
numArr.push(4);
//console.log('numArr:', numArr);
// Boolean Array
var boolArr;
boolArr = [true, false];
//console.log('boolArr', boolArr);
// Any Array
var anyArr;
anyArr = [true, 'xyz', 100, {}];
//console.log('anyArr:', anyArr);
// Objects
var simpleObj = { price: 100 };
simpleObj = { price: 200 };
//console.log('simpleObj:', simpleObj);
var literalObj;
literalObj = {
    name: 'read a book',
    completed: false,
    admin: false
};
literalObj = {
    name: 'read a book',
    completed: true
};
var aProduct = {
    name: 'apple',
    price: 100,
    exists: true
};
//console.log('aProduct:', aProduct);
// Returns
function isAdmin(name) {
    /* if (name === 'pepita') {
      return true;
    } else {
      return false;
    } */
    var result;
    // operador ternario
    name === 'pepita' ? (result = true) : (result = false);
    return result;
}
var res = isAdmin('pepito');
//console.log('res:', res);
