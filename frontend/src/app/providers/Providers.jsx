// frontend/src/app/providers/Providers.jsx
import HeroProvider from "./HeroProvider.jsx";

export default function Providers({ children }) {
    return (
        <HeroProvider>
            {children}
        </HeroProvider>
    );
}