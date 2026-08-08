// frontend/src/app/providers/Providers.jsx
import HomeProvider from "./HomeProvider.jsx";

export default function Providers({ children }) {
    return (
        <HomeProvider>
            {children}
        </HomeProvider>
    );
}