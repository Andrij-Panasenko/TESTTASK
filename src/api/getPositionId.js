import axios from 'axios';

export const getPositionId = async () => {
    try {
        const response = await axios.get('/positions');

        return response.data;
    } catch (error) {
        console.log('Unable to get positions', error);
    }
};
