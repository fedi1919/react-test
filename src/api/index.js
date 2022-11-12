import axios from "axios";

const API = axios.create({ baseURL: "http://127.0.0.1:8000/api" });

export const singup = (formData) => API.post("/singup", formData);
export const singin = (formData) => API.post("/singin", formData);
