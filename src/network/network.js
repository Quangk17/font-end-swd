import axios from "axios";

export const getCourts = () => axios.get("http://localhost:5236/api/Court/ViewAllCourts");
