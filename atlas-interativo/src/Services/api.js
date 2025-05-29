import axios from 'axios';

const api = axios.create({
  baseURL: 'https://restcountries.com/v3.1/',
});

export const getAllCountries = async () => {
  try {
    const response = await api.get('all');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar países:', error);
    return [];
  }
};
