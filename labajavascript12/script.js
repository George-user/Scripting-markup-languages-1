//1
let phBook = new Map([
    ["1", "+375(29)555 1212"],
    ["2", "+375(44)800 1377"],
    ["3", "+375(44)912 1414"],
    ["4", "+375(29)715-1110"],
    ["5", "+375(29)715-1110"]
  ]);
   
  function PhoneNumber() {
    let key = prompt("Введите ключ 1-5:");
    if (phBook.has(key)) {
      alert(`Номер телефона: ${phBook.get(key)}`);
    } else {
      alert("Неверный ключ!");
    }
  }
  PhoneNumber();
  //2

let mySet = new Set();

      mySet.add(1);
      mySet.add(3);
      mySet.add(5);

let size = mySet.size;
let hasOne = mySet.has(1);
let hasThree = mySet.has(3);
let hasFive = mySet.has(5);

  console.log(`Размер объекта Set: ${size}`);
  console.log(`Элемент 1 присутствует в объекте Set: ${hasOne}`);
  console.log(`Элемент 3 присутствует в объекте Set: ${hasThree}`);
  console.log(`Элемент 5 присутствует в объекте Set: ${hasFive}`);

//3
let proto = {
  firstName: 'Иван',
  lastName: 'Иванов',
  patronymic: 'Иванович',
  printName: function() {
    console.log(`Имя: ${this.firstName}, Фамилия: ${this.lastName}, Отчество: ${this.patronymic}`);
  }
};

proto.printName();

let proto2 = Object.create(proto);
    proto2.firstName = 'Петр';

proto2.printName();

//4

function Hello(name = 'Аноним') {
  console.log(`Привет, ${name}!`);
}
Hello('Иван');
Hello();

//5
let buttons = document.querySelectorAll('button');

function createClickCounter() {
  let count = 0;
  return function() {
    count++;
    this.textContent = `количество: ${count}`;
  }
}

buttons.forEach(button => {
  let clickCounter = createClickCounter();
  button.addEventListener('click', clickCounter);
});