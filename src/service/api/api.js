
import axios from "axios";

export const  api = () => axios.create({
     Headers:{
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    },
         baseURL: "https://food-recipe-app-backend-aaka.onrender.com/"
});

api.interceptors.request.use((config) => {
    const authToken = localStorage.getItem("token");
    if (authToken) {
      config.headers.Authorization = `Bearer ${authToken}`;
    }
    return config;
  });

axios.interceptors.response.use(
    (response) => response,
    (error) => {
        const status = error.response? error.response.status : null;
      if (error.response.status === 401) {
        localStorage.removeItem("token");
        window.location.href = "/register";
      }
      return Promise.reject(error);
    }
  ); 