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

## [0.3.0] - 2026-08-08
### Added
- Implement Home feature architecture as the central data source for the HomePage.
- Create `HomeContext` for shared HomePage data access.
- Create `HomeProvider` for HomePage state management and data distribution.
- Create `HomeService` as the business layer for HomePage data retrieval.
- Create `HomeRepository` as the data access layer for HomePage content.
- Create versioned Home mock data source (`home.mock.js`) to simulate complete backend responses during development.
- Establish a unified Home data flow to support multiple page sections from a single source.

### Changed
- Replace the Hero-specific architecture with a Home-based architecture.
- Rename `HeroProvider` to `HomeProvider`.
- Rename `HeroContext` to `HomeContext`.
- Rename `HeroService` to `HomeService`.
- Rename `HeroRepository` to `HomeRepository`.
- Rename `hero.mock.js` to `home.mock.js`.
- Refactor application data management from a single-component scope to a page-level scope.
- Update global providers registration to use `HomeProvider`.
- Update HomePage data consumption to use the Home feature as the primary data source.
- Standardize data ownership so all HomePage sections consume data from a shared Home context.
- Prepare the frontend architecture for future integration of Skills, Projects, Education, Certificates, and additional HomePage sections without introducing dedicated providers, services, or repositories for each component.

### Removed
- Remove Hero-specific data ownership responsibilities from the application architecture.

## [0.3.1] - 2026-08-09
### Added
- Add core Home page section components including `About`, `Certificate`, `Contact`, `Education`, `Projects`, `Skills`, and `Experience`.
- Expand `home.mock.js` data structure to fully support all newly added Home page sections.

### Changed
- Update `AppRouter.jsx` to render the global `Footer` component across application routes.
- Update `HomePage.jsx` to assemble and integrate all newly created section components.

## [0.3.2] - 2026-08-10
### Added
- Add `httpClient.js` for centralized HTTP client configuration.
- Add `api.js` for centralized API calls.

### Changed
- Update `HomeRepository.js` to use `api.js` instead of `home.mock.js`.
- Prepare the Frontend for future Backend integration.

### Notes
- Backend integration is not implemented yet.
- API calls are currently prepared for future Backend use.