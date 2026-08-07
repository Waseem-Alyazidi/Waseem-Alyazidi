// frontend/src/services/HeroService.js
import { HeroRepository } from "../repositories/HeroRepository.js";

export const HeroService = {
    async load() {
        return HeroRepository.getHero();
    }
}