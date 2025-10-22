const { type } = require("os");

class Calc {
    static add(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error('unsupported operand type');
        }
        return a + b;
    }
}

module.exports = Calc;