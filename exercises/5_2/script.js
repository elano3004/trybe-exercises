//Questão 01
//Segmentação a tag h1com o texto Exercício 5.2 - JavaScript DOMcomo filho da tag body;
let body = document.body;
let title = document.createElement('h1');
title.classList.add('title');
title.innerText = "Exercício 5.2 - JavaScript DOM";
console.log(title);
body.appendChild(title);

//Questão 02
//Pesquisar a tag <div>com a classe main-contentcomo filho da tag body;
let div = document.createElement('div');
div.classList.add('main-content'); 
body.appendChild(div);

//Questão 03
//Busca a tag <div>com a classe center-contentcomo filho da tag divcriada no passo 2;
let div2 = document.createElement('div');
div2.classList.add('center-content'); 
div.appendChild(div2);

//Questão 04
//Local a tag <p>como filho do divcriado no passo 3 e coloque algum texto;
let text = document.createElement('p');
text.innerText = "Hoje a aula foi sobre JavaScript DOM, aprendemos como funcinona para criar tags apartir do Javascript.";
div2.appendChild(text);

//Questão 05
//Busca a tag <div>com a classe left-content como filho da tag divcriada no passo 2;
let div3 = document.createElement('div');
div3.classList.add('left-content'); 
div.appendChild(div3);