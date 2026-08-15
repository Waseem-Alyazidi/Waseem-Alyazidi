// frontend/src/repositories/HomeRepository.js
import { fetchHomeData, fetchServerVersion } from "../services/api";

export const HomeRepository = {
    async getHomeData() {
        return await fetchHomeData();
    },

    async getServerVersion() {
        return await fetchServerVersion();
    }
}