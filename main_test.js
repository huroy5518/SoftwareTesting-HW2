const { describe, it } = require('node:test');
const assert = require('assert');
const Calc = require('./Calc');

// TODO: write your tests here

describe('Test Calc', () => {
    it('Test Add', () => {
        assert.strictEqual(Calc.add(2, 3), 5);
        assert.throws(() => {Calc.add(2, '3')}, {name: 'Error', message: 'unsupported operand type'});
    });
    
    it('Test Sub', () => {
        assert.strictEqual(Calc.sub(3, 2), 1);
        assert.throws(() => {Calc.sub(2, '3')}, {name: 'Error', message: 'unsupported operand type'});
    })
    
    it('Test Mul', () => {
        assert.strictEqual(Calc.mul(2, 3), 6);
        assert.throws(() => {Calc.mul(2, '3')}, {name: 'Error', message: 'unsupported operand type'});
    })
    
    it('Test DivInt', () => {
        // Integer division
        assert.strictEqual(Calc.div(7, 2), 3);
        assert.throws(() => {Calc.div(2, 0)}, {name: 'Error', message: 'division by zero'});
        assert.throws(() => {Calc.div(2, '3')}, {name: 'Error', message: 'unsupported operand type'});
    })
    
    it('Test DivFloat', () => {
        // Float division
        assert.strictEqual(Calc.div(7, 2), 3.5);
        assert.throws(() => {Calc.div(2, 0)}, {name: 'Error', message: 'division by zero'});
        assert.throws(() => {Calc.div(2, '3')}, {name: 'Error', message: 'unsupported operand type'});
    })
});