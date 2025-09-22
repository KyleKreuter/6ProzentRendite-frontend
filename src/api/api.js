import axios from "axios";

export const API_BASE = "http://localhost:8080/api/v1/";

export const api = axios.create({
    baseURL: API_BASE,
    timeout: 10_000,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});

