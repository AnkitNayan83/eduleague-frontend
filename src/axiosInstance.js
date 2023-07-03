import axios from "axios";

const BASE_URL = "http://localhost:4000/api/v1"; //devlopment
// const BASE_URL = ""; //production

axios.defaults.withCredentials = true;
export const axiosRequest = axios.create({
  baseURL: BASE_URL,
});
