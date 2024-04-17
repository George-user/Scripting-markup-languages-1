
let myObject = {
    name: "Georg",
    age: 18,
    city: "New York"
  };
  
  console.log(Object.values(myObject));
  
  
  console.log(Object.keys(myObject));

  //2
 
let numbers = [
    "123",
    "4567",
    "89",
    "101112",
    "1314151617",
    "181920212223",
    "24252627282930"
  ];
  

  console.log("Список до выравнивания:");
  console.log(numbers);
  
  
  let totalDigits = 15;
  
 
  for (let i = 0; i < numbers.length; i++) {
    
    let paddingLength = (totalDigits - numbers[i].length) / 2;
  
   
    numbers[i] = numbers[i].padStart(paddingLength + numbers[i].length, "0");
    numbers[i] = numbers[i].padEnd(totalDigits, "0");
  }
  

  console.log("Список после выравнивания:");
  console.log(numbers);
//3

let firstName = "Georg";
let lastName = "Bogatirov";
let age = 18;


const randomChars = Math.random().toString(36).substring(2, 5);
const fullName = randomChars + firstName + " " + lastName + age;

console.log(fullName);
//4

const charArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];


for (let i = 0; i < 3; i++) {
  charArray.unshift("1");
}


for (let i = 0; i < 4; i++) {
  charArray.push(" ");
}
charArray.push("0");


console.log(charArray.join(""));
//5
let person = {
    name: "Georg",
    age: 18
  };
  
  let description = "Это имя человека.";
  
  console.log(description + " " + person.name);
  //6
  let obj = {};

Object.defineProperty(obj, "property1", {
  value: 42,
  writable: false
});

Object.defineProperty(obj, "property2", {
  value: "Hello",
  writable: true
});

console.log(obj.property1); 
console.log(obj.property2); 