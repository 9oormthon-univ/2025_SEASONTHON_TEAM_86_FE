import axios from "axios";

const _client = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL + "api",
});

export default _client;
