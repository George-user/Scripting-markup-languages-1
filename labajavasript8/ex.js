//1
let ex1 = document.getElementById("ex1");
ex1.onmouseover = function(){
	ex1.style.color = "red";
}

//2
let ex2 = document.getElementById("ex2");
ex2.onclick = function(){
	ex2.style.fontSize = "50px";
}

//3
function changeImage() {
    var image = document.getElementById('image'); 
    image.src = "pg2.jpg";
    }
  
//4
  function changeText() {
    let text = document.getElementById('text');
    text.innerHTML = "<img src='pg1.jpg'>";
  }
  
//5
  let image = document.getElementById("image1");
  image.onmouseover = function() {
    image.style.width = "400px";
  }
  image.onmouseout = function() {
    image.style.width = "200px";
  }
//6
function changeStyle() {
    let paragraph = document.getElementById('paragraph');
    paragraph.style.border = " solid black";
    paragraph.style.padding = "10px";
    paragraph.style.backgroundColor = "yellow";
  }
