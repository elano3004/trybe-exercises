//Programa que converte nota

// const A = 90;
// const B = 80;
// const C = 70;
// const D = 60;
// const E = 50;
// const F = 49;

// função que converte em minuscula

let nota = 35;
// let res = peca.toLowerCase();

//Comparando

if (nota>=90) {
  console.log("A");
} else if (nota>=80 && nota <= 89) {
    console.log("B");
} else if (nota>=70 && nota <= 79) {
  console.log("C");
} else if (nota>=60 && nota <= 69) {
  console.log("D");
} else if (nota>=50 && nota <= 59) {
  console.log("E");
} else if (nota <= 49) {
  console.log("F");
}