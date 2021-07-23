const enviar = document.getElementById('enviar');
const nomeCompleto = document.getElementById('full-name');
const email = document.getElementById('email');
const cpf = document.getElementById('cpf');
const endereco = document.getElementById('endereco');
const cidade = document.getElementById('cidade');
const estado = document.getElementById('estado');
const resumo = document.getElementById('resumo');
const cargo = document.getElementById('cargo');
const descricao = document.getElementById('descricao');
const  date = document.getElementById('datepicker');
var picker = new Pikaday({
   field: date,
   format: 'DD/MM/YYYY',
   minDate: moment().subtract(80, 'years').toDate(),
   maxDate: moment().toDate(),
   yearRange: [moment().subtract(80, 'years').year(), moment().year()],
  });

const body = document.getElementsByTagName('body')[0];
const succesDiv = document.createElement('div');
const errorDiv = document.createElement('div');

const estados = ['Acre',
    'Alagoas',
    'Amapá',
    'Amazonas',
    'Bahia',
    'Ceará',
    'Distrito Federal',
    'Espírito Santo',
    'Goiás',
    'Maranhão',
    'Mato Grosso',
    'Mato Grosso do Sul',
    'Minas Gerais',
    'Pará',
    'Paraíba',
    'Paraná',
    'Pernambuco',
    'Piauí',
    'Rio de Janeiro',
    'Rio Grande do Norte',
    'Rio Grande do Sul',
    'Rondônia',
    'Roraima',
    'Santa Catarina',
    'São Paulo',
    'Sergipe',
    'Tocantins'];

function estadosFill() {
  for (let index = 0; index < estados.length; index += 1) {
    const option = document.createElement('option');
    option.value = estados[index];
    option.innerText = estados[index];
    estado.appendChild(option);
  }
}

console.log(moment().subtract(80, 'years').toDate());
console.log(moment());
console.log(moment().year())
function validateNome (currentBoolean) {
  if (!nomeCompleto.value.length || nomeCompleto.value.length > 40) {
    const text = document.createElement('p');
    text.innerText = 'Nome invalido (Muito grande) ou nao inserido'
    errorDiv.appendChild(text);
    return false;
  } else {
    const text = document.createElement('p');
    text.innerText = nomeCompleto.value;
    succesDiv.appendChild(text);
    return currentBoolean;
  }
}

function validateEmail (currentBoolean) {
  if (!email.value.length || email.value.length > 50) {
    const text = document.createElement('p');
    text.innerText = 'E-Mail invalido (Muito grande) ou nao inserido'
    errorDiv.appendChild(text);
    return false;
  } else {
    const text = document.createElement('p');
    text.innerText = email.value;
    succesDiv.appendChild(text);
    return currentBoolean;
  }
}

function validateCPF (currentBoolean) {
  if (!cpf.value.length || cpf.value.length > 50) {
    const text = document.createElement('p');
    text.innerText = 'cpf invalido (Muito grande) ou nao inserido'
    errorDiv.appendChild(text);
    return false;
  } else {
    const text = document.createElement('p');
    text.innerText = cpf.value;
    succesDiv.appendChild(text);
    return currentBoolean;
  }
}

function validateEndereco (currentBoolean) {
  if (!endereco.value.length || endereco.value.length > 50) {
    const text = document.createElement('p');
    text.innerText = 'endereco invalido (Muito grande) ou nao inserido'
    errorDiv.appendChild(text);
    return false;
  } else {
    const text = document.createElement('p');
    text.innerText = endereco.value;
    succesDiv.appendChild(text);
    return currentBoolean;
  }
}

function validateCidade (currentBoolean) {
  if (!cidade.value.length || cidade.value.length > 50) {
    const text = document.createElement('p');
    text.innerText = 'Cidade invalida (Excedeu numero de caracteres limite) ou nao foi inserido'
    errorDiv.appendChild(text);
    return false;
  } else {
    const text = document.createElement('p');
    text.innerText = cidade.value;
    succesDiv.appendChild(text);
    return currentBoolean;
  }
}

function validateEstado (currentBoolean) {
  const estadoOption = estado.options[estado.selectedIndex];
  if (!estadoOption || estadoOption.disabled) {
    const text = document.createElement('p');
    text.innerText = 'estado nao selecionado'
    errorDiv.appendChild(text);
    return false;
  }
    const text = document.createElement('p');
    text.innerText = estadoOption.value;
    succesDiv.appendChild(text);
    return currentBoolean;
}

