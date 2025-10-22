const { type } = require("os");

class Calc {
    static add(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error('unsupported operand type');
        }
        return a + b;
    }
    
    static sub(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error('unsupported operand type');
        }
        return a - b;
    }
    
    static mul(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error('unsupported operand type');
        }
        return a * b;
    }
    
    static divInt(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error('unsupported operand type');
        }
        
        if (b === 0) {
            throw new Error('division by zero');
        }
        
        return Math.trunc(a / b);
    }
    
    static divFloat(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error('unsupported operand type');
        }

        if (b === 0) {
            throw new Error('division by zero');
        }
        
        return a / b;
    }
    
}

module.exports = Calc;