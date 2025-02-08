import axios from "axios";
const api = axios.create({
  baseURL: "https://food-recipe-app-backend-aaka.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});
api.interceptors.request.use((config) => {
  const authToken = localStorage.getItem("token");
  if (authToken) {
    config.headers.Authorization = `Bearer ${authToken}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {

      localStorage.removeItem("token");
      window.location.href = "/register";
    }
    return Promise.reject(error);
  }
);

export default api;