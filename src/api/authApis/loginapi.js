import axios from "axios";

const API_BASE_URL = "https://sms-backend-production-11bc.up.railway.app/api";

// Login API - improved version
export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, userData, {
      headers: {
        "Content-Type": "application/json",
      },
      // Add withCredentials if using cookies/sessions
      // withCredentials: true
    });
    return response.data;
  } catch (error) {
    // Improved error handling
    if (error.response) {
      // Server responded with error status
      throw {
        message: error.response.data.message || "Login failed",
        status: error.response.status,
        data: error.response.data
      };
    } else if (error.request) {
      // Network error - no response received
      throw {
        message: "Network error. Please check your connection.",
        status: null
      };
    } else {
      // Other errors
      throw {
        message: error.message || "An unexpected error occurred",
        status: null
      };
    }
  }
};