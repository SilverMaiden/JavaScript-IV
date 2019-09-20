// CODE here for your Lambda Classes
//

class Person {
    //constructor
    constructor(attributes) {
        //attributes
        this.name = attributes.name,
        this.location =attributes.location,
        this.age = attributes.age
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
        this.specialty = attributes.specialty,
        this.favLanguage = attributes.favLanguage,
        this.catchPhrase = attributes.catchPhrase
    };
    //methods
    demo(subject) {
        return `Today we are learning about ${subject}.`
    }

    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}`
    }
}

class Student extends Person {
    //constructor
    constructor(attributes){
        super(attributes);
        this.previousBackgroud = attributes.previousBackgroud,
        this.className = attributes.className,
        this.favSubjects = attributes.favSubjects
    }
    //methods
    //
    // listsSubjects - a method that logs out all of the student's favoriteSubjects one by one.
    listsSubjects() {
        this.favSubjects.forEach(function(element) {
            console.log(element);
        })
    };
    // PRAssignment - a method that receives a subject as an argument and logs out that the
    // student.name has submitted a PR for {subject}
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`;
    };

    //sprintChallenge - similar to PRAssignment but logs out student.name has begun sprint challenge on {subject}
    sprintChallenge(subject) {
        return `${this.name} has begun a sprint challenge on ${subject}.`;
    };
}


class ProjectManager extends Instructor{
    //constructor
    constructor(attributes) {
        //inherits from Instructor
        super(attributes);
        this.gradClassName = attributes.gradClassName,
        this.favInstructor = attributes.favInstructor
    };

    //methods
    //
    //standUp - a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }
    //debugsCode - a method that takes in a student object and a subject and logs out {name} debugs {student.name}'s code on {subject}
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}.`;
    }
}
//Instructors
const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});
const greg = new Instructor({
  name: 'Greg',
  location: 'Kansas',
  age: 32,
  favLanguage: 'Java',
  specialty: 'Back-end',
  catchPhrase: `Wait where did I put my phone`
});

//Students
const kylie = new Student({
  name: 'Kylie',
  location: 'Missouri',
  age: 324,
  favSubjects: ['Math', 'Science'],
  previousBackgroud: 'Archaeology',
  className: 'How to not give away that you\'re actually immortal - 101'

});
const maddie = new Student({
  name: 'Maddie',
  location: 'The Allegiance Ark',
  age: 15,
  favSubjects: ['English', 'Boxing'],
  previousBackgroud: 'Hiding while waiting for the world to end',
  className: 'How to be a commander at literally 15 - 103'
});

//Projectmanagers
const rumplestiltskin = new ProjectManager({
  name: 'Mr Gold',
  location: 'Storybrooke',
  age: '???',
  favLanguage: 'English',
  specialty: 'Betraying everyone at like, every turn',
  catchPhrase: `Magic always comes with a price, dearie!`,
  gradClassName: 'How to NOT betray people at every darn turn so you can actually be happy - 225',
  favInstructor: 'Himself'
});

const frred = new ProjectManager({
  name: 'Frred',
  location: 'Bedrock',
  age: 37,
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: 'No not \'Fred\`, \'Frred\', you roll the r\'s.',
  gradClassName: 'python 101',
  favInstructor: 'Fred'
});



console.log(`Fred says: ${fred.catchPhrase}`);
console.log(fred.demo("JavaScript IV"));
console.log(greg.grade(maddie, maddie.className));
console.log('Maddie\'s favorite subjects are:') + maddie.listsSubjects();
console.log(kylie.PRAssignment('Science'));
console.log(maddie.sprintChallenge('Java'));
console.log(rumplestiltskin.standUp('web24'));
console.log(frred.debugsCode(maddie, 'React'));
