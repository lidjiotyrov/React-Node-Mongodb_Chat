import axios from 'axios';

const controller = axios.create({
  baseURL: process.env.REACT_APP_PUBLIC_URL,
  timeout: 30000
});

controller.interceptors.response.use((response) => {
  return response;
}, (error) => {
  return Promise.reject(error);
});

export default controller;
