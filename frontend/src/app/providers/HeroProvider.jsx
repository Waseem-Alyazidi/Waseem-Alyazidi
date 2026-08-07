// frontend/src/app/providers/HeroProvider.jsx
import { useEffect, useMemo, useState } from "react";

import { HeroContext } from "../../context/HeroContext.js";
import { HeroService } from "../../services/HeroService.js";

export default function HeroProvider({ children }) {
    const [hero, setHero] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const loadHero = async () => {
        try {
            setLoading(true);
            setError(null);

            const response = await HeroService.load();

            setHero(response);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadHero();
    }, []);

    const value = useMemo(
        () => ({
            hero,
            loading,
            error,
            refresh: loadHero,
        }),
        [hero, loading, error]
    );

    return (
        <HeroContext.Provider value={value}>
            {children}
        </HeroContext.Provider>
    );
}