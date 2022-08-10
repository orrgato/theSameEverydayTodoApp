const input = document.getElementById("input");
const button = document.getElementById("button");
const parent = document.getElementById("parent")

       

button.addEventListener('click', function(){
	let parentDiv = document.createElement('div');
	let inputValue = input.value;
	// inputValue.trim();
	if(!inputValue) {
		return;
	}



	let textNode = document.createElement('p');
	textNode.innerText = inputValue;
	parentDiv.appendChild(textNode);

	let deleteNode = document.createElement('button');
	deleteNode.innerText = 'delete';
	parentDiv.appendChild(deleteNode);

	deleteNode.addEventListener('click', function(){
		parent.removeChild(parentDiv);
	});

	let completeNode = document.createElement('button');
	completeNode.innerText = 'Done';
	parentDiv.appendChild(completeNode);

	completeNode.addEventListener('click', function(){
		textNode.classList.add("strikeThrough");
	})

	parent.appendChild(parentDiv);

	input.value = "";
})


