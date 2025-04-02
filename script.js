let titleElement = document.getElementById("title");

console.log(titleElement);

const div = document.createElement("div");
const p = document.createElement("p");
document.body.append(div);
div.innerText = "Hello world";
p.innerText = "Goodbye";
div.append(p);

let descriptions = document.querySelectorAll("p");
console.log(descriptions);
