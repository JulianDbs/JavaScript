export class AssignmentOperatorsExample {

    constrcutor() {}

    static aditionOperator(number) { 
        let a = 1;
        a += number;
        return a; 
    }

    static substractionOperator(number) {
        let a = number;
        a -= 1;
        return a; 
    }

    static multiplicationOperator(number) {
        let a = number;
        a *= 2;
        return a;
    }

    static divisionOperator(number) {
        let a = number;
        a /= 2;
        return a;
    }

    static modulusOperator(number) {
        let a = number;
        a %= 2;
        return a;
    }

    static exponentiationOperator(number) {
        let a = number;
        a **= 2;
        return a;
    }

    static leftShiftOperator(x, y) {
        // x * (2 ** y)
        return x <<= y;
    }

    static rightShiftOperator(x, y) {
        return x >>= y;
    }

    //TODO : >>>= and Bitwise Assignment Operators

    static logicalAndAssignment(x, y) {
        let a = x;
        a &&= y;
        return a;
    }

    static logicalOrAssignment(x, y) {
        let a = x
        a ||= y;
        return a; 
    }

    static nullishCoalescingAssignment(x, y) {
        let a = x;
        a ??= y;
        return a;
    }

}