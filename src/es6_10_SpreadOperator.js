const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second); //same but not good way
const combined2 = [
  ...first,
  "add somthing here easy!",
  ...second,
  "also add here hihihi"
];

const clone = [...first];
console.log(first);
console.log(clone);

//also you can concat objects
const f = { name: "het" };
const s = { job: "engineer" };
const combinedFS = { ...f, ...s, location: "Germany" };
