//1
const reg = /./s;
const str1 = 'Hello\nWorld!';
console.log(str1.match(reg));
//2
function bbtagit(text) {
    text = text.replace(/\[u\](.*?)\[\/u\]/gim, '<u>$1</u>')
  
    return text
  }
  
  var line = "[u]мой\n текст[/u]"
  console.log(bbtagit(line))
  

let input = "<a href='https://www.w3schools.com/js/DEFAULT.asp>.</a> Это пример гиперссылки.\n<a href='https://www.java.com/pl/'> ссылка c другим содержанием.</a>";
let output = input.replace(/<a/g, '<u>');
console.log(output);
//4
let input1 = "firstName, lastName";
let output1 = input1.replace(/(\w+), (\w+)/, '$2, $1');
console.log(output1);
//5
// let obj = {a: 1, b: 2, c: 3, d: 4};
// let {a, b, ...rest} = obj;
// console.log(rest);
//6
let obj1 = {a: 1, b: 2, c: 3, d: 4};
let {x, y, ...rest123} = obj1;
let newObj = {...rest123, firstName: 'Net', lastName: 'Assist'};
console.log(newObj);


let {a, c, ...rest} = obj1;
 newObj = {...rest, a,c };
console.log(rest);
