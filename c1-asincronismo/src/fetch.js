const promesaDePeticionHTTP = fetch("haracteasdasdasdasdasdr");

promesaDePeticionHTTP
  .then((data) => {
    return data.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.log("ERROR :("));
