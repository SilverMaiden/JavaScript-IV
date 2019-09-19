// CODE here for your Lambda Classes
//

class Person {
    //constructor
    constructor(attributes) {
        //attributes
        this.newName = attributes.name,
        this.newAge = attributes.age,
        this.newLocation =attributes.location
    }
    //methods
    speak() {
        return `Hello my name is ${this.newName}, I am from ${this.newLocation}.`
    }
};


class Instructor extends Person {
    //constructor
    constructor(attributes){
        super(attributes);
        this.newSpecialty = attributes.specialty,
        this.newFavLanguage = attributes.favLanguage,
        this.newCatchPhrase = attributes.catchPhrase
    };
    //methods
    demo(subject) {
        return `Today we are learning about ${subject}.`
    }

    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}`
    }
}
