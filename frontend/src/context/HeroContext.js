// frontend/src/context/HeroContext.js
import { createContext, useContext } from "react";

export const HeroContext = createContext(null);

export function useHero() {
    const context = useContext(HeroContext);

    if(context === null) {
        throw new Error("useHero must be used within a HeroProvider");
    }

    return context;
}