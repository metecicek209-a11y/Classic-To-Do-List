
let ulElement = document.querySelector(".ulElement");
let number= document.getElementById("number");
let count = 0;
function createLi(inputNote){
	count = count + 1;
	number.innerHTML = count;
	let newTask = inputNote.value;
	let newNote = document.createElement("li");
	newNote.innerHTML = newTask;
	ulElement.appendChild(newNote);
	inputNote.value = "";
	let greenBtn = document.createElement("button");
	greenBtn.className = "greenBox";
	newNote.appendChild(greenBtn);
	greenBtn.addEventListener("click",function(){
		newNote.classList.toggle("fade");
		count = count - 1;
		number.innerHTML = count;


	});
	let redBtn = document.createElement("button");
	redBtn.className= "redBox";
	newNote.appendChild(redBtn);
	redBtn.addEventListener("click",function(){
		newNote.remove();
		count = count - 1;
		number.innerHTML = count;
	});
}


const inputForm = document.querySelector(".form");
const inputNote = document.querySelector(".input");
inputForm.addEventListener('submit',function(event){
	event.preventDefault();
	createLi(inputNote);
});
