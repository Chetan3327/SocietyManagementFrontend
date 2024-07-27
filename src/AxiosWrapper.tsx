import axios, { AxiosInstance } from "axios";

// Configure your base URL here
const AxiosWrapper: AxiosInstance = axios.create({
  baseURL: "https://societybackend-go.onrender.com", // Replace with your backend API URL
});

export default AxiosWrapper;
