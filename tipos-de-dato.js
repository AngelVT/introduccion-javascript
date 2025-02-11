// select the body of the html document to interact with it trough the variable body
const body = document.querySelector('body');

//declare a variable to store p elements
let pElement;

//creates a new p element
pElement = document.createElement('p');
//define a text for the p element
pElement.innerText = `42 is a value of type ${typeof 42}`;
//add the p element as a child of body
body.appendChild(pElement);
//print on console the type of a variable or value
console.log(typeof 42);

pElement = document.createElement('p');
pElement.innerText = `"Veinticinco" is a value of type ${typeof 'Veinticinco'}`;
body.appendChild(pElement);
console.log(typeof 'Veinticinco');

pElement = document.createElement('p');
pElement.innerText = `-666 is a value of type ${typeof -666}`;
body.appendChild(pElement);
console.log(typeof -666);

pElement = document.createElement('p');
pElement.innerText = `true is a value of type ${typeof true}`;
body.appendChild(pElement);
console.log(typeof true);

pElement = document.createElement('p');
pElement.innerText = `0 is a value of type ${typeof 0}`;
body.appendChild(pElement);
console.log(typeof 0);

pElement = document.createElement('p');
pElement.innerText = `'' is a value of type ${typeof ''}`;
body.appendChild(pElement);
console.log(typeof '');

pElement = document.createElement('p');
pElement.innerText = `null is a value of type ${typeof null}`;
body.appendChild(pElement);
console.log(typeof null);

pElement = document.createElement('p');
pElement.innerText = `undefined is a value of type ${typeof undefined}`;
body.appendChild(pElement);
console.log(typeof undefined);

pElement = document.createElement('p');
pElement.innerText = `FALSE is a value of type ${typeof FALSE}`;
body.appendChild(pElement);
console.log(typeof FALSE);

pElement = document.createElement('p');
pElement.innerText = `{} is a value of type ${typeof {}}`;
body.appendChild(pElement);
console.log(typeof {});

pElement = document.createElement('p');
pElement.innerText = `[] is a value of type ${typeof []}`;
body.appendChild(pElement);
console.log(typeof []);