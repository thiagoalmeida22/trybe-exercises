// const numbers = [32, 15, 3, 2, -5, 56, 10];

// const bigNumber = numbers.reduce((big, current) => {
//     if (current > big) big = current;
//     return big;
// });
// console.log(bigNumber);


// EXERCICIO 1
// const assert = require('assert');

// const arrays = [
//   ['1', '2', '3'],
//   [true],
//   [4, 5, 6],
// ];

// function flatten() {
//     return arrays.reduce((acc, current) => acc.concat(current))
// }

// assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);


const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// EXERCICIO 2
// const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

// function reduceNames() {
//     return books.reduce((acc, current, index) => (index !== books.length - 1) ? acc + `${current.author.name}, ` : acc + `${current.author.name}.`, '');
// }

// assert.strictEqual(reduceNames(), expectedResult);



// EXERCICIO 3
// const expectedResult = 43;

// function averageAge() {
//   const sumAge = books.reduce((acc, current) => acc + current.releaseYear - current.author.birthYear, 0);
//   return sumAge / books.length;
// }

// assert.strictEqual(averageAge(), expectedResult);



// EXERCICIO 4
// const expectedResult = {
//     id: 1,
//     name: 'As Crônicas de Gelo e Fogo',
//     genre: 'Fantasia',
//     author: {
//       name: 'George R. R. Martin',
//       birthYear: 1948,
//     },
//     releaseYear: 1991,
//   };
  
//   function longestNamedBook() {
//     return books.reduce((acc, current) => (current.name.length > acc.name.length) ? current : acc, {name: ''})
//   }
  
//   assert.deepStrictEqual(longestNamedBook(), expectedResult);

// EXERCICIO 5
const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((acc, current) => acc += current.split('').reduce((acc1, current1) => current1.toLowerCase() === 'a' ? acc1 + 1 : acc1, 0), 0);
}

assert.deepStrictEqual(containsA(), 20);

// console.log(['A','a','n','e','m','a','r','i','e'].reduce((acc, current) => acc + 1, 0));