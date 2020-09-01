//Programa que verifica peça de xadrez

const R = 'rei';
const D = 'rainha';
const B = 'bispo';
const C = 'cavalo';
const T = 'torre';
const P = 'peao';

// função que converte em minuscula

let peca = "peao";
let res = peca.toLowerCase();

//Comparando

switch(res) {
  case R:
    // console.log("Pode ser movimentado em qualquer direção do tabuleiro, mas apenas de casa em casa.");
    console.log("Rei - Movimenta-se em qualquer direção mais 1 casa por vez");
    break;
  case D:
    // console.log("Sem restrições, a Rainha tem livre movimentação no jogo na horizontal, vertical e diagonais.");
    console.log("Rainha - Movimenta-se sem restrições, horizontal, vertical e diagonais.");
    break;
  case B:
    // console.log("Sem restrição de número de casas, mas somente no sentido diagonal.");
    console.log("Bispo - Movimenta-se em Diagonal");
    break;
  case C:
    // console.log("Realiza movimentos em “L”, ou seja, duas casas em um sentido e uma casa em sentido perpendicular àquele, em qualquer direção.");
    console.log("Cavalo - Movimenta-se em 'L'");
    break;
  case T:
    // console.log("pode correr sem restrição de número de casas e em todas as direções (frente, trás, direita, esquerda).");
    console.log("Torre - Movimenta-se sem restrição, todas as direções");
    break;
  case P:
    // console.log("Pode apenas realizar movimentos frontais, de forma que o primeiro movimento de cada peão abranja até duas casas, e os demais se limitam a uma casa à frente. O ataque do peão sempre ocorre na diagonal.");
    console.log("Peão - Movimenta-se para frente");
    break;
  default:
    console.log("Peça inválida");
    break;
}