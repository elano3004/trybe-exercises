// Programa que soma um array

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let media = 0;

for(let indice = 0; indice < numbers.length; indice += 1) {
  soma = numbers[indice] + soma;
  media = soma / numbers.length;
}
console.log(`Números do array: ${numbers}`);
console.log(`A soma dos números do array é: ${soma}`);
console.log(`A média dos números do array é: ${media}`);