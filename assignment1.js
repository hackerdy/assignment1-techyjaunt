// var bunny = "paul"; 
// let dog = "jack";
// const cat = "naomi";
// console.log(bunny);
// console.log(dog);
// console.log(cat);

// 2

// 1bunny - invalid(bunny1);
// _bunny - valid;
// $bunny - valid;
// -bunny - invalid(_bunny);
// @bunny - invalid(bunny);
// bunnyName - valid;

// 3

// console.log(pet);
// var pet = 'lucy';
// prints undefined

// console.log(animal);
// throws ReferenceError: cannot access 'animal' before initialization

// let animal = 'tom';

// Explanation: var variables are hoisted and initialized to undefined allowing them to be accessed 
// before the declaration line. in contrast, let variable are hoisted into the temporal dead zone (TDZ)
// without being initialized which triggers a ReferenceError when accessed before declaration;


// 4
// var cat = "naomi";
// function animalName (){
//     let dog = "jack";
//     console.log(dog);
//     console.log(cat);
// }

// animalName();

// 5

// const bunny = {
//     name: "paul",
//     age: 2,
//     isHappy: true,
// };

// console.log(bunny);

// 6

// console.log(3.14 + " is a " + typeof(3.14));
// console.log("lucy" + " is a " + typeof("lucy"));
// console.log(true + " is a " + typeof(true));
// console.log(null + " is a " + typeof(null));
// console.log(undefined + " is a " + typeof(undefined));
// console.log(Symbol('lucy'),   " is a " + typeof(Symbol('lucy')));
// console.log({name: 'lucy'},  " is a " + typeof({name: 'lucy'}));
// console.log(['Lucy', 'Tom'],  " is a " + typeof(['Lucy', 'Tom']));


// 7

// let mixedDataTypes = ['naomi', 19, true, null, undefined, {name: "destiny", age: 23}];
// console.log(mixedDataTypes);
// console.log(mixedDataTypes.length);

// 8

// function sumBunnies (){
//     let blackBunnies = 10;
//     let whiteBunnies = 20;
//     let totalBunnies = blackBunnies + whiteBunnies;
//     return totalBunnies; 

// }

// console.log(sumBunnies());

// 9

//  function sumBunnies(blackBunnies, whiteBunnies) {
//     let totalBunnies = blackBunnies + whiteBunnies;
//     return totalBunnies;
// }

// console.log(sumBunnies(10, 20));
// console.log(sumBunnies(7, 3));

// 10

// const sumBunnies = function(blackBunnies, whiteBunnies){
//     let totalBunnies = blackBunnies + whiteBunnies;
//     return totalBunnies;
// }

// console.log(sumBunnies(10, 20));
// console.log(sumBunnies(7, 3));

// const sumBunnies = (blackBunnies, whiteBunnies) => blackBunnies + whiteBunnies;


// console.log(sumBunnies(10, 20));
// console.log(sumBunnies(7, 3));

11
// (function() {
//     const blackBunnies = 10;
//     const whiteBunnies = 20;
//     const total = blackBunnies + whiteBunnies;
//     console.log(total);
// })();

// 12
// let bunnies = ['lucy', 'bugs', 'thumper', 'lola', 'peter', 'snowball'];
// bunnies.push('mario');
// bunnies.unshift('luigi');
// bunnies = bunnies.filter(bunny => bunny !== 'lucy');

// console.log(bunnies);

// 13

// const bunnies = ['lucy', 'tom', 'molly', 'bella'];
// console.log(bunnies[0]);
// console.log(bunnies[bunnies.length -1 ]);
// console.log(bunnies.indexOf('tom'));

// const bunniesCopy = [...bunnies];
// console.log(bunniesCopy);

// 14 

// for (let i = 0; 1 < bunnies.length; i++){
//     console.log(`Bunny ${bunnies[i]} is scheduled for a checkup today`);
// }

// 15

// const nestedArrays = [
//     [ 'lucy', 'tom'],
//     ['molly', 'bella'],
// ];

// console.log(nestedArrays[0][0]);
// console.log(nestedArrays[1][1]);

// for (let i = 0; 1 < nestedArrays.length; i++) {
//     for (let j = 0; j < nestedArrays[i].length; j++){
//         console.log(nestedArrays[i][j]);
//     }
// }

// 16

// let bunny = {name: "paul", age: 2, isHappy: true}
// const bunnyJSON = JSON.stringify(bunny);
// console.log(bunnyJSON);

// 17

// let bunnyJSON = '{"name":"lucy","age":3,"isHappy":true}';
// const bunny = JSON.parse(bunnyJSON);

// console.log(bunny.name);
// console.log(bunny.age);

// 18

// let bunny_age = 3;
// let dog_age = '3';
// console.log(bunny_age == dog_age);
// console.log(bunny_age === dog_age);
// console.log(bunny_age != dog_age);
// console.log(bunny_age !== dog_age);

// The == operator compares two values for equality after
// converting them to a common typeof(loose equality), 
// where as === compares both the value and the data types 
// without conversion (strict equality)

// 19

// const bunnies = ['lucy', 'tom', 'molly', 'bella'];

// const dogs = ['jack', 'naomi',];

// if (bunnies <= dogs ){
//     console.log("There are more dogs than bunnies")
// } else { console.log("There are more bunnies than dogs")}

20

let health = 'healthy';
if (health === 'healthy'){
    console.log('bunny is healthy');
} else if (health === 'sick') {
    console.log('bunny is sick');
} else { console.log('Unknown status') }

switch(health){
    case 'healthy': console.log('bunny is healthy');
    break;
    case 'sick': console.log('bunny is sick');
    break;
    default: console.log('unknown status');
}

const status = health === 'healthy' ? 'bunny is healthy' : 'bunny is not healthy';
console.log(status);

21

function checkEvenOdd(num) {
    return num % 2 === 0 ? 'even' : 'odd';
}

console.log(checkEvenOdd(4));
console.log(checkEvenOdd(7));
console.log(checkEvenOdd(0));

22

for (let i = 0; i <= 9; i++){
    console.log(`number ${i}`);
}

let i = 0;
while (i <= 9){
    console.log(`number ${i}`);
    i++;
}

23

let count = 9;
while (count >= 1){
    console.log(count);
    count--;
}

for (let j = 9; j >= 1; j--){
    console.log(j);
}

24

function sumBunnies(blackBunnies, whiteBunnies) {
    if (typeof blackBunnies !== 'number' || typeof whiteBunnies !== 'number'){
        throw new Error('Both arguments must be numbers');
    } return blackBunnies + whiteBunnies;
}
try {
    sumBunnies(10, 'twenty');
}  catch (error ) {
    console.log(error.message);
}

25 

const blackBunnies = 10;
const whiteBunnies = 5;
console.log(blackBunnies === whiteBunnies);

const total = blackBunnies + whiteBunnies;
console.log(total);

console.log(total > 12);

console.log(total > 12 ? 'yes' : 'no');