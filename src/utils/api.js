import axios from 'axios';

export const BASE_URL = 'https://strapima3ca.herokuapp.com/api/';
export const ANIMALS_URL = 'restaurants';
export const POPULATE = '?populate=image';


export const getData = (url) => {
  axios.get(url).then((response) => console.log(response.data.data));
};

export const getAnimals = getData(BASE_URL + ANIMALS_URL + POPULATE);