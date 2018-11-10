const person = {
  name: "HET",
  walk() {
    console.log("this", this);
  }
};

const w = person.walk; //it gonna be function
w(); //this function uses window object

const w2 = person.walk.bind(person);
w2(); // this function uses person function object
