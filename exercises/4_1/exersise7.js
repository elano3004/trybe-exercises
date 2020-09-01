//Programa que converte nota

let nota = -1;

//Comparando

if (nota>=90 && nota <=100) {
  console.log("A");
} else if (nota>=80 && nota <= 89) {
    console.log("B");
} else if (nota>=70 && nota <= 79) {
  console.log("C");
} else if (nota>=60 && nota <= 69) {
  console.log("D");
} else if (nota>=50 && nota <= 59) {
  console.log("E");
} else if (nota>=0 && nota <= 49) {
  console.log("F");
} else {
  console.log("Erro esta nota é menor que 0 ou maior que 100%")
}