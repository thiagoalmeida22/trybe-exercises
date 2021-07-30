// const name2 = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

// const convertToUpperCase = (name, index, names) => {
//   names[index] = name.toUpperCase();
// };

// name2.forEach(convertToUpperCase);
// console.log(name2); // [ 'BIANCA', 'CAMILA', 'FERNANDO', 'ANA ROBERTA' ]


// const emailListInData = [
//     'roberta@email.com',
//     'paulo@email.com',
//     'anaroberta@email.com',
//     'fabiano@email.com',
//   ];
  
//   const showEmailList = (email) => {
//     console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
//   };
  
// emailListInData.forEach((email) => showEmailList(email));

// const numbers = [19, 21, 30, 3, 45, 22, 15];

// const findDivisibleBy3And5 = (number) => number % 5 === 0 && number % 3 === 0;

// console.log(numbers.find(findDivisibleBy3And5));

// const names = ['João', 'Irene', 'Fernando', 'Maria'];

// const findNameWithFiveLetters = () => {
//   return names.find((element) => element.length === 5);
// }

// console.log(findNameWithFiveLetters());

// const musicas = [
//     { id: '31031685', title: 'Partita in C moll BWV 997' },
//     { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
//     { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
//   ]
  
//   function findMusic(id) {
//     return musicas.find((musica) => musica.id === '31031685');
//   }
  
//   console.log(findMusic('31031685'))

// const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

// const hasName = (arr, name) => {
//   return arr.some((element) => element === name );
// }

// console.log(hasName(names, 'Ana'))

// const people = [
//     { name: 'Mateus', age: 18 },
//     { name: 'José', age: 16 },
//     { name: 'Ana', age: 23 },
//     { name: 'Cláudia', age: 20 },
//     { name: 'Bruna', age: 19 },
//   ];
  
//   const verifyAges = (arr, minimumAge) => {
//     return arr.every((element) => element.age >= 18 );
//   }
  
//   console.log(verifyAges(people, 18));

// const people = [
//     { name: 'Mateus', age: 18 },
//     { name: 'José', age: 16 },
//     { name: 'Ana', age: 23 },
//     { name: 'Cláudia', age: 20 },
//     { name: 'Bruna', age: 19 },
//   ];
  
//  people.sort((element1, element2) => element2.age - element1.age);
  
// console.log(people);