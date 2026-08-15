# Frontend Tests

## FT-001 Frontend Vite Server Startup [v0.0.1] - 2026-07-17
### Objective
Verify that the frontend application starts successfully.

### Steps
1. Open terminal.
2. Navigate to `frontend/`.
3. Run `npm run dev` command.

### Expected Result
Vite server starts successfully.

### Actual Result
```bash
VITE v8.1.5  ready in 157 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help

```
### Status
✅ Pass

## FT-002 Website Header Component Verification [v0.0.2] - 2026-07-30
### Objective
Verify that the header component renders and functions correctly on the local development environment.

### Steps
1. Complete the code implementation for the Header component.
2. Run `npm run dev` in the terminal to start the development server.
3. Open `http://localhost:5173/` in the web browser.
4. Interact with the header component and test its elements.

### Expected Result
- The header component renders properly without any errors.
- Navigation links, scroll progress, and mobile menu function as designed.

### Initial Result (Failed)
```bash
Uncaught TypeError: Failed to resolve import "lucide-react" from "src/components/Header.jsx". Does the file exist?
Issue: The application failed to render due to a missing dependency: lucide-react.
```

### Resolution
Installed the missing package using:
```bash
npm install lucide-react
```
### Re-test Result
- Development server restarted successfully.
- Header component rendered properly on `http://localhost:5173/`.
- All features and interactions worked as expected with icons displayed correctly.

### Status
✅ Pass (Passed after resolution)

## FT-003 Test All Components Verification [v0.3.1] - 2026-08-9
## Objective
Verify that all components render and function correctly using the new mock data without errors.

## Steps
1. Complete the implementation for all remaining components.
2. Run `npm run dev` in the terminal to start the Vite development server.
3. Open `http://localhost:5173/` in the web browser.
4. Verify that all components display mock data properly without any errors.

### Expected Result
- All components render correctly with mock data.
- No console errors or rendering issues appear across all components.

## Result
- All components rendered correctly without any errors.
- Mock data is properly integrated and visible across all UI elements.

## Status
✅ Pass

## FT-004 Home Cache Lifecycle Verification [v0.5.0] - 2026-08-15
### Objective
Verify the complete home cache lifecycle including creation, validation, version checking, refresh, and recovery from invalid cache data.

### Steps
1. Clear localStorage.
2. Open the application.
3. Verify that home data is fetched from the API and cached locally.
4. Reload the application while keeping the same server version.
5. Verify that cached data is used.
6. Change the server version.
7. Reload the application.
8. Verify that fresh data is fetched and cache is updated.
9. Manually corrupt the cache data in localStorage.
10. Reload the application.

### Expected Result
- A new cache is created when none exists.
- Cached data is used when versions match.
- Cache is refreshed when versions differ.
- Invalid cache is automatically removed.
- A new valid cache is generated after recovery.
- No application crashes occur during any scenario.

### Result
- Cache creation verified.
- Cache version validation verified.
- Cache refresh mechanism verified.
- Invalid cache recovery verified.
- Application remained stable throughout testing.

### Status
✅ Pass