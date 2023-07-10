import axios from "axios";

const BASE_URL = "https://eduleague.in/api/v1"; //production

axios.defaults.withCredentials = true;
export const axiosRequest = axios.create({
  baseURL: BASE_URL,
});
