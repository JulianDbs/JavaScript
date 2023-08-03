export class ClassExample {

    constructor(number) {
        this.number = number;
    }

    getNumber() {return this.number;}

    setNumber(number) {
        if (typeof number  !== 'number') throw Error("Invalid Value");
        this.number = number;
    }
}
