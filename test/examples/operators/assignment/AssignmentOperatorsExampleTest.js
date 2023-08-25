import {AssignmentOperatorsExample} from '../../../../examples/operators/assignment/AssignmentOperatorsExample.js';

import test from '../../../../node_modules/unit.js/src/index.js';

describe('AssignmentOperatorsExample test', ()=> {
    it('aditionOperator() method test', ()=> {
        test
            .number(AssignmentOperatorsExample.aditionOperator(2))
            .is(3);
    });
    it('substractionOperator() method test', ()=> {
        test
            .number(AssignmentOperatorsExample.substractionOperator(3))
            .is(2);
    });
    it('multiplicationOperator() method test', ()=> {
        test
            .number(AssignmentOperatorsExample.multiplicationOperator(8))
            .is(16);
    });
    it('exponentiationOperator() method test', ()=> {
        test
            .number(AssignmentOperatorsExample.exponentiationOperator(8))
            .is(64);
    });
    it('divisionOperator() method test', ()=> {
        test
            .number(AssignmentOperatorsExample.divisionOperator(8))
            .is(4);
    });
    it('modulusOperator() method test', ()=> {
        test
            .number(AssignmentOperatorsExample.modulusOperator(23))
            .is(1);
    });
    it('leftShiftOperator() method test', ()=> {
        test
            .number(AssignmentOperatorsExample.leftShiftOperator(14, 6))
            .is(896);
    });
    it('rightShiftOperator() method test', ()=> {
        test
            .number(AssignmentOperatorsExample.rightShiftOperator(5, 2))
            .is(1);
    });
    it('logicalAndAssignment() method test', ()=> {
        test
            .number(AssignmentOperatorsExample.logicalAndAssignment(1, 2))
            .is(2);
        test
            .number(AssignmentOperatorsExample.logicalAndAssignment(0, 2))
            .is(0);
        test
            .string(AssignmentOperatorsExample.logicalAndAssignment('abc', 'abc'))
            .isEqualTo('abc');
        test
            .string(AssignmentOperatorsExample.logicalAndAssignment('', 'abc'))
            .isEqualTo('');
    });
    it('logicalOrAssignment() method test', ()=> {
        test
            .string(AssignmentOperatorsExample.logicalOrAssignment('abc','cba'))
            .isEqualTo('abc');
        test
            .string(AssignmentOperatorsExample.logicalOrAssignment('', 'cba'))
            .isEqualTo('cba');
        test
            .number(AssignmentOperatorsExample.logicalOrAssignment(5, 10))
            .is(5);
    });
    it('nullishCoalescingAssignment() method test', ()=> {
        test
            .string(AssignmentOperatorsExample.nullishCoalescingAssignment('abc', null))
            .isEqualTo('abc');
        test
            .string(AssignmentOperatorsExample.nullishCoalescingAssignment('abc', 'abc'))
            .isEqualTo('abc');
    });
});