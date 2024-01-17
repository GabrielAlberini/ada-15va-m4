// application programing interface
// endpoint: ruta por la que se accede a cierta data

const BASE_API = new URL("https://rickandmortyapi.com");
const endpoint = "api/character";

//const response = fetch(BASE_API.href + endpoint);
//response.then((data) => data.json()).then((response) => console.log(response));

// async await: asincronico - espera

const getCharacters = async () => {
  const response = await fetch(BASE_API.href + endpoint);
  const data = await response.json();
  return data;
};

const main = async () => {
  const dataToFetch = await getCharacters();
  console.log(dataToFetch);
};

main();
