import axios from "axios";

const API_BASE_URL = "http://localhost:8081/api"; // adjust to your backend

// Registration API
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/register`, userData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    // Bubble up error to caller
    throw error.response ? error.response.data : error;
  }
};
