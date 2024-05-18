import axios from 'axios';

console.log(
    'axios.defaults.headers.common.Authorization',
    axios.defaults.headers.common.Authorization
);

export const postNewUser = async ({newUser, token}) => {
    const ENDPOINT = '/users';
    try {
        const response = await axios.post(`${ENDPOINT}`, newUser, {
            headers: { token: `${token}` },
        });
        console.log('respons from postNewUser', response)
        return response.data;
    } catch (error) {
        console.log('Unable to register new user. Try again later', error);
    }
};

