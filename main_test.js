const { describe, it } = require('node:test');
const assert = require('assert');
const Calc = require('./Calc');

// TODO: write your tests here

describe('Test Calc', () => {
    it('Test Add', () => {
        assert.strictEqual(Calc.add(2, 3), 5);
        assert.throws(() => {Calc.add(2, '3')}, {name: 'Error', message: 'unsupported operand type'});
    });
    
});