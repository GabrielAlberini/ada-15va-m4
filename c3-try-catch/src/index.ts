import dotenv from "dotenv";
dotenv.config();

const baseApi = process.env.BASE_API_URL as string;
const version = process.env.VERSION_API as string;
const pokemon = process.env.ENDPOINT_POKEMON as string;

const getDataApi = async () => {
  try {
    const response = await fetch(baseApi + version + pokemon);

    if (response.status === 404) {
      throw new Error("Not Found");
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

getDataApi();
