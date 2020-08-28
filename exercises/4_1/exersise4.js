//Programa que verifica se um número é positivo ou negativo

let num1=-20;
// let num1;

//Comparando
// var num1 = prompt("digite um número: ");
console.log("Vamos verificar se: " +num1+ " é Positivo ou Negativo");
if( num1!=0 && num1 > 0) {
  console.log("O número " +num1+ " é positive!"); 
} else if (num1 < 0) {
  console.log("O número " +num1+ " é negative!");
} else {
  console.log("O número é igual é Zero");
}