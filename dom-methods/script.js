const container = document.querySelector("#container");

const paragraph = document.createElement('p');
paragraph.textContent = "Hey I’m red!";
paragraph.style.color = 'red';
container.appendChild(paragraph);

const headingThree = document.createElement('h3');
headingThree.textContent = "I’m a blue h3!";
headingThree.style.color = 'blue';
container.appendChild(headingThree);

const newDiv = document.createElement('div');
newDiv.setAttribute('style', 'border: thick solid black; background: pink;');

const headingOne = document.createElement('h1');
headingOne.textContent = "I’m in a div";
newDiv.appendChild(headingOne);

const newParagraph = document.createElement('p');
newParagraph.textContent = "ME TOO!";
newDiv.appendChild(newParagraph);

container.insertBefore(newDiv, null);










