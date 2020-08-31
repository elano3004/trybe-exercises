//programa que faz um quadrado de *
let n = 5;
let index;
let symbol = '*';
let inputLine = '';

for (index = 0; index < n; index += 1) {
  inputLine = inputLine + symbol;
};
for (index = 0; index < n; index += 1) {
  console.log(inputLine);
};