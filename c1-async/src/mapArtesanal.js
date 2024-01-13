// Asincronismo

console.log("Proceso 1");
const numbers = [1, 4, 6, 1, 2];

const callback = (number) => number ** 2;

const map = (array, clb) => {
  console.log("Proceso 3");
  const squares = [];

  setTimeout(() => {
    console.log("EJECUTADO DESDE EL SET TIME OUT");
  }, 2000);

  console.log("Proceso 4");
  for (let i = 0; i < array.length; i++) {
    const square = clb(array[i]);
    squares.push(square);
  }

  return squares;
};

console.log("Proceso 2");
const squares = map(numbers, callback);

console.log("Proceso 5");
console.log(squares);
