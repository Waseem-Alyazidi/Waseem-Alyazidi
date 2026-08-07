# Changelog

## [0.0.1] - 2026-07-17
### Added
- Initialize the project structure.

## [0.0.2] - 2026-07-17
### Added
- Tests units.
- Start the server with "Hello World" for testing.

## [0.0.3] - 2026-07-30
### Added
- Implement the website header component.
- Add navigation links for page sections.
- Add mobile navigation menu support.
- Add scroll progress tracking.
- Add active section highlighting.
- Add `lucide-react` library for navigation icons.
- Add app version tagging to test documentation (`docs/testing/FT.md`).

### Changed
- Reinitialize the npm configuration.
- Reinstall and configure project dependencies.
- Update `frontend/src/app/App.jsx` to render the Header component temporarily for testing.

### Fixed
- Restore the Vite development environment.
- Fix package configuration issues.

## [0.0.4] - 2026-08-02
### Added
- Implement the HomePage structure.
- Save before install `react-router-dom` for routing.
- Save `package-lock.json` and `package.json` in `frontend/backup/` for backup.

## [0.1.0] - 2026-08-02
### Added
- Integrate `react-router-dom` for application routing.
- Create `AppRouter.jsx` to manage global page layouts and navigation paths.
- Connect `Header` and `HomePage` components within `AppRouter`.

## [0.1.1] - 2026-08-06
## Added
- Implement NotFoundPage.

## Changed
- Update `AppRouter.jsx` to support NotFoundPage.
- Add `frontend/backup` to .gitignore.

## [0.2.0] - 2026-08-07
### Added
- Implement Hero feature foundation using Context, Provider, Service, Repository, and Mock architecture.
- Create `HeroContext` and `useHero()` hook for Hero state access.
- Create `HeroProvider` for Hero state management and data loading.
- Create `HeroService` as the business layer for Hero data retrieval.
- Create `HeroRepository` as the data access layer.
- Create versioned Hero mock data source (`hero.mock.js`) to simulate backend responses during development.
- Implement the Hero component structure.
- Add loading and error state handling for Hero data requests.
- Add support for Hero content, CTA actions, availability status, location information, and profile image data.
- Add Hero provider registration to the global application providers.

### Changed
- Update `HomePage.jsx` to render the Hero component after completing the Hero feature implementation.

### Fixed
- Correct Hero context initialization by using `createContext()` instead of `useContext()`.
- Prevent Hero rendering before data becomes available.
- Improve initial Hero loading state behavior.
