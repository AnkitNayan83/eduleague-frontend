import axios from "axios";

const BASE_URL = "https://eduleague-6le7o.ondigitalocean.app/api/v1"; //production

axios.defaults.withCredentials = true;
export const axiosRequest = axios.create({
  baseURL: BASE_URL,
});
