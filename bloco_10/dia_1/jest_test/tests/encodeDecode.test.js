const encodeDecode = require('../src/encodeDecode');

describe(`Testes para a função 'encode' e 'decode'`, () => {
    test('If they are functions', () => {
        expect(typeof encodeDecode.encode).toBe('function');
        expect(typeof encodeDecode.decode).toBe('function');
    });

    test('If the vogals are transformed correctly in encode', () => {
        expect(encodeDecode.encode('a')).toBe('1');
        expect(encodeDecode.encode('e')).toBe('2');
        expect(encodeDecode.encode('i')).toBe('3');
        expect(encodeDecode.encode('o')).toBe('4');
        expect(encodeDecode.encode('u')).toBe('5');
    });

    test('If the numbers are transformed correctly in decode', () => {
        expect(encodeDecode.decode('1')).toBe('a');
        expect(encodeDecode.decode('2')).toBe('e');
        expect(encodeDecode.decode('3')).toBe('i');
        expect(encodeDecode.decode('4')).toBe('o');
        expect(encodeDecode.decode('5')).toBe('u');
    });

    test('If the remaining letters remain unchanged in encode', () => {
        expect(encodeDecode.encode('hello')).toBe('h2ll4');
        expect(encodeDecode.encode('How are you today?')).toBe('H4w 1r2 y45 t4d1y?');
        expect(encodeDecode.encode('This is an encoding test.')).toBe('Th3s 3s 1n 2nc4d3ng t2st.');
        expect(encodeDecode.encode('go Trybe!')).toBe('g4 Tryb2!');
    });

    test('If the remaining numbers remain unchanged in decode', () => {
        expect(encodeDecode.decode('67890')).toBe('67890');
    })

    test('If the returned string has the same numbers of characters as the input string', () => {
        const toEncodeStr = 'This is an encoding test.'
        const toDecodeStr = 'H4w 1r2 y45 t4d1y?'
        expect(encodeDecode.encode(toEncodeStr).length).toBe(toEncodeStr.length);
        expect(encodeDecode.decode(toDecodeStr).length).toBe(toDecodeStr.length);
    })
});