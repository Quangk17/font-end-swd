import axios from 'axios';

export const getUsers = () => axios.get('http://localhost:5236/api/Users/ViewAllOrder');

export const updateUser = (id, user) => axios.put(`http://localhost:5236/api/Users/UpdateOrder/${id}`, user, {
    headers: {
        'Content-Type': 'application/json'
    }
});

export const searchUserID = (id) => axios.get(`http://localhost:5236/api/Users/GetAccountByID/${id}`);

export const deleteUser = (id) => axios.delete(`http://localhost:5236/api/Users/DeleteAccount/${id}`);

export const searchUser = (query) => axios.get(`http://localhost:5236/api/Users/ViewAccountByNameOrEmail?name=${query}`);

export const getCourts = () => axios.get('http://localhost:5236/api/Court/ViewAllCourts');

export const updateCourt = (id, court) => axios.put(`http://localhost:5236/api/Court/UpdateCourt/${id}`, court, {
    headers: {
        'Content-Type': 'application/json'
    }
});

export const deleteCourt = (id) => axios.delete("http://localhost:5236/api/Court/DeleteCourt/" + id);