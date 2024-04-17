//1
let arr = [];
for (let i = 0; i < 11; i++) {
  arr.push(Math.floor(Math.random() * 100));
}
let index = prompt("Введите индекс элемента, который нужно проверить:");

if (arr[index]) {
  console.log(`Элемент с индексом ${index} найден: ${arr[index]}`);
} else {
  console.log(`Элемент с индексом ${index} не найден`);
}



//2
let arr1 = [];
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    arr1.push(NaN);
  } else {
    arr1.push(Math.floor(Math.random() * 100));
  }
}
if (arr.includes(NaN)) {
  console.log("Массив содержит NaN");
} else {
  console.log("Массив не содержит NaN");
}
if (arr1.indexOf(NaN) !== -1) {
  console.log ("В массиве нет NaN");
} else {
  console.log("В массиве есть NaN");

}



//3
let myArray1 = ['a', 'b', 'c', 'd', 'e'];
let myArray2 = ['f', 'g', 'h', 'i', 'j'];
let myArray3 = ['k', 'l', 'm', 'n', 'o'];
let userInput = 'a';
console.log(myArray1.includes(userInput)); 
console.log(myArray2.includes(userInput)); 
console.log(myArray3.includes(userInput)); 
//4

let expressions = [
    "12342*23/5+234",
    "28*7652/5*432",
    "37346-(4346+10244)/5",
    "654335-965732",
    "(100010+10000010)/1000"
  ];
  
  
  function evaluateExpression(expression) {

    let result = eval(expression);
  
    result = Math.round(result);
  
   
    console.log(result);
  }
  
  
  for (let i = 0; i < expressions.length; i++) {
    evaluateExpression(expressions[i]);
  }
  