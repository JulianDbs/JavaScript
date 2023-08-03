export class ArithmeticOperatorsExample {

    constructor() {}

    static aditionOperator(number) { return number + 1; }

    static substractionOperator(number) { return number - 1; }

    static multiplicationOperator(number) { return number * 2; }

    static exponentiationOperator(number) { return number ** 2; }

    static divisionOperator(number) { return number / 2; }

    static modulusOperator(number) { return number % 2; }

    static incrementOperator(number) {
        number++;
        return number;
    }

    static decrementOperator(number) {
        number--;
        return number; 
    }

}