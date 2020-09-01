// Programa que soma um array
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let media = 0;

//calculando a méida do array
for(let indice = 0; indice < numbers.length; indice += 1) {
  soma = numbers[indice] + soma;
  media = soma / numbers.length;
}

//imprimindo os resultados
console.log(`Números do array: ${numbers}`);
console.log(`A soma dos números do array é: ${soma}`);
console.log(`A média dos números do array é: ${media}`);

//verificando se a média é maio ou menor que 20
if (media>20){
  console.log(`Valor da média é maior que 20:`);
} else {
  console.log(`Valor da média é menor que 20:`);
}
