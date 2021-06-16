import axios from 'axios';

const url = 'http://localhost:5000/login';

export const fetchUsers = () => axios.get(url);
export const createUser = (newUser) => axios.post(url, newUser);
export const logUserIn = (userCredentials) => axios.post(url, userCredentials);
