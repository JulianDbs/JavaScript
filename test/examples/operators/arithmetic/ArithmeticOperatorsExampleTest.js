import {ArithmeticOperatorsExample} from '../../../../examples/operators/arithmetic/ArithmeticOperatorsExample.js';

import test from '../../../../node_modules/unit.js/src/index.js';

describe('ArithmeticOperatorsExample test', ()=> {
    it('aditionOperator() method test', ()=> {
        test
            .number(ArithmeticOperatorsExample.aditionOperator(1))
            .is(2);
    });
    it('substractionOperator() method test', ()=> {
        test
            .number(ArithmeticOperatorsExample.substractionOperator(2))
            .is(1);
    });
    it('multiplicationOperator() method test', ()=> {
        test
            .number(ArithmeticOperatorsExample.multiplicationOperator(2))
            .is(4);
    });
    it('exponentiationOperator() method test', ()=> {
        test
            .number(ArithmeticOperatorsExample.exponentiationOperator(2))
            .is(4);
    });
    it('divisionOperator() method test', ()=> {
        test
            .number(ArithmeticOperatorsExample.divisionOperator(4))
            .is(2);
    });
    it('modulusOperator() method test', ()=> {
        test
            .number(ArithmeticOperatorsExample.modulusOperator(13))
            .is(1);
    });
    it('incrementOperator() method test', ()=> {
        test
            .number(ArithmeticOperatorsExample.incrementOperator(1))
            .is(2);
    });
    it('decrementOperator() method test', ()=> {
        test
            .number(ArithmeticOperatorsExample.decrementOperator(2))
            .is(1);
    });
});