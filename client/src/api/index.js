import axios from 'axios';
import Cookies from 'js-cookie';

const urlGET = 'http://localhost:5000/api/items';
const urlPOST = 'http://localhost:5000/api/items/new';

export const fetchItems = () =>
    axios.post(urlGET, { token: Cookies.get('token') });

export const createItem = (newItem) => axios.post(urlPOST, newItem);
