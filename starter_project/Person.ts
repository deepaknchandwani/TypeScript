export class Person {
    constructor(public firstName: String, public lastName: String) {

    }

    getFullName(): String {
        return this.firstName + "  " + this.lastName;
    }
}