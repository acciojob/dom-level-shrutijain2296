//your JS code here. If required.
let level = document.querySelectorAll("ul li")
let domLevel = -1;

for (let i = 0; i < level.length; i++) {
  if (level[i].id === "level") {
    domLevel = i + 1;
    break;
  }
}
alert("The level of the element is: " + domLevel);