function validateMoradia (currentBoolean) {
  let checked = document.querySelector(`[name='moradia']:checked`);
  if(checked === null){
    const text = document.createElement('p');
    text.innerText = 'moradia nao selecionada'
    errorDiv.appendChild(text);
    return false;
  } 
  const text = document.createElement('p');
  text.innerText = checked.value;
  succesDiv.appendChild(text);
  return currentBoolean;
}

function validateCurriculo (currentBoolean) {
  if (!resumo.value.length || resumo.value.length > 1000) {
    const text = document.createElement('p');
    text.innerText =  'Resumo nao inserido, ou passou do limite de 1000 caracteres'
    errorDiv.appendChild(text);
    return false;
  } else {
    const text = document.createElement('p');
    text.innerText = resumo.value;
    succesDiv.appendChild(text);
    return currentBoolean;
  }
}

function validateCargo (currentBoolean) {
  if (!resumo.value.length || resumo.value.length > 40) {
    const text = document.createElement('p');
    text.innerText =  'Cargo nao inserido, ou passou do limite de 40 caracteres'
    errorDiv.appendChild(text);
    return false;
  } else {
    const text = document.createElement('p');
    text.innerText = cargo.value;
    succesDiv.appendChild(text);
    return currentBoolean;
  }
}

function validateDescricao (currentBoolean) {
  if (!descricao.value.length || descricao.value.length > 500) {
    const text = document.createElement('p');
    text.innerText =  'Descricao nao inserida, ou passou do limite de 500 caracteres'
    errorDiv.appendChild(text);
    return false;
  } else {
    const text = document.createElement('p');
    text.innerText = descricao.value;
    succesDiv.appendChild(text);
    return currentBoolean;
  }
}

function validateDate (currentBoolean) {
  if (date.value.length === 0) {
    alert('data nao inserida');
    return false;
  }

  // let regex = /^(1[0-2]|0[1-9])\/(3[01]|[12][0-9]|0[1-9])\/[0-9]{4}$/
  // Esse regex ja faria todo o trabalho, porem ele nao contextualizaria o erro.
  // ^(1[0-2]|0[1-9]) - (O numero ou eh composto de: '1' seguido de algum numero entre 0 e 2..... ou .....
  // '0' seguido de algum numero entre 1 e 9)

  //  (3[01]|[12][0-9]|0[1-9]) - O numero eh composto de '3' seguido de um numero entre (0 e 1) - ou seja, apenas 0 ou 1.
  //  ou: '1' ou '2' seguido de qualquer numero (0 a 9).
  //  ou '0' seguido de um numero entre 1 a 9.

  // [0-9]{4} - Qualquer numero (0 a 9) repetido 4 vezes.

  let regex = /^\d\d\d\d-\d\d-\d\d$/;
  if(!regex.test(date.value)) {
    alert('data em formato inválido');
    return false;
  }
  let dateSplit = date.value.split('/');

  if (dateSplit[0] < 0){
    alert('ano invalido')
    return false;
  }

  if (dateSplit[1] < 0 || dateSplit[1] > 12) {
    alert('mes invalido')
    return false;
  }

  if (dateSplit[2] < 0 || dateSplit[2] > 31) {
    alert('dia invalido')
    return false;
  }
  const text = document.createElement('p');
  text.innerText = date.value;
  succesDiv.appendChild(text);
  return currentBoolean;
}

enviar.addEventListener ('click', (event) => {
  event.preventDefault();
  succesDiv.innerHTML = '';
  errorDiv.innerHTML = '';
  let validAllData = true;
  validAllData = validateNome(validAllData);
  validAllData = validateEmail(validAllData);
  validAllData = validateCPF(validAllData);
  validAllData = validateEndereco(validAllData);
  validAllData = validateCidade(validAllData);
  validAllData = validateEstado(validAllData);
  validAllData = validateMoradia (validAllData);
  validAllData = validateCurriculo (validAllData);
  validAllData = validateCargo (validAllData);
  validAllData = validateDescricao (validAllData);
  validAllData = validateDate (validAllData);

  if (validAllData) {
    errorDiv.innerHTML = '';
    body.appendChild(succesDiv);
  } else {
    succesDiv.innerHTML = '';
    body.appendChild(errorDiv);
  }
});

window.onload = () => {
  estadosFill();
};
