function lab7() {
	let surname = document.forms.data.surname.value;
	let special = document.getElementById("special");
	let specValue = special.options[special.options.selectedIndex].value;
	let cource = 0;
	let subjects = new Array();
	
	let courceElement = document.getElementsByName('cource');
	
				for (i = 0; i < courceElement.length; i++) {
					if (courceElement[i].checked)
						cource = courceElement[i].value;
				}
	
	let subjectElement = document.getElementsByName('subject');
	
				for (i = 0; i < subjectElement.length; i++) {
					if (subjectElement[i].checked)
						subjects.push(subjectElement[i].value );
				}
	document.write("Студент " + surname + " специальность " + specValue + " курс " + cource + " должен сдавать следующие предметы: ");
	
	let ul = document.createElement("ul");
	ul.setAttribute("type", "circle");
	for (let i = 0; i < subjects.length; i++) {
		let li = ul.appendChild(document.createElement("li"));
		li.innerHTML = subjects[i];
		
	}
	document.body.appendChild(ul);
	}
	
