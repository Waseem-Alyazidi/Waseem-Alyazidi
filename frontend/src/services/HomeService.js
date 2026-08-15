// frontend/src/services/HomeService.js
import { HomeRepository } from "../repositories/HomeRepository.js";
import { loadHomeCache, saveHomeCache } from "../shared/cache/HomeCache.js";

async function fetchAndCacheHomeData() {
    const response = await HomeRepository.getHomeData();

    saveHomeCache(response);

    return response;
}

export const HomeService = {
    async loadHomeData() {
        // Get home cache form localstorage
        const cache = loadHomeCache();

        // If there is no cache, request a new one and save it on localstorage
        if (!cache) {
            return await fetchAndCacheHomeData();
        }

        // Verify that the server data and cache data are the same by checking the version
        const serverVersion = await HomeRepository.getServerVersion();

        if (cache.version !== serverVersion) {
            return await fetchAndCacheHomeData();
        }

        return cache;
    }
}