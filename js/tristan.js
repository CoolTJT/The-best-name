var variableWithFunctionScope = 1;
let variableWithBracketScope = 2;
const variableWithBracketScopeThatCannotBeChanged = variableWithBracketScope + variableWithFunctionScope;



let bob = true;
while(bob) {
  // Do stuff
  bob = false;
}

function func(steve) { // Reusable code. Global scope used
  for(let i = 0; i < steve; i++) {
    console.log(bob);
  }
}

function func2(bob) { // Reusable code. Global scope overridden by local scope
  for(let i = 0; i < bob; i++) {
    console.log(bob);
  }
}

for(let i = 0; i < 5; i++) {
  func(i);
  func2(i);
}

let object = {
  key1: "Steve",
  key2: 1,
  key3: true,
  key4: {
    key1: "Steve",
    key2: 1,
    key3: false
  }
};

console.log("object['key1']", object["key1"]);

console.log("Object",object);
console.log("object.key4.key1", object.key4.key1);

let arrayEx = ["bob", "george", "steve"];
console.log("Array", arrayEx);
console.log("Array[1]", arrayEx[1]);

arrayEx.forEach(function(arrayElement, index) {
  console.log("At", index, ":", arrayElement);
})

for(let i = 0; i < arrayEx.length; i++){
  console.log(arrayEx[i].length)
}


class Car {
  constructor() {
    this.noise = "Vroom, Vroom"
    this.make = "Mazda"
    this.model = "Sedan"
  }

  go() {
    console.log(`There goes the ${this.make} ${this.model}. ${this.noise}!!!`)
  }
  update(data) {
    if(data.hasOwnProperty("noise")) {
      this.noise = data.noise;
    }
    if(data.hasOwnProperty("make")) {
      this.make = data.make;
    }
    if(data.hasOwnProperty("model")) {
      this.model = data.model;
    }
  }
}

let myCar = new Car();
let myOtherCar = new Car();
myCar.update({
  noise: "Chug, chug... chug",
  make: "Chevrolet",
  model: "Broken"
})
myCar.go();
myOtherCar.go();

let app = document.getElementById("app");
console.log(app);
for (let i = 0; i < 1000; i++) {
  let p = document.createElement("p");
  p.innerText = myCar.noise;
  app.appendChild(p);
}

let kids = app.children;
console.log(kids);
