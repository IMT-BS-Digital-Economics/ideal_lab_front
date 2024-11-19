import axios from 'axios';

const instance = axios.create({
    baseURL: `https://ideal-lab.fr/api`,
    timeout: 120000,
    withCredentials: true,
});

export default instance;
