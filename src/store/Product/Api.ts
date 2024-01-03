import axios from 'axios';
import { ProductParams } from '../../types';

const BASE_URL = 'https://dummyjson.com/products';

function createQueryString(obj: any, url: string) {
  const keys = Object.keys(obj);
  const keyValuePairs = keys.map((key) => {
    return encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]);
  });
  console.log(obj?.q);
  return `${BASE_URL}/${obj?.q ? 'search?' : '?'}${keyValuePairs.join('&')}`;
}

export const fetchAllProducts = (params: ProductParams) => {
  console.log('PARAMS ARE', params);
  console.log('DONT FORGET CHANGE PARAMS IN API TO WORK!!!');
  return axios.get(createQueryString(params, BASE_URL));
};

export const fetchProductById = (id: string) => {
  console.log('STRING ARE', id);
  console.log('DONT FORGET CHANGE ID IN API TO WORK!!!');
  return axios.get(`${BASE_URL}/${id}`);
};

export default fetchAllProducts;
