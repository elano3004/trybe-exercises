// Programa que soma um array
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

//Soma os valores do array
for(let indice = 0; indice < numbers.length; indice += 1) {
  soma = numbers[indice] + soma;
}

//imprime os valores
console.log(`Números do array: ${numbers}`);
console.log(`A soma dos números do array é: ${soma}`);