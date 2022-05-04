//console.log('TS file works!');

const str = 'Hola';

const fn = () => true;

/* DATA TYPES */
// String
let myStrVar: string;
myStrVar = 'a';
myStrVar = "'comment'";
myStrVar = 'World';
myStrVar = `${str}, ${myStrVar}!`;
//console.log('myStrVar:', myStrVar);

// Number
let myNumVar: number;
myNumVar = 10;
myNumVar = 3.14;
myNumVar = 0xff;
myNumVar = 10 + 3.14 + 0xff;
//console.log('myNumVar', myNumVar);

// Boolean
let myBoolVar: boolean;
myBoolVar = true;
myBoolVar = 10 < 5;
myBoolVar = fn();
//console.log('myBoolVar', myBoolVar);

// Any
let myAnyVar: any;
myAnyVar = 'a';
myAnyVar = 'word';
myAnyVar = 10;
myAnyVar = true;
//console.log('myAnyVar:', myAnyVar);

// String Array
let stringArr: string[];
stringArr = ['one', 'two', 'three'];
stringArr.push('four');
//console.log('stringArr:', stringArr);

// Number Array
let numArr: number[];
numArr = [1, 2, 3];
numArr.push(4);
//console.log('numArr:', numArr);

// Boolean Array
let boolArr: boolean[];
boolArr = [true, false];
//console.log('boolArr', boolArr);

// Any Array
let anyArr: any[];
anyArr = [true, 'xyz', 100, {}];
//console.log('anyArr:', anyArr);

// Objects
let simpleObj = { price: 100 };
simpleObj = { price: 200 };
//console.log('simpleObj:', simpleObj);

let literalObj: {
  name: string;
  completed: boolean;
  admin?: boolean;
};

literalObj = {
  name: 'read a book',
  completed: false,
  admin: false,
};

literalObj = {
  name: 'read a book',
  completed: true,
};
//console.log('literalObj:', literalObj);

// Custom type
type Product = {
  name: string;
  price: number;
  exists: boolean;
};

let aProduct: Product = {
  name: 'apple',
  price: 100,
  exists: true,
};
//console.log('aProduct:', aProduct);

// Returns
function isAdmin(name: string): boolean {
  /* if (name === 'pepita') {
    return true;
  } else {
    return false;
  } */
  let result: boolean;
  // operador ternario
  name === 'pepita' ? (result = true) : (result = false);
  return result;
}

let res = isAdmin('pepita');
//console.log('res:', res);
res = isAdmin('pepito');
//console.log('res:', res);
