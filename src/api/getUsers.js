import axios from "axios"

axios.defaults.baseURL =
    'https://frontend-test-assignment-api.abz.agency/api/v1';

export const getUsers = async (page = 1, count = 6) => {
    const ENDPOINT = '/users'
    try {
        const response = await axios.get(`${ENDPOINT}?page=${page}&count=${count}`)
        return response.data;
    } catch (error) {
        console.error('error getting users', error)
    }
}