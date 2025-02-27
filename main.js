
let myVar;

myVar = "bob"

console.log(myVar)

let iceCream = "chocalate"

if(iceCream == "chocalate"){
    console.log(true)
}else{
    console.log(false)
}

let myName = "Test";
myName = "ravi"
let myAge;

console.log(myName)

let myNameArrray = ["Ravi","Gelu",2,5,6,0.3,true]

console.log(myNameArrray[1])

let dolphine = "So long and for all the fish";

let imAlive = true;

let test = 6 < 3;

console.log(test)

let person = { name:"Person Object", weight:55, height:166}

console.log(typeof person)
console.log(person.name)

const pi = 3.14;
console.log(pi)

const bird = { name:"Duck"}
bird.name = "Crow"

const testInt = 5
console.log(typeof testInt)

const lotsOfDecimal = 45.596969595954229;
const convertOfDecimal = lotsOfDecimal.toFixed(2)

console.log(convertOfDecimal)

let myNumber = "74";
myNumber +=3;
console.log(myNumber)
console.log(Number(myNumber)+3)

// const badString = string;
// console.log(badString) 
const fName = "Ravi";
const lName = "Gelani";

const fullName = `Hello, ${fName} ${lName}`;

console.log(fullName)

const browserType = "mozilla test";

if (browserType.includes("test")) {
  console.log("Found test!");
} else {
  console.log("No test here!");
}


if (browserType.startsWith("zilla")) {
  console.log("Found zilla!");
} else {
  console.log("No zilla here!");
}

if (browserType.endsWith("zilla")) {
  console.log("Found zilla!");
} else {
  console.log("No zilla here!");
}
