// frontend/src/repositories/HomeRepository.js
import { homeMock } from "../mocks/home.mock.js";

export const HomeRepository = {
    async getHome() {
        return homeMock;
    }
}