import axios from 'axios';

const setAuthHeader = (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const getAuthToken = async () => {
    try {
        const response = await axios.get('/token');
        setAuthHeader(response.data.token);
        return response.data;
    } catch (error) {
        console.log('Error getting token', error);
    }
};
