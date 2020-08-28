//Programa que compara tres valores

let num1 = 45;
let num2 = 125;
let num3 = 35;

//Comparando

console.log("Vamos ver qual é maior?");
console.log("A=" +num1+ " B=" +num2+ " C=" +num3);
if( num1 > num2 && num1 > num3) {
  console.log("A é maior"); 
} else if (num2 > num3) { 
  console.log("B é maior");
} else {
  console.log("C é maior");
}