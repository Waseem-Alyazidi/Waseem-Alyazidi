// frontend/src/services/api.js
import httpClient from "./httpClient.js";

export const fetchHomeData = async () => {
    const response = await httpClient.get("/home-data");
    return response.data;
}

export const fetchServerVersion = async () => {
    const response = await httpClient.get("/home-data-version");
    return response.data;
}