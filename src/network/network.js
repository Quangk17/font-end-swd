import axios from "axios";

export const getUsers = () => axios.get("http://localhost:5236/api/Users/ViewAllOrder");

export const getUser = (id) => axios.get("http://localhost:5236/api/Users/UpdateOrder/" + id);
