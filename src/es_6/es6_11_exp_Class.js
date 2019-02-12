class Person {
  constructor(name) {
    this.name = name;
  }

  walk() {
    console.log("walk");
  }
}

const person = new Person("HET");
person.walk();
