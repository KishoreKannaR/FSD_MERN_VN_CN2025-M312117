import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000/api",
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");

  if (token) {
    // ✅ FIX HERE
    req.headers.authorization = `Bearer ${token}`;
  }

  return req;
});

export default API;
