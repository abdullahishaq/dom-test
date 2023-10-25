const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.style.color = 'blue';
content.textContent = 'This is your glorious text-content!';

container.appendChild(content);

//p

const para = document.createElement('p');
para.style.color = 'red';
para.textContent = "Hey! I'm red!";

container.appendChild(para);

//h3

const h3 = document.createElement('h3');
h3.style.color = 'red';
h3.textContent = "Hey! I'm blue h3!";

container.appendChild(h3);

//pink div

const pink = document.createElement('div');
pink.style.backgroundColor = 'pink';
pink.style.border = '1px solid black';
pink.textContent = 'This is your glorious text-content!';

container.appendChild(pink);

const h1 = document.createElement('h1');
const pp = document.createElement('p');
h1.textContent = "I'm in a div";
pp.textContent = "ME TOO!";

pink.appendChild(h1);
pink.appendChild(pp);