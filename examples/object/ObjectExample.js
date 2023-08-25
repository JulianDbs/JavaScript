export class ObjectExample {

    constructor(object) {
        this.name = object.name;
        this.age = object.age;
        this.nameLength = object.nameLength();
    }

    getName() {return this.name;}

    getAge() {return this.age;}

    getNameLength() {return this.nameLength;}

}