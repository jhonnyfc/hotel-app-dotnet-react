import axios from "axios";

const API_URL = "https://localhost:7251";

export const http = axios.create({ baseURL: API_URL });
