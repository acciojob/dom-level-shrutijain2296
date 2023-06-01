//your JS code here. If required.
const level = document.querySelectorAll("ul li")
const domLevel = -1;

for(let i = 0; i < level.length; i++){
	if(level[i.id === "level"){
		domLevel = i+1;
		break;
	}
	
}
alert("The level of the element is:" + domLevel);



