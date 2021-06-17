import axios from 'axios';
import Cookies from 'js-cookie';

const url = 'http://localhost:5000/api/items';

export const fetchItems = () => {
    axios.post(url, { token: Cookies.get('token') });
};
export const createItem = (newItem) => axios.post(url, newItem);
