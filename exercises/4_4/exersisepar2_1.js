// Crie uma função que receba uma string e retorne true se for um palíndromo, 
// ou false, se não for.

function verifica(string) {
  let arrayLetras = string.split("");
  let isPalidrome = true;
  for (let index in arrayLetras) {
    if (arrayLetras[index] != string[(string.length - 1) - index]) {
      isPalidrome = false;
    }
  }
  return isPalidrome;
}

console.log(verifica('arara'));
console.log(verifica('desenvolvimento'));