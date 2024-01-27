import { Holiday } from "../interface/holiday";
import dotenv from "dotenv";
dotenv.config();

const urlApi = process.env.URL_API!;
const api = new URL(urlApi);

const getDataHoliday = async (country: string): Promise<Holiday[] | Error> => {
  try {
    const response = await fetch(api + country);
    if (response.status === 404) {
      throw new Error("Recurso no encontrado.");
    }
    const data = await response.json();
    return data;
  } catch (error: any) {
    return new Error(error.message);
  }
};

const getResumeHoliday = async (country: string) => {
  try {
    const data = await getDataHoliday(country);

    if (data instanceof Error) {
      throw data;
    }

    const resumes = data.map((holiday: any) => {
      return {
        name: holiday.localName,
        date: holiday.date,
      };
    });
    return resumes;
  } catch (error) {
    return error;
  }
};

const getFixedHoliday = async (country: string) => {
  try {
    const data = await getDataHoliday(country);

    if (data instanceof Error) {
      throw data;
    }

    const fixedHolidays = data.filter((holiday: any) => holiday.fixed === true);

    console.log(fixedHolidays);
  } catch (error) {
    return error;
  }
};

const getNoFixedHoliday = async (country: string) => {
  try {
    const data = await getDataHoliday(country);

    if (data instanceof Error) {
      throw data;
    }

    const fixedHolidays = data.filter(
      (holiday: any) => holiday.fixed === false
    );

    console.log(fixedHolidays);
  } catch (error) {
    return error;
  }
};

export { getDataHoliday, getResumeHoliday, getFixedHoliday, getNoFixedHoliday };
