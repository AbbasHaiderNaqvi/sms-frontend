// src/api/authApis/loginapi.js
import axios from "axios";

export const loginUser = async (data) => {
  const response = await axios.post("http://localhost:8081/api/login", data, {
    withCredentials: true // if you’re using cookies for refresh token
  });
  return response.data;
};
