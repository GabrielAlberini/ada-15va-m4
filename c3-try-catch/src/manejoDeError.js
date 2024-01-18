// try {
//   console.log("Inicio de ejecucion");

//   const numeros = [1, 2, 3];
//   console.log("Numeros:", numeros);

//   numeros.push(4);
//   console.log("Numeros con el 4 incluido:", numeros);

//   if (!numeros.includes(5)) {
//     throw "Inventando un error muajaja";
//   }
// } catch (error) {
//   console.log(error);
// }

// console.log("Ejecutando codigo despues de que hubo un error o.o");

try {
  console.log("Pidiendo ravioles");
  const hayRavioles = false;
  if (!hayRavioles) {
    throw "No hay ravioles :(";
  }
  console.log("Preparando comida");
  console.log("Llamando al mozo");
  console.log("Entregando ravioles");
} catch (error) {
  console.log(error);
}
