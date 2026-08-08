// frontend/src/services/HomeService.js
import { HomeRepository } from "../repositories/HomeRepository.js";

export const HomeService = {
    async load() {
        return HomeRepository.getHome();
    }
}