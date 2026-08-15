// frontend/src/shared/cache/HomeCache.js
import { CACHE_KEYS } from "./cacheKeys.js";

// Validate home cache
function isValidHomeCache(cache) {
    return (
        typeof cache === "object"
        && cache !== null
        && typeof cache.version === "string"
        && typeof cache.data === "object"
        && cache.data !== null
    );
}

// Load home cached data form localStorage
export function loadHomeCache() {
    // Try load the cache
    const rawCache = localStorage.getItem(CACHE_KEYS.HOME_DATA);

    // Cache is empty, exit
    if (!rawCache) {
        return null;
    }

    try {
        const parsedCache = JSON.parse(rawCache);

        // If not valid, remove corrupt cache 
        if (!isValidHomeCache(parsedCache)) {
            clearHomeCache();
            return null;
        }

        return parsedCache;
    } catch {
        clearHomeCache();
        return null;
    }
}

// Save the given payload JSON to home cache
export function saveHomeCache(payload) {
    if (!isValidHomeCache(payload)) {
        throw new Error("Invalid Home cache payload")
    }

    try {
        localStorage.setItem(
            CACHE_KEYS.HOME_DATA,
            JSON.stringify(payload)
        );
    } catch (err) {
        throw new Error(`Failed to save home cache: ${err.message}`)
    }
}

// Clear home cache form localStorage
export function clearHomeCache() {
    localStorage.removeItem(CACHE_KEYS.HOME_DATA);
}