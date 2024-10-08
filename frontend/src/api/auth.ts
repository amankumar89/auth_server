import axios from "axios";

const API_URL = "http://localhost:5000/api/auth"; // Change to your backend URL

export const signup = async (name: string, email: string, password: string) => {
  return axios.post(`${API_URL}/signup`, { name, email, password });
};

export const login = async (email: string, password: string) => {
  return axios.post(`${API_URL}/login`, { email, password });
};

export const getMe = async (token: string) => {
  return axios.get(`${API_URL}/me`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
