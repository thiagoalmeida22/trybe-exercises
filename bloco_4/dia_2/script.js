let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

function imprimeNumber (numbers){
    for (let number of numbers){
        console.log(number);
    }
}

function somaNumber (numbers){
    let soma = 0;
    for (let number of numbers){
        soma +=number
    }
    return soma;
}

function mediaAritmeticaNumber (numbers){
    let soma = 0;
    for (let number of numbers){
        soma +=number
    }
    soma = soma/(numbers.length);
    return soma;
}

function maiorValor (numbers){
    let maior = 0;
    for (let number of numbers){
        if (number > maior)
            maior = number;
    }
    return maior;
}

function imparCounter (numbers){
    let impar = 0;
    for (let number of numbers){
        if (number % 2 !== 0){
            impar++;
        }
    }
    if (impar == 0){
        return "nenhum valor impar encontrado"
    } else {
        return impar;
    }
}

function menorValor (numbers){
    let menor = numbers[0];
    for (let number of numbers){
        if (number < menor){
            menor = number;
        }
    }
    return menor;
}

function multiplicaMaluco (numbers){
    let novo = [];
    for (let i = 0;i < numbers.length; i++){
        if (i == numbers.length-1){
            novo.push(numbers[i]*2);
        }
        else {
            novo.push(numbers[i]*numbers[i+1]);
        }
    }
    return novo;
}

imprimeNumber(numbers); //1

console.log(somaNumber(numbers)); //2

console.log(mediaAritmeticaNumber(numbers)); //3

//  ================================ Inicio do exercicio 4 =======================
if (mediaAritmeticaNumber(numbers) > 20){
    console.log("valor maior que 20");
} else {
    console.log("valor menor ou igual a 20");
}
// ================================= Fim do exercicio 4 ===========================

console.log(maiorValor(numbers)); // Exercicio 5

console.log(imparCounter(numbers)); // Exercicio 6

console.log(menorValor(numbers)); // Exercicio 7

// ================================= Inicio do exercicio 8 ==========================
let create = [];
for (let i=0;i<25;i++){
    create[i] = i+1;
}
console.log(create);
// ================================= Fim do exercicio 8 =============================

//================================== Inicio do exercicio 9 ==========================
for (let number of create){
    console.log(number/2);
}
// ================================= Fim do exercicio 9 =============================



console.log(multiplicaMaluco(numbers)); // Exercicio Bonus -- 3