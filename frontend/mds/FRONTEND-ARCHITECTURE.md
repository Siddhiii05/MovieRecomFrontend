# Frontend Architecture Guide

## Quick Start

**Install & Run:**
```bash
cd frontend
npm install
npm start
```

App opens at `http://localhost:3000` by default.

**Key Dependencies:**
- React 18.2.0 (UI framework)
- React Router 6.8.0 (routing)
- Material-UI 4.12.4 & MUI 5.14.0 (component library)
- Axios 1.6.0 (HTTP client)
- React Alice Carousel 2.7.1 (carousel component)

---

## Project Structure

```
frontend/
├── public/              # Static assets served as-is
│   ├── index.html       # HTML shell (mounts React)
│   ├── manifest.json    # PWA metadata
│   ├── robots.txt       # SEO robots directive
│   └── favicon.ico      # Browser tab icon
├── src/
│   ├── index.js         # React entry point (mounts App to #root)
│   ├── App.js           # Main router & layout container
│   ├── App.css          # Global styles
│   ├── Component/       # Reusable components (Header, Footer, Cards)
│   ├── Pages/           # Page-level components (routes map to these)
│   ├── Config/          # API URLs & constants
│   ├── Usereducer/      # Global state management (reducer)
│   └── package.json
```

---

## Routes Map

All routes are defined in [App.js](src/App.js). Nested structure:

| Path | Component | Purpose | Auth Required |
|------|-----------|---------|---|
| `/` | `Landing` | Landing page with banner | No |
| `/home` | `Home` | Main page with carousel/genres | No |
| `/detail/:id/:title` | `Detailview` | Movie detail view | No |
| `/trending` | `TrendingToday` | Trending movies | No |
| `/login` | `Login` | OAuth login page | No (redirects if logged in) |
| `/casts/:id` | `CastDetail` | Actor/cast detail | No |
| `/upcoming` | `Upcoming` | Upcoming movies | No |
| `/search/:id` | `SearchPages` | Search results | No |
| `/recomm/detail/:id/:title` | `RecomDetailView` | Recommended movie detail | No |
| `/filter/:id/:title` | `Filter` | Filtered results | No |
| `*` | `NotFound` | 404 page | - |

**Key notes:**
- Route params are slugs (`:id` = movie/person ID, `:title` = movie name).
- `/login` redirects to `/` if `user` context already exists.
- All pages render inside `BrowserRouter` with `Header` (top) and `Footer` (bottom).

---

## Component Tree (Hierarchical)

### Layout Components
```
App (BrowserRouter)
├── Header
│   └── (Navbar, Logo, Menu, User Info)
├── Routes (page components render here)
└── Footer
    └── (Links, Copyright, etc.)
```

### Page Components (in src/Pages/)

**Landing.jsx**
- Uses `Home/` sub-components (TopBanner, BelowBanner)
- Accepts `funcNav` prop to toggle header visibility

**Home.jsx**
- Multiple carousel components:
  - `Home/Banner.jsx`
  - `Home/Carousel1/Carousel.jsx`
  - `Home/Carousel2/Carousel2.jsx`
  - `Home/Carousel3/Carousel3.jsx`
  - `Home/Carousel4/Carousel4.jsx`
  - `Home/Carousel5/Carousel5.jsx`
  - `Home/Action.jsx`, `Horror.jsx`, `Romance.jsx`, `ScienceFiction.jsx`

**Detailview.jsx**
- Uses `DetailView/` sub-components:
  - `DetailBanner.jsx` (movie poster, title, overview)
  - `DetailBanner2.jsx`
  - `CastCarousel.jsx` (cast list)
  - `RecomCarousel.jsx` (recommended movies)
  - `RecomCarousel2.jsx`
  - `ApiRecomCarousel.jsx`
  - `ApiRecomCarousel2.jsx`

**CastDetail.jsx**
- Uses `CastDetail/` sub-components:
  - `CastDetailBanner.jsx` (actor photo, bio)
  - `CastDetailCarousel.jsx` (actor's movies)
  - `CastPopularMovie.jsx`

**TrendingToday.jsx**, **Upcoming.jsx**, **SearchPages.jsx**
- Similar structure: display lists/grids of movies with filters

**Filter.jsx**, **RecomDetailView.jsx**
- Specialized detail/filter views

**Login.jsx**
- OAuth login integration (likely Google/Facebook)

**NotFound.jsx**
- 404 error page

---

## Global State & Reducer

### State Management

**Location:** [src/Usereducer/Usereducer.js](src/Usereducer/Usereducer.js)

**Reducer:**
```javascript
initialState = null

reducer(state, action):
  - action.type === "user"    → return action.payload (set user)
  - action.type === "CLEAR"   → return null (logout)
  - default                   → return state (no change)
```

**Usage Pattern:**
- `useReducer` likely used in `App.js` or a context provider.
- `userContext` exported from `App.js` for consumption via `useContext()`.

**Data stored:**
- User object (after successful OAuth login) or `null`.

### User Authentication Flow

1. **On app mount** (useEffect in App.js):
   - Fetch `http://localhost:5000/auth/login/success` to check session.
   - If valid (status 200), extract `response.user` and call `setUser()`.
   - On error, `setUser()` remains `null`.

2. **Login page**:
   - Users authenticate via OAuth (external provider).
   - Backend validates and sets session/cookie.
   - On return, user context is populated.

3. **Logout**:
   - Dispatch `{ type: "CLEAR" }` to reducer.
   - Clear user session on backend.

---

## Config & API Integration

### Constants

**Location:** [src/Config/Config.js](src/Config/Config.js)

```javascript
// TMDB (The Movie Database) image URLs
export const img_300 = "https://image.tmdb.org/t/p/w300";  // 300px width
export const img_500 = "https://image.tmdb.org/t/p/w500";  // 500px width

// Fallback images if poster/backdrop unavailable
export const unavailable = "https://www.movienewz.com/img/films/poster-holder.jpg";
export const unavailableLandscape = "https://user-images.githubusercontent.com/.../no-picture.jpg";
export const noPicture = "https://upload.wikimedia.org/.../No_Picture.jpg";
```

### API Calls

**Backend server:** `http://localhost:5000/`

**Common endpoints** (inferred from code):
- `GET /auth/login/success` – Check user session
- `POST /auth/login` – OAuth login redirect
- `GET /auth/logout` – Logout & clear session

**Data source:** TMDB API (The Movie Database) via backend proxy.

**Expected calls from frontend to backend** (use grep/search to find exact endpoints):
- `GET /movies` (or similar) – Fetch trending/upcoming movies
- `GET /movies/:id` – Movie details
- `GET /search/:query` – Search movies
- `GET /person/:id` – Actor/cast details
- `GET /recommendations/:id` – Movie recommendations

---

## Styling & Theming

### Global Styles

- **File:** [src/App.css](src/App.css)
- **Color scheme:** Dark theme (background: `rgb(30, 18, 49)` = dark purple)

### Component Styles

- **File:** [src/Component/style.css](src/Component/style.css)
- **Approach:** Shared CSS for reusable components (Header, Footer, Cards)

### Material-UI Integration

- **V4 (`@material-ui/core`):** Older components, still used in App (e.g., `makeStyles`).
- **V5 (`@mui/material`):** Newer package, likely used for modular components.

**Note:** App has both V4 and V5 installed. Over time, consider migrating fully to V5.

### Inline Styles

- App.js uses `makeStyles()` hook (Material-UI V4) for layout styles.

---

## Data Flow Diagram

```
App.js (entry)
├── State: user (from reducer)
├── Effect: Check session on mount (fetch /auth/login/success)
├── Context: userContext provides user globally
│
├── Routes (pages render based on URL):
│   ├── Landing → TopBanner + BelowBanner
│   ├── Home → Multiple genre carousels
│   ├── Detailview → Movie detail + cast + recommendations
│   ├── CastDetail → Cast bio + movies
│   ├── Trending, Upcoming, Search → Movie lists
│   └── Login → OAuth form
│
└── Shared: Header (top), Footer (bottom)
    ├── Header: Logo, Nav menu, User info
    └── Footer: Links, Info
```

---

## Key Features & Flows

### 1. Movie Discovery
- **Home page** displays trending movies across multiple genre carousels.
- **Carousels** (react-alice-carousel) use reusable Carousel components.
- **Clicks** navigate to `/detail/:id/:title` for detailed view.

### 2. Movie Details
- **Detailview** fetches full movie info (poster, title, plot, cast, recommendations).
- **Cast carousel** shows actors; clicking navigates to `/casts/:id`.
- **Recommendations** displayed at bottom; clicking navigates to `/recomm/detail/:id/:title`.

### 3. Cast Profile
- **CastDetail** shows actor photo, biography, and filmography.
- **Movies** carousel displays actor's popular/recent films.

### 4. Search & Filter
- **SearchPages** renders results for `/search/:query`.
- **Filter** applies genre/year/rating filters.

### 5. User Authentication
- **OAuth login** (external provider) via backend redirect.
- **Session persisted** as cookie; fetched on app load.
- **Header** shows user avatar/name if logged in; "Login" button if not.

---

## Common Tasks & How-To

### Add a New Page
1. Create `src/Pages/NewPage.jsx`.
2. Add route in [App.js](src/App.js) Routes section.
3. Import page component at top of App.js.

### Add a New Component
1. Create file in `src/Component/`.
2. Import and use in page components.
3. Add styles to [src/Component/style.css](src/Component/style.css) or inline.

### Fetch Data
1. Use `axios` or `fetch()` in `useEffect()`.
2. Call backend endpoint at `http://localhost:5000/...`.
3. Update state and render.

### Access User Context
```javascript
import { userContext } from '../App';
const user = useContext(userContext);
```

### Use Carousel
```javascript
import Carousel from 'react-alice-carousel';
// See Home/Carousel1/Carousel.jsx for example usage
```

---

## Known Issues & TODOs

1. **Dual Material-UI versions:** V4 & V5 installed. Plan migration to V5 only.
2. **API endpoints:** Exact backend paths not yet catalogued. Run app and inspect Network tab.
3. **Error handling:** Confirm error UI for failed API calls (loading states, error messages).
4. **Responsive design:** Verify mobile layout on small screens.
5. **Performance:** Optimize carousel rendering for large lists; lazy-load images.

---

## Running & Debugging

### Start Dev Server
```bash
cd frontend
npm start
```

### Build for Production
```bash
npm run build
```

### Run Tests
```bash
npm test
```

### Inspect Component Tree & Props
1. Open browser DevTools.
2. Install React DevTools browser extension.
3. Navigate to a page and inspect component tree, props, and state.

### Network Debugging
1. Open DevTools Network tab.
2. Perform actions (search, navigate to detail, etc.).
3. Capture API request/response payloads for integration testing.

---

## Next Steps for Deep Understanding

1. **Run the app** and interact with all pages.
2. **Use React DevTools** to inspect component props and state.
3. **Capture API calls** in Network tab to understand backend contracts.
4. **Add console.log()** in components to trace data flow.
5. **Read source** of key pages (Home, Detailview, CastDetail) to understand patterns.
6. **Review styling** in Component/style.css and App.css to learn design system.
7. **Check backend logs** to confirm API calls are reaching the server.

---

*Last Updated: Feb 19, 2026*
