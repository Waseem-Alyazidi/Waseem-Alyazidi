// frontend/src/repositories/HeroRepository.js
import { heroMock } from "../mocks/hero.mock.js";

export const HeroRepository = {
    async getHero() {
        return heroMock;
    }
}