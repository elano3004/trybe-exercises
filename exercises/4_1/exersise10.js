//Programa que calcula lucro

let valorCusto = 10;
let valorVenda = 50;
let imposto = (valorCusto * 0.2);
let valorTotal = valorCusto + imposto;
let lucro = valorVenda - valorTotal;
let lucroMil = (lucro * 1000);

// //verificando se tem um numero impar ou não

if (valorCusto < 0 || valorVenda < 0) {
  console.log("Erro na contagem: Valores abaixo de zero!");
} else {
  console.log("> Valor de compra do produto: " +valorCusto);
  console.log("> Valor do imposto do produto: " +imposto);
  console.log("> Valor de Total do produto + imposto: " +valorTotal);
  console.log("> Valor do lucro em um produto: " +lucro);
  console.log("> Valor do lucro em uma venda de mil produtos: " +lucroMil);
}