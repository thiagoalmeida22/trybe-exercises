//Exercicio 1
// const assert = require('assert');

// const rectangleArea = (width, height) => width * height;

// const rectangle1 = [1, 2];
// const rectangle2 = [3, 5];
// const rectangle3 = [6, 9];
// const rectangles = [rectangle1, rectangle2, rectangle3];

// rectangles.forEach((rectangle) => {
//   assert.strictEqual(rectangleArea(...rectangle), rectangle[0] * rectangle[1]); // altere a chamada da funcao rectangleArea
// });


//Exercicio 2
// const assert = require('assert');

// const sum = (...params) => params.reduce((acc, current) => acc + current, 0);

// assert.strictEqual(sum(), 0);
// assert.strictEqual(sum(1), 1);
// assert.strictEqual(sum(1, 2), 3);
// assert.strictEqual(sum(1, 2, 3), 6);
// assert.strictEqual(sum(1, 2, 3, 4), 10);


//Exercicio 3
// const assert = require('assert');

// const alex = {
//   name: 'Alex',
//   age: 26,
//   likes: ['fly fishing'],
//   nationality: 'Australian',
// };

// const gunnar = {
//   name: 'Gunnar',
//   age: 30,
//   likes: ['hiking', 'scuba diving', 'taking pictures'],
//   nationality: 'Icelandic',
// };

// // complete a assinatura da função abaixo
// const personLikes = ({name, age, likes}) => `${name} is ${age} years old and likes ${likes.join(', ')}.`;

// assert.strictEqual(personLikes(alex), 'Alex is 26 years old and likes fly fishing.');
// assert.strictEqual(personLikes(gunnar), 'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.');

//Meu teste
// const testeArr = ['bola', true, 9];
// const testeFun = (a, ...meuParam) => `${meuParam[0]} é bola, ${meuParam[1]} é true e ${meuParam[2]} é 9`

// console.log(testeFun(...testeArr));
// console.log(testeArr);
// console.log(...testeArr);

//Exercicio 4
// const assert = require('assert');

// const people = [
//   {
//     name: 'Nicole',
//     bornIn: 1992,
//     nationality: 'Australian',
//   },
//   {
//     name: 'Harry',
//     bornIn: 2008,
//     nationality: 'Australian',
//   },
//   {
//     name: 'Toby',
//     bornIn: 1901,
//     nationality: 'Australian',
//   },
//   {
//     name: 'Frida',
//     bornIn: 1960,
//     nationality: 'Dannish',
//   },
//   {
//     name: 'Fernando',
//     bornIn: 2001,
//     nationality: 'Brazilian',
//   },
// ];

// const filterPeople = (arrayOfPeople) => arrayOfPeople.filter(({bornIn, nationality}) => nationality === 'Australian' && bornIn > 1900 && bornIn <= 2000); 

// const filteredPeople = filterPeople(people);

// assert.deepStrictEqual(filteredPeople[0], { name: 'Nicole', bornIn: 1992, nationality: 'Australian' });
// assert.deepStrictEqual(filteredPeople[1], { name: 'Toby', bornIn: 1901, nationality: 'Australian' });


//Exercicio 5
// const assert = require('assert');

// const myList = [1, 2, 3, 4, 5, 6];

// const swap = ([arg1,arg2,arg3,...args]) => [arg3,arg2,arg1,...args];

// const swappedList = swap(myList);
// console.log(swappedList);
// assert.strictEqual(swappedList[0], 3);
// assert.strictEqual(swappedList[1], 2);
// assert.strictEqual(swappedList[2], 1);


// //Exercicio 6
// const assert = require('assert');

// const palio = ['Palio', 'Fiat', 2019];
// const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
// const chiron = ['Chiron', 'Bugatti', 2016];

// const toObject = ([name, brand, year]) => ({name, brand, year});

// assert.deepStrictEqual(toObject(palio), { name: 'Palio', brand: 'Fiat', year: 2019 });
// assert.deepStrictEqual(toObject(shelbyCobra), { name: 'Shelby Cobra', brand: 'Ford', year: 1963 });
// assert.deepStrictEqual(toObject(chiron), { name: 'Chiron', brand: 'Bugatti', year: 2016 });

// //Exercicio 7
// const assert = require('assert');

// const ships = [
//   {
//     name: 'Titanic',
//     length: 269.1,
//     measurementUnit: 'meters',
//   },
//   {
//     name: 'Queen Mary 2',
//     length: 1132,
//     measurementUnit: 'feet',
//   },
//   {
//     name: 'Yamato',
//     length: 256,
//     measurementUnit: 'meters',
//   },
// ];

// const shipLength = ({name, length, measurementUnit}) => `${name} is ${length} ${measurementUnit} long`

// assert.strictEqual(shipLength(ships[0]), 'Titanic is 269.1 meters long');
// assert.strictEqual(shipLength(ships[1]), 'Queen Mary 2 is 1132 feet long');
// assert.strictEqual(shipLength(ships[2]), 'Yamato is 256 meters long');

// //Exercicio 8
// const assert = require('assert');

// const greet = (person, msg = 'Hi') => `${msg} ${person}`;

// assert.strictEqual(greet('John'), 'Hi John');
// assert.strictEqual(greet('John', 'Good morning'), 'Good morning John');
// assert.strictEqual(greet('Isabela', 'Oi'), 'Oi Isabela');