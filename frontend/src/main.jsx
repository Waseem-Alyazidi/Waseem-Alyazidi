// frontend/src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import Providers from "./app/providers/Providers.jsx";
import App from "./app/App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Providers>
            <App />
        </Providers>
    </React.StrictMode>
);