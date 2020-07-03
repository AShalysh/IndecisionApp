class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi! I'm ${ this.name }!`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    //you can overwrite the parent method getDescription()
    getDescription() {
        let description = super.getDescription();
        if (this.hasMajor()) {
            description += `Their Major is ${this.major}.`;
        }
        return description;
    }
}

class Traveller extends Person {
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGreeting() {
        let greeting = super.getGreeting();
        if (this.homeLocation) {
            greeting += ` I'm visiting from ${this.homeLocation}.`;
        } 
        return greeting;
    }
}

const me = new Traveller('Snezhinka', 2, 'Moscow');
console.log(me.getGreeting());
console.log(me.getDescription());
//console.log(me.hasMajor());

const other = new Traveller();
console.log(other.getGreeting());
console.log(other.getDescription());
//console.log(other.hasMajor());

// '' -> false; !'' -> true, !!'' -> false, !!'Snezhok' -> true, !!undefined -> false