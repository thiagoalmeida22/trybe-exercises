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