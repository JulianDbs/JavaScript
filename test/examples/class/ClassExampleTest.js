import {ClassExample} from '../../../examples/class/ClassExample.js';

import test from '../../../node_modules/unit.js/src/index.js';

describe('ClassExample class test', function() {
    it('getNumber() method test', function() {
        const object = new ClassExample(5);
        test
            .number(object.getNumber());
        test
            .number(object.getNumber())
            .is(5);
    });
    it ('setNumber() method test', function() {
        const object = new ClassExample(5);
        object.setNumber(1);
        test
            .number(object.getNumber())
            .is(1);
    });
    it ('setNumber() method throws error test', function() {
        const object = new ClassExample(5);
        var trigger = function() { object.setNumber('asd'); }
        test
            .exception(trigger)
            .is( new Error('Invalid Value') );

    });
});
