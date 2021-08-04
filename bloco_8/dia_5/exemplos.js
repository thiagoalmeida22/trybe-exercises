// // Faça uma lista com as suas frutas favoritas
// const specialFruit = ['banan', 'mamao', 'granola'];

// // Faça uma lista de complementos que você gostaria de adicionar
// const additionalItens = ['chocolate', 'pacoca', 'cuscus'];

// const fruitSalad = (fruit, additional) => {
//     return [...fruit, ...additional];
// };

// console.log(fruitSalad(specialFruit, additionalItens));


// function quantosParams(...args) {
//     console.log('parâmetros:', args);
//     return `Você passou ${args.length} parâmetros para a função.`;
//   }
  
//   console.log(quantosParams(0, 1, 2)); // Você passou 3 parâmetros para a função.
//   console.log(quantosParams('string', null, [1, 2, 3], { })); // Você passou 4 parâmetros para a função.


// const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

// // saudacoes[1](saudacoes[0]); // Olá
// const [teste, alo] = saudacoes;
// alo(teste);


// let comida = 'gato';
// let animal = 'água';
// let bebida = 'arroz';

// [comida, animal, bebida] = [bebida, comida, animal]
// console.log(comida, animal, bebida); // arroz gato água


// let numerosPares = [1, 3, 5, 6, 8, 10, 12];

// [,,,, ...numerosPares] = numerosPares;
// console.log(numerosPares); // [6, 8, 10, 12];


// const teste = (year, month, day, ...time, next) => {
//     return
// }

// const getNationality = ({ firstName, nationality = 'Brazilian'}) => `${firstName} is ${nationality}`;

// const person = {
//   firstName: 'João',
//   lastName: 'Jr II',
// };

// const otherPerson = {
//   firstName: 'Ivan',
//   lastName: 'Ivanovich',
//   nationality: 'Russian',
// };

// console.log(getNationality(otherPerson)); // Ivan is Russian
// console.log(getNationality(person));

// const getPosition = (latitude, longitude) => ({
//     latitude,
//     longitude});
  
//   console.log(getPosition(-19.8157, -43.9542));