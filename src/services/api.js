import axios from "axios";

const api = axios.create({
  baseUrl: "https://www.omdbapi.com?",
});

export default api;
