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

//Questão 06
//Busca a tag <div>com a classe right-content como filho da tag divcriada no passo 2;
let div4 = document.createElement('div');
div4.classList.add('right-content'); 
div.appendChild(div4);

//Questão 07
//Local uma imagem com srcdefinida para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do divcriado no passo 5;
let img = document.createElement('img');
img.classList.add('small-imagem');
img.src = "https://picsum.photos/200";
img.alt = "imagem aleatório";
div3.appendChild(img);

//Questão 08
//Local uma lista não ordenada com os valores de 1 a 10 por extenso como os valores da lista. Essa lista deve ser filha do divcriado no passo 6;
let valores = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez'];

let list = document.createElement('ul');
for (let index = 0; index < valores.length; index += 1) {
  let valorList = valores[index];

  let elementoList = document.createElement('li');
  elementoList.innerText = valorList;

  list.appendChild(elementoList);
}
div4.appendChild(list);

//Questão 09
//Local 3 tags h3, todas sendo filhas do divcriado no passo 2.
let subTitle1 = document.createElement('h3');
subTitle1.innerText = "H3 - UM";
let subTitle2 = document.createElement('h3');
subTitle2.innerText = "H3 - DOIS";
let subTitle3 = document.createElement('h3');
subTitle3.innerText = "H3 - TRÊS";
div.appendChild(subTitle1);
div.appendChild(subTitle2);
div.appendChild(subTitle3);