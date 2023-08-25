import {ObjectExample} from '../../../examples/object/ObjectExample.js';

import test from '../../../node_modules/unit.js/src/index.js';

describe('ObjectExample test', ()=> {
    const objectToTest = {
        name : 'Bob',
        age : 30,
        nameLength : function() {
            return this.name.length;
        }
    };
    const objectExample = new ObjectExample(objectToTest);
    it('getName() method test', ()=> {
        test
            .string(objectExample.getName())
            .isEqualTo('Bob');
    });
    it('getAge() method test', ()=> {
        test
            .number(objectExample.getAge())
            .is(30); 
    });
    it('getNameLength() method test', ()=> {
        test
            .number(objectExample.getNameLength())
            .is(3);
    });
});