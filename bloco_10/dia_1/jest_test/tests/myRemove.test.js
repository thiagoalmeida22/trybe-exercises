const myRemove = require('../src/myRemove');

describe(`A função myRemove\(arr, item\) recebe um array arr 
e retorna uma cópia desse array sem o elemento item caso ele exista no array`, () => {
    test(`Passado o parâmetro ([1, 2, 3, 4], 3) espera-se o 
    retorno de um array[1, 2, 4]`, () => {
        expect(myRemove([1, 2, 3, 4], 3)).toStrictEqual([1, 2, 4]);
    });

    test(`Passado o parâmetro ([1, 2, 3, 4], 3) NÃO espera-se o
    retorno de um array[1, 2, 3, 4]`, () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toStrictEqual([1, 2, 3, 4]);
    })

    test(`Verifica se o array original NÃO sofreu alterações`, () => {
        const myArray = [1, 2, 3, 4];
        myRemove(myArray, 3);
        expect(myArray).toStrictEqual([1, 2, 3, 4]);
    });

    test(`Passado o parâmetro ([1, 2, 3, 4], 5) espera- se nenhuma mudança`, () => {
        expect(myRemove([1, 2, 3, 4], 5)).toStrictEqual([1, 2, 3, 4]);
    });
});