export class Developer {
    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    get fullName() {
        let isUnknown = !this._firstName && !this._lastName;
        return isUnknown ? "Unknown" : `${this._firstName} ${this._lastName}`;
    }

}