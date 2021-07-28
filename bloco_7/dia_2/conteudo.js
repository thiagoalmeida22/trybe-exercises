// function objectFiller (object, keyd, value) {
//   object[keyd] = value;
//   return object;
// }

// let comidas = {
//   fria: 'pizza',
//   quente: 'salgado',
//   doce: 'pudim',
// };

// console.log(comidas);

// objectFiller (comidas, 'salgada', 'pipoca')

// console.log(comidas);

// const student1 = {
//   Html: 'Muito Bom',
//   Css: 'Bom',
//   JavaScript: 'Ótimo',
//   SoftSkills: 'Ótimo',
// };

// const student2 = {
//   Html: 'Bom',
//   Css: 'Ótimo',
//   JavaScript: 'Ruim',
//   SoftSkills: 'Ótimo',
//   Git: 'Bom', // chave adicionada
// };

// function showSKills (object) {
//   const keyArr = Object.keys(object);
//   for (let i = 0; i < keyArr.length; i += 1) {
//     console.log(`${keyArr[i]}, Nível: ${object[keyArr[i]]}`);
//   }
// }

// showSKills(student1);
// console.log('')
// showSKills(student2);

// const países = {
//   França: 'Paris',
//   Brasil: 'Brasília',
//   Espanha: 'Madrid',
//   Portugal: 'Lisboa',
// };
// const pairKeyValue = Object.entries(países);
// console.log(pairKeyValue);

// for(index in pairKeyValue) {
//   console.log('--------');
//   console.log('País:', pairKeyValue[index][0]);
//   console.log('Capital:', pairKeyValue[index][1]);
// };


// const person = {
//   name:'Roberto',
// };

// const lastName = {
//   lastName: 'Silva',
// };

// const newPerson = Object.assign({},person,lastName);
// newPerson.name = 'Gilberto';
// console.log(newPerson);
// console.log(person);

const top3Albums = {
  1: 'Nightfall in Middle-Earth',
  2: 'Imaginations from the Other Side',
  3: 'Somewhere Far Beyond',
};

console.log(Object.entries(top3Albums));