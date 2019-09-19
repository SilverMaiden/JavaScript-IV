/*

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

class GameObject {
    //constructor
    constructor(character) {
        //attributes
        this.createdAt = character.createdAt,
        this.name = character.name,
        this.dimensions = character.dimensions
    }
    //methods
    destroy() {
        return `${this.name} was removed from the game.`
    }
}


/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

class CharacterStats extends GameObject{
    //constructor
    constructor(attributes) {
        //attributes
        super(attributes);
        this.healthPoints = attributes.healthPoints;
    }
    //methods
    takeDamage() {
        return `${this.name} took damage.`
    }

}


/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

class Humanoid extends CharacterStats{
    //constructor
    constructor(object) {
        //attributes
        super(object);
        this.team = object.team,
        this.weapons = object.weapons,
        this.language = object.language
    }
    //methods
    greet() {
        return `${this.name} offers a greeting in ${this.language}`;
    }
};



class Hero extends Humanoid{
    //constructor
    constructor(object){
        //attributes
        super(object);
        this.status = object.status;
    }
    //methods
    lightAttack(character) {
        let attackStrength = Math.ceil(Math.random() * 10);
        if (attackStrength > 2) {
            character.healthPoints -= attackStrength;
            if (character.healthPoints <= 0) {
            }
            return `${this.name} landed a successfull ${this.weapons[0]} attack on ${character.name} for ${attackStrength} damage!`;
        } else {
            return `${this.name} did not successfully land an attack.`;
        }
    };
}


class Villain extends Humanoid{
    //constructor
    constructor(object) {
        //attributes
        super(object);
        this.status = object.status;
    }
    //methods
    darkAttack(character) {
        let attackStrength = Math.ceil(Math.random() * 4);
        if (attackStrength > 3) {
            character.healthPoints -= attackStrength;
            return `${this.name} landed a successfull ${this.weapons[0]} attack on ${character.name} for ${attackStrength} damage!`;
        } else {
            return `${this.name} did not successfully land an attack.`;
        }
    }
}


/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


  const mage = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
    status: 'Villain',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
    status: 'Hero',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  console.log(mage.status); // Villain
  console.log(archer.status); // Hero
  console.log(archer.lightAttack(mage)); //
  console.log(mage.darkAttack(archer)); //
  console.log(`${mage.name} currently has ${mage.healthPoints} healthPoints.`);
  console.log(`${archer.name} currently has ${archer.healthPoints} healthPoints.`);


