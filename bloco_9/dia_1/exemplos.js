// const countryName = ({ name }) => console.log(`Returned country is ${name}`);
// const countryCurrency = ({ name, currency }) => console.log(`${name}'s currency is the ${currency}`);

// const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

// const printErrorMessage = (error) => console.log(`Error getting country: ${error}`);

// const getCountry = (onSuccess) => {
//   setTimeout(() => {
//     const didOperationSucceed = Math.random() >= 0.5;
//     if(didOperationSucceed) {
//       const country = {
//         name: "Brazil",
//         hdi: 0.759,
//         currency: "Real",
//       };
//       onSuccess(country);
//     }
//     else {
//       const errorMessage = "Country could not be found";
//     }
//   }, delay());
// };

// // Deve imprimir "Returned country is Brazil" no sucesso, ou "Error getting country: Country could not be found" em falha
// getCountry(countryName, printErrorMessage);

// // Deve imprimir "Brazil's currency is the Real" no sucesso, ou "Error getting country: Country could not be found" em falha
// getCountry(countryCurrency, printErrorMessage);

const jsonInfo = `{
    "muitasEmpresasUsam": [
      "Google",
      "Twitter",
      "Facebook",
      "etc..."
    ],
    "temVariasVantagens": [
      "Legível",
      "Fácil de usar",
      "Leve",
      "Popular",
      "Versátil"
    ],
    "muitasLinguagensDaoSuporte": [
      "Python",
      "C",
      "C++",
      "Java",
      "PHP"
    ]
  }`;
  
  const usoJSONPorque = JSON.parse(jsonInfo);
  
  const corporationsList = document.getElementById('corporations-used-by');
  const advantagesList = document.getElementById('advantages');
  const languagesList = document.getElementById('languages-used-by');
  
  usoJSONPorque.muitasEmpresasUsam.map((empresa) => {
    const newLi = document.createElement('li');
    newLi.innerText = empresa;
    corporationsList.appendChild(newLi);
  });
  
  usoJSONPorque.temVariasVantagens.map((vantagens) => {
    const newLi = document.createElement('li');
    newLi.innerText = vantagens;
    advantagesList.appendChild(newLi);
  });
  
  usoJSONPorque.muitasLinguagensDaoSuporte.map((linguagens) => {
    const newLi = document.createElement('li');
    newLi.innerText = linguagens;
    languagesList.appendChild(newLi);
  });