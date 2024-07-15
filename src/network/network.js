/* eslint-disable */
import axios from "axios";

export const getUsers = () => axios.get("http://localhost:5236/api/Users/ViewAllOrder");

export const getCourts = () => axios.get("http://localhost:5236/api/Court/ViewAllCourts");

export const getUpdateAccount = (id) => axios.put("http://localhost:5236/api/Users/UpdateOrder/" + id);

export const getDeleteAccount = (id) => axios.delete("http://localhost:5236/api/Users/DeleteAccount/" + id);

export const getUpdateCourt = (id) => axios.put("http://localhost:5236/api/Court/UpdateCourt/" + id);

export const getDeleteCourt = (id) => axios.delete("http://localhost:5236/api/Court/DeleteCourt/" + id);
