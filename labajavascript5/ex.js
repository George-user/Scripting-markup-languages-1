  
for (let i = 0; i < document.all.length; i++) {
    console.log("Тэг " + document.all[i].tagName + " " + "номер: " + (i + 1));
}
 for (i = 0; i < document.body.childNodes.length; i++) { 
    console.log(document.body.childNodes[i]);
} 
let allSpans = document.getElementsByTagName("span");
if (allSpans.length > 0) {
let firstSpanContent = allSpans[0].innerHTML;
console.log(firstSpanContent);
}
let spanElements = document.querySelectorAll("span");
if (spanElements.length > 0) {
let firstSpanContent = spanElements[0].innerHTML;
console.log(firstSpanContent);
}
let spanElement = document.getElementById("spanElem");
if (spanElement != null) {
let spanContent = spanElement.innerHTML;
console.log(spanContent);
}
let table = document.getElementById("table");
let avg = 0;
for(let i = 1; i < 6; i ++){
avg += Number(table.rows[i].cells[1].innerHTML);
}

document.getElementById("second").innerHTML += ". Cредний балл: " + (avg / 5);