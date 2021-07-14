const bodyLocator = document.querySelector('body');
const backgroundButton = document.getElementById('backgroundButton');

window.onload= function(){
    bodyLocator.style.backgroundColor = localStorage.getItem('backgroundColor');
}

function createBtnAndInput () {
    let button = document.createElement('button');
    button.id = 'btn1';
    button.innerHTML = 'Muda a cor de fundo'
    backgroundButton.appendChild(button);
    let input = document.createElement('input');
    input.id = 'input1';
    input.innerHTML = 'Valor inicial';
    backgroundButton.appendChild(input);
}
createBtnAndInput();
const button = document.getElementById('btn1');


button.addEventListener ('click', changeBackgroundColor)

//1
function changeBackgroundColor() {
    let stringColor = document.getElementById('input1').value;
    bodyLocator.style.backgroundColor = stringColor;
    localStorage.setItem("backgroundColor", stringColor);
}


// LOCAL E SESSION STORAGE:

// HTML Web Storage provê dois objetos para armazenamento de dados no cliente: cheve-valor

// * sessionStorage - Salva os dados no navegador, ou seja assim que fechar o navegador os dados serão deletados.
// * localStorage - Salva os dados sem data de expiração . Os dados não serão removidos quando o browser for fechado.

// Os mesmo comando sao tanto pra localStorage quanto pra serverStorage

// Salvando no localStorage ===> localStorage.setItem("name", "Vincenzo [DEV]");

// Pegar valor do localStorage ===> localStorage.getItem('name');
// let usarname = localStorage.getItem('name'); // Vincenzo [DEV]

// Removendo valor do localStorage ===> localStorage.removeItem('name');

// Limpar tudo que esta é localStorage ===> localStorage.clear();

// Mudando o valor de uma chave ja existente ===> localStorage.nome_da_chave = "novo valor"; 