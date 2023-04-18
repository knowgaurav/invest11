import axios from "axios";

const api = axios.create({
  baseURL: "https://invest11-z9g7.vercel.app/",
});

export default api;
