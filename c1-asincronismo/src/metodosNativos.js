// Asincronismo

const numbers = [1, 4, 6, 1, 2];

const squares = numbers.map((number) => number ** 2);

const validateNamber = numbers.includes(2);

const numMenores = numbers.filter((number) => number < 4);

let resultado = 0;

numbers.forEach((number) => {
  resultado += number;
});

console.log(resultado);
