//1
let task1 = document.querySelector('#elementoOndeVoceEsta');

//2
task1.parentNode.style.backgroundColor = 'red';

//3
task1.firstElementChild.innerText = 'Texto teste';

//4
let task4 = document.getElementById('pai').firstElementChild;

//5
let task5 = task1.previousElementSibling;

//6
let task6 = task1.nextSibling.data;

//7
let task7 = task1.nextElementSibling;

//8
let task8 = document.getElementById('pai').children[2];

// -=-=-=-=-=-=-=-=- Fim Parte 1

// -=-=-=-=-=-=-=-=- Começo Parte 2

//1
let brotherDiv = document.createElement('div');
// brotherDiv.innerText = "testão" So pra eu saber que ta sendo criado mesmo, diferençiando a nova div.
// brotherDiv.id = "lek"
task1.parentNode.appendChild(brotherDiv);

//2
let childDiv = document.createElement('div');
task1.appendChild(childDiv);

//3
let childDiv2 = document.createElement('div');
document.getElementById('primeiroFilhoDoFilho').appendChild(childDiv2);


//4
document.getElementById('primeiroFilhoDoFilho').children[0].parentNode.parentNode.parentNode.children[2];
// Chego no div de ID terceiroFilho