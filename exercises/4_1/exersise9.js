//Programa que verifica se é número é ímpar

let num1 = 50;
let num2 = 10;
let num3 = 41;


//verificando mod das variavies
let ver1 = num1 % 2;
let ver2 = num2 % 2;
let ver3 = num3 % 2;

// console.log("valor de 1: " +ver1+ " valor de 2: " +ver2+ " valor de 3: " +ver3);

//verificando se tem um numero impar ou não
if (ver1 == 1 || ver2 == 1 || ver3 == 1) {
  console.log("true");
} else {
  console.log("false")
}