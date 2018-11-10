const colors = ["red", "green", "blue"];

const items = colors.map(function(color) {
  return "<li>" + color + "</li>";
});

const items2 = colors.map(color => "<li>" + color + "</li>");
const items3 = colors.map(color => `<li>${color}</li>`);
console.log(items3);
