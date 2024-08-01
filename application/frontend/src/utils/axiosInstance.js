// src/utils/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
    //baseURL: 'http://localhost:4000/api',
    // baseURL: 'https://backend-j9ne.onrender.com/api',
    baseURL: 'https://swp-391-group02-backend.vercel.app/api',
});

axiosInstance.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

export default axiosInstance;
