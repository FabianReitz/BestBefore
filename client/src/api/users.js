import axios from 'axios';

const urlLogin = 'http://localhost:5000/login';
const urlCreate = 'http://localhost:5000/register';

export const fetchUsers = () => axios.get(urlLogin);
export const createUser = (newUser) => axios.post(urlCreate, newUser);
export const logUserIn = (userCredentials) =>
    axios.post(urlLogin, userCredentials);
