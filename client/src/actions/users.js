import Cookies from 'js-cookie';
import * as api from '../api/users';

export const getUsers = () => async (dispatch) => {
    try {
        const { data } = await api.fetchUsers();

        dispatch({ type: 'FETCH_ALL_USERS', payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const createUser = (user) => async (dispatch) => {
    try {
        const { data } = await api.createUser(user);

        dispatch({ type: 'CREATE_USER', payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const logUserIn = (user) => async (dispatch) => {
    try {
        const { data } = await api.logUserIn(user);

        Cookies.set('username', data.username);
        Cookies.set('token', data.token);
        console.log(data);
    } catch (error) {
        console.log(error);
    }
};
