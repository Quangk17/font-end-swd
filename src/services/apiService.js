import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://localhost:7017/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getCourts = async () => {
  try {
    const response = await apiClient.get("/courts");
    return response.data;
  } catch (error) {
    console.error("Error fetching courts:", error);
    throw error;
  }
};

export const createCourt = async (court) => {
  try {
    const response = await apiClient.post("/courts", court);
    return response.data;
  } catch (error) {
    console.error("Error creating court:", error);
    throw error;
  }
};
