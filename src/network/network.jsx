import axios from 'axios';

export const getUsers = () => axios.get('http://localhost:5236/api/Users/ViewAllOrder');

export const getCourts = () => axios.get('http://localhost:5236/api/Court/ViewAllCourts');
