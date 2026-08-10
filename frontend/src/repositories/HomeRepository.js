// frontend/src/repositories/HomeRepository.js
import { fetchHomeData } from "../services/api";

export const HomeRepository = {
    async getHome() {
        return fetchHomeData()
    }
}