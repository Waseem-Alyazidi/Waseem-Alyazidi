// frontend/src/contexts/HomeContext.js
import { createContext, useContext } from "react";

export const HomeContext = createContext(null);

export function useHome() {
    const context = useContext(HomeContext);

    if(context === null) {
        throw new Error("useHome must be used within a HomeProvider");
    }

    return context;
}