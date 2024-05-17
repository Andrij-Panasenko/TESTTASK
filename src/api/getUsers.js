import axios from "axios"

axios.defaults.baseURL =
    'https://frontend-test-assignment-api.abz.agency/api/v1';

export const getUsers = async (page, count) => {
    const ENDPOINT = '/users'
    try {
        const response = await axios.get(`${ENDPOINT}?page=${page}&count=${count}`)
        return response.data;
    } catch (error) {
        console.error('error getting users', error)
    }
}