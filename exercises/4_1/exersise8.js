//Programa que verifica se é número é par ou impa

let num1 = 5;
let num2 = 10;
let num3 = 45;


//verificando mod das variavies
let ver1 = num1 % 2;
let ver2 = num2 % 2;
let ver3 = num3 % 2;

// console.log("valor de 1: " +ver1+ " valor de 2: " +ver2+ " valor de 3: " +ver3);

//verificando se é par ou não
if (ver1 == 0 || ver2 == 0 || ver3 == 0) {
  console.log("true");
} else {
  console.log("false")
}