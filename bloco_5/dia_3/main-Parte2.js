const divUm = document.getElementById('divUm');
const divDois = document.getElementById('divDois');
const divTres = document.getElementById('divTres');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');

/*
1. Copie esse arquivo e edite apenas ele;

2. Crie uma função que adicione a classe 'tech' ao elemento selecionado;
2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
com a classe 'tech';

4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
redirecione para alguma página;
4.1. Que tal redirecionar para seu portifólio?

5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
a cor do mesmo;

Segue abaixo um exemplo do uso de event.target:
*/

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

divUm.addEventListener('dblclick', resetText);
// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.


//2
const container = document.getElementsByClassName('container')[0];
container.addEventListener('dblclick', addTech)
function addTech (event) {
    removeTech(divUm);
    removeTech(divDois);
    removeTech(divTres);
    event.target.classList.add('tech');
}

//2.1
function removeTech(target) {
    target.classList.remove('tech');
}

//3
input.addEventListener('input', changeTextTech) 
function changeTextTech() {
    let text = document.getElementById("input").value;
    document.getElementsByClassName('tech')[0].innerText = text;
}

//4
myWebpage.addEventListener('dblclick', newPage)
function newPage() {
    window.open('https://github.com/thiagoalmeida22', '_blank');
}

//5
myWebpage.addEventListener('mouseenter', hoverColor)
myWebpage.addEventListener('mouseleave', normalColor)

function hoverColor(event) {
    // event.target.classList.add('color')
    event.target.style.color = 'red';
}

function normalColor(event) {
    event.target.style.color = 'white';
}
