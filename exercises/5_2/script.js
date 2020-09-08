//Questão 01
//Segmentação a tag h1com o texto Exercício 5.2 - JavaScript DOMcomo filho da tag body;
let body = document.body;
let title = document.createElement('h1');
title.classList.add('title');
title.innerText = "Exercício 5.2 - JavaScript DOM";
console.log(title);
body.appendChild(title);

//Questão 02
//Pesquisar a tag divcom a classe main-contentcomo filho da tag body;
let div = document.createElement('div');
div.classList.add('main-content'); 
body.appendChild(div);