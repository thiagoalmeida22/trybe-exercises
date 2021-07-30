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

// -=-=-=-=-==-=-=-= 1 -=-==-=-=-=-=-=-=-==-=-=-=-=-=-=
// function authorBornIn1947() {
//     return books.find((element) => element.author.birthYear === 1947).author.name;
//   }
  
// assert.strictEqual(authorBornIn1947(), 'Stephen King');
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// -=-=-=-=-==-=-=-=-= 2-=-=-=-=-= -=-=-=-=-=-=-=-=-=-=
// function smallerName() {
//     let nameBook = books[0].name;
//     // escreva aqui o seu código
//     books.forEach((livro) => {
//         if (livro.name.length < nameBook.length) nameBook = livro.name;
//     });
//     // Variável nameBook que receberá o valor do menor nome;
//     return nameBook;
//   }

// assert.strictEqual(smallerName(), 'Duna');
// -=-=-=-===-=-==-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// -=-=-=-==-=-=-= 3 -=-=-=-=-=-=-=-=-=-=-=-=
// const expectedResult = {
//     author: {
//       birthYear: 1948,
//       name: 'George R. R. Martin',
//     },
//     genre: 'Fantasia',
//     id: 1,
//     name: 'As Crônicas de Gelo e Fogo',
//     releaseYear: 1991,
//   };
  
//   function getNamedBook() {
//     return books.find((book) => book.name.length === 26);
//   }
  
//   assert.deepStrictEqual(getNamedBook(), expectedResult);
// -=-=-==-=-=-=-=-==-=-=-==-=-=-=-==-=-=-=-=-=-=-=

// =-=-=-=--=-=-=-=-=- 4 -=-=-==-=-=-=-=-=-=-=----=-=-=-=-
//   const expectedResult = [
//     {
//       id: 1,
//       name: 'As Crônicas de Gelo e Fogo',
//       genre: 'Fantasia',
//       author: { name: 'George R. R. Martin', birthYear: 1948 },
//       releaseYear: 1991,
//     },
//     {
//       id: 5,
//       name: 'A Coisa',
//       genre: 'Terror',
//       author: { name: 'Stephen King', birthYear: 1947 },
//       releaseYear: 1986,
//     },
//     {
//       id: 4,
//       name: 'Duna',
//       genre: 'Ficção Científica',
//       author: { name: 'Frank Herbert', birthYear: 1920 },
//       releaseYear: 1965,
//     },
//     {
//       id: 2,
//       name: 'O Senhor dos Anéis',
//       genre: 'Fantasia',
//       author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
//       releaseYear: 1954,
//     },
//     {
//       id: 3,
//       name: 'Fundação',
//       genre: 'Ficção Científica',
//       author: { name: 'Isaac Asimov', birthYear: 1920 },
//       releaseYear: 1951,
//     },
//     {
//       id: 6,
//       name: 'O Chamado de Cthulhu',
//       genre: 'Terror',
//       author: { name: 'H. P. Lovecraft', birthYear: 1890 },
//       releaseYear: 1928,
//     },
//   ];
  
//   function booksOrderedByReleaseYearDesc() {
//     return books.sort((ele1, ele2) => ele2.releaseYear - ele1.releaseYear);
//   }

//   assert.deepStrictEqual(booksOrderedByReleaseYearDesc(), expectedResult);
//   =-==-=-==-==-=-=-=---=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// // -=-=-=-=-=-==--=-=-= 5 -=-=-=-=-=-===--=-=-=-=-=-=
// const expectedResult = false;

// function everyoneWasBornOnSecXX() {
//     return books.every((element) => element.author.birthYear > 1900 && element.author.birthYear < 2000 );
// }

// assert.strictEqual(everyoneWasBornOnSecXX(), expectedResult);
// // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=--=-=-==-=-=--=-

// =--=-==--=--=-=-=-=--= 6 -=-==--=-=-=-=--=-=-=-=-=-
// const expectedResult = true;

// function someBookWasReleaseOnThe80s() {
//     return books.some((element) => element.releaseYear >= 1980 && element.releaseYear < 1990)
// }

// assert.strictEqual(someBookWasReleaseOnThe80s(), expectedResult);
// // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=--=-=-==-=-=--=-

// =--=-==--=--=-=-=-=--= 7 -=-==--=-=-=-=--=-=-=-=-=-
// const expectedResult = false;

// function authorUnique() {
// //   let booksCopy = Object.assign({}, books)
//   books.sort((ele1, ele2) => ele2.author.birthYear - ele1.author.birthYear);
//   for (let i = 0; i < books.length; i += 1) {
//       console.log(books[i].author.birthYear)
//       if (books[i].author.birthYear === books[i+1].author.birthYear) return false;
//   }
//   return true;
// }

// assert.strictEqual(authorUnique(), expectedResult);
// // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=--=-=-==-=-=--=-