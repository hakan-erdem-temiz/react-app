const person = {
  talk() {
    setTimeout(function() {
      console.log("this:", this);
    }, 1000);
    setTimeout(() => console.log("this", this), 1000);
  }
};

person.talk();

//arrow functions uses inherited this from object function
//callback function uses window this. So you should self
