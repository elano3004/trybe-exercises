// Crie uma função que receba uma string word, e outra, uma string ending. 
// Verifique se a string ending é o final da string word. Considere que a 
// string ending sempre será menor que a string word.

function verificaFimPalavra(palavra, fimPalavra) {
  let inversoPalavra = palavra.split("").reverse().join("");
  let inversoFimPalavra = fimPalavra.split("").reverse().join("");

  for (let i = 0; i < inversoFimPalavra.length; i += 1) {
    if (inversoPalavra[i] != inversoFimPalavra[i]) {
      return false;
    } else {
      return true;
    }
  }
}

console.log(verificaFimPalavra("trybe", "be"));
console.log(verificaFimPalavra("joaofernando", "fernan"));