import axios from "axios";

const API_URL = "http://localhost:5131";

export const http = axios.create({ baseURL: API_URL });
