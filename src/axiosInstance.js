import axios from "axios";

const BASE_URL = "https://eduleague-6le7o.ondigitalocean.app/api/v1"; //production
// const BASE_URL = "http://localhost:4000/api/v1"
axios.defaults.withCredentials = true;
export const axiosRequest = axios.create({
  baseURL: BASE_URL,
});
