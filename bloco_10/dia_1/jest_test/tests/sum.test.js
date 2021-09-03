const sum = require('../src/sum');

describe('Function that sums up two numbers', () => {
    test ('If it cam sum up two numbers correctly', () => {
        expect(sum(4, 5)).toBe(9);
        expect(sum(0, 0)).toBe(0);
    });

    test('If the function throws out a error if you try to sum a string', () => {
        expect(() => { sum(4, '5') }).toThrow();
    });

    test('If the error message is: \'parameters must be numbers\'', () => {
        expect(() => { sum(4, '5') }).toThrowError(new Error('parameters must be numbers'));
    });
});