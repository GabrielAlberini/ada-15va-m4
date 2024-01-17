class ArrayArtesanal {
  numbers;

  constructor(numbers) {
    this.numbers = numbers;
  }

  #callback(number) {
    return number ** 2;
  }

  map() {
    const squares = [];
    this.numbers.forEach((number) => squares.push(this.#callback(number)));
    return squares;
  }
}

const numbers2 = new ArrayArtesanal([1, 2, 3]);

const squares2 = numbers2.map();

console.log(squares2);
