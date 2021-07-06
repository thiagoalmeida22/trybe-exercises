// Constantes que armazenam o destino da memoria de minha pagina
const feriadoButton = document.createElement('button');
const buttonsContainer = document.getElementsByClassName('buttons-container')[0];
const holiday = document.getElementsByClassName('holiday');
const friday = document.getElementsByClassName('friday');
const sextaButton = document.createElement('button')
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;
const daysFather = document.getElementById('days');
const myTasks = document.getElementsByClassName('my-tasks')[0];

function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
createDaysOfTheWeek();
  
//1
function createdezDays() {
    for (let index = 0; index < dezDaysList.length; index += 1) {
        const dezDayListItem = document.createElement('li');
        dezDayListItem.innerHTML = dezDaysList[index];
        dezDayListItem.classList.add('day');
        if (dezDaysList[index] === 24 || dezDaysList[index] === 25 || dezDaysList[index] === 31) {
            dezDayListItem.classList.add('holiday');
        }
        if (dezDaysList[index] === 4 || dezDaysList[index] === 11 || dezDaysList[index] === 18 || dezDaysList[index] === 25) {
            dezDayListItem.classList.add('friday');
        }

        daysFather.appendChild(dezDayListItem);  
    }
}
createdezDays();

//2
function createFeriadosBtn(buttonName) {
    feriadoButton.classList.add('btn-holiday');
    feriadoButton.innerHTML = buttonName;
    buttonsContainer.appendChild(feriadoButton);
}
createFeriadosBtn('Feriados');

//3
feriadoButton.addEventListener('click', feriadosClick)
function feriadosClick() {
    if (holiday[0].style.backgroundColor == 'mediumturquoise') {
        for (let index = 0; index < holiday.length; index += 1) {
            holiday[index].style.backgroundColor = 'rgb(238,238,238)';
        }
    } else {
        for (let index = 0; index < holiday.length; index +=1) {
            holiday[index].style.backgroundColor = 'mediumturquoise';
        }
    }
}

//4
function createSextaBtn(buttonName) {
    sextaButton.classList.add('btn-holiday');
    sextaButton.innerHTML = buttonName;
    buttonsContainer.appendChild(sextaButton);
}
createSextaBtn('Sexta-feira')

//5
sextaButton.addEventListener('click', sextaClick)
function sextaClick() {
    if (friday[0].innerText === 'SEXTOU!') {
        for (let i = 0; i < dezDaysList.length; i += 1) {
            daysFather.children[i].innerHTML = dezDaysList[i];
        }
    } else {
        for (let i = 0; i < friday.length; i += 1) {
            friday[i].innerHTML = 'SEXTOU!';
        }
    }
}

//6
daysFather.addEventListener('mouseover', function(event){
    event.target.style.fontSize = '40px';
});
daysFather.addEventListener('mouseout', function(event){
    event.target.style.fontSize = '20px';
})

//7
function taskCreator (taskName) {
    let task = document.createElement('span')
    task.innerText = taskName;
    myTasks.appendChild(task);
}
taskCreator('Projeto');

//8
function colorLegend (colorName) {
    let div = document.createElement('div');
    div.classList.add('task');
    div.style.backgroundColor = colorName;
    myTasks.appendChild(div);
}
colorLegend('green');

//9
myTasks.addEventListener('click', function(event){
    if (event.target.className === 'task selected') {
        event.target.classList.remove('selected');
    } else if (event.target.className === 'task') {
        event.target.classList.add('selected');
    }
});

//10
// daysFather.addEventListener('click', function(event){
//     let taskSelected = document.getElementsByClassName('task selected');
//     if (taskSelected.length > 0) {
//         let selectedColor = taskSelected[0].style.backgroundColor;
//     }
//     if (event.target.style.color === selectedColor) {
//         event.target.style.color = 'rgb(119,119,119)';
//     } else if ((event.target.style !== selectedColor) && (taskSelected.length > 0)) {
//         event.target.style.color = selectedColor;
//     }
// });

function setDayColor() {
    let selectedTask = document.getElementsByClassName('task selected');
    let days = document.querySelector('#days');
    let taskDiv = document.querySelector('.task');
    let taskColor = taskDiv.style.backgroundColor;
    
    days.addEventListener('click', function(event){
      let eventTargetColor = event.target.style.color;
      if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
        let color = selectedTask[0].style.backgroundColor;
        event.target.style.color = color;
      } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
        event.target.style.color = 'rgb(119,119,119)';
      }
    });
  };
  
  setDayColor();
