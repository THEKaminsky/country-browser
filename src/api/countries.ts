import axios from 'axios';
import { Country } from '../types/country';

const API_URL = 'https://restcountries.com/v3.1/all';

async function getCountries(): Promise<Country[]> {
  try {
    const response = await axios.get<Country[]>(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching countries:', error);
    return [];
  }
}

export default getCountries;
