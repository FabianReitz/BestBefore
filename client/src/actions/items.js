import * as api from '../api';

export const getItems = () => async (dispatch) => {
try {
    const { data } = await api.fetchItems();
    
        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message);
    }
};
