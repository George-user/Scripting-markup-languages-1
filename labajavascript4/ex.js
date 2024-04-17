function Gruppa(number,  amount) {
	
	this.number = number;
	
	this.amount = amount;

	
	this.add_stud = function add_stud(k) {
		this.amount += k;
		document.write('В группу №' + this.number + ' добавили ' + k + ' студента(ов).<br>');
	}
	
	this.sub_stud = function sub_stud(k){
		this.amount -= k;
		document.write('Из группы №' + this.number + ' отчислили ' + k + ' студента(ов).<br>')
	}
 }
 function Return()
 {
	 return 5;
 }

let gr2 = new Gruppa(2, 30);
gr2.add_stud(2);
gr2.sub_stud(4);
let gr3 = new Gruppa(3,32);
gr3.add_stud(5);
gr3.sub_stud(4);
let gr4 = new Gruppa(4,35);
gr4.add_stud(3);
gr4.sub_stud(7);
console.log(gr2);
console.log(gr3);
console.log(gr4);
document.write('<br><br>',);


function Student(name, secondname, physics, math, informatics){
	this.name = name;
	this.secondname = secondname;
	this.physics = physics;
	this.math = math;
	this.informatics = informatics;
	
	this.namel = function namel(){
		alert('Фамилия и имя студента ' + this.name + ' ' + this.secondname);
	}

	this.info = function info(){
		document.write('Иформация о студенте:<br>' + 'Фамилия: ' + this.secondname + '<br>Имя: ' 
        + this.name + '<br>Оценка по физике: ' + this.physics + '<br>Оценка по математике: ' 
        + this.math + '<br>Оценка по информатике: ' + this.informatics);
	}
    this.ball = function ball(){
		document.write('<br>'+'Средний балл студента равен ' 
        + ((this.physics + this.math + this.informatics) / 3).toFixed(2) + '<br>');
	}
}

let i = new Student('Георгий', 'Богатыоёв', 10, 10, 10)
let stud1 = new Student('Виталий', 'Гвоздиков', 9, 8, 6);
let stud2 = new Student('Деониз', 'Глозаман', 5, 10, 8);
let stud3 = new Student('Волан', 'Де Морд', 9, 7, 9);

i.info();
i.ball();
document.write('<br>');
stud1.info();
stud1.ball();
document.write('<br>');
stud2.info();
stud2.ball();
document.write('<br>');
stud3.info();
stud3.ball();
document.write('<br>');

let arr = Array.of(12, 24, 7, 23);
console.log(arr);
delete arr[3];
console.log(arr);


if (arr.includes(2)) {
    console.log("Содержит");
} else {
    console.log("Не содержит");
}

if ("name" in Student) {
    console.log("Содержит");
} else {
    console.log("Не содержит");
}

if ("surname" in Gruppa) {
    console.log("Содержит");
} else {
    console.log("Не содержит");
}

arr instanceof Array ?  console.log("Является") :   console.log("Не является");


arr instanceof Object ? console.log("Является") :   console.log("Не является");

arr instanceof String ? console.log("Является") :  console.log("Не является");


console.log(typeof(Return()));
console.log(typeof(arr));
console.log(typeof(Gruppa));
console.log(typeof(Student));



