// frontend/src/app/providers/HomeProvider.jsx
import { useEffect, useMemo, useState } from "react";

import { HomeContext } from "../../contexts/HomeContext.js";
import { HomeService } from "../../services/HomeService.js";

export default function HomeProvider({ children }) {
    const [home, setHome] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const loadHome = async () => {
        try {
            setLoading(true);
            setError(null);

            const response = await HomeService.loadHomeData();

            setHome(response);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadHome();
    }, []);

    const value = useMemo(
        () => ({
            home,
            loading,
            error,
            refresh: loadHome,
        }),
        [home, loading, error]
    );

    return (
        <HomeContext.Provider value={value}>
            {children}
        </HomeContext.Provider>
    );
}