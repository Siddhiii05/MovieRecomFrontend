# UNIT TEST CASES

This document provides detailed unit test cases for all modules in the MovieRecomFrontend application.

---

## 1. Header Component - Unit Test Cases

| Test Case ID | Test Case Description | Test Steps | Expected Result | Status |
|--------------|------------------------|-------------|-----------------|--------|
| TC-H-001 | Renders Header component without crashing | 1. Render Header component with user=null | Component renders without errors | ⏳ PENDING |
| TC-H-002 | Displays login button when user is null | 1. Render Header with user=null 2. Check for login button | Login button should be visible | ⏳ PENDING |
| TC-H-003 | Displays user profile when user is provided | 1. Render Header with user={name: 'Test User', profilePic: 'url'} | User name should be displayed | ⏳ PENDING |
| TC-H-004 | Renders search input field | 1. Render Header component | Search input should be present | ⏳ PENDING |
| TC-H-005 | Renders navigation links | 1. Render Header component | Navigation links should be visible | ⏳ PENDING |
| TC-H-006 | Scroll behavior changes background color | 1. Render Header 2. Simulate scroll event | Background should change on scroll | ⏳ PENDING |
| TC-H-007 | Logout functionality triggers logout API | 1. Render Header with user 2. Click logout button | Logout should clear user state | ⏳ PENDING |

---

## 2. Footer Component - Unit Test Cases

| Test Case ID | Test Case Description | Test Steps | Expected Result | Status |
|--------------|------------------------|-------------|-----------------|--------|
| TC-F-001 | Renders Footer component without crashing | 1. Render Footer component | Component renders without errors | ⏳ PENDING |
| TC-F-002 | Displays social media links | 1. Render Footer 2. Check for Instagram icon | Social media links should be visible | ⏳ PENDING |
| TC-F-003 | Renders search input | 1. Render Footer component | Search input should be present | ⏳ PENDING |
| TC-F-004 | Displays copyright text | 1. Render Footer component | Copyright text should be visible | ⏳ PENDING |
| TC-F-005 | Displays dynamic year from current date | 1. Render Footer component | Current year should be displayed | ⏳ PENDING |

---

## 3. GenreSort Component - Unit Test Cases

| Test Case ID | Test Case Description | Test Steps | Expected Result | Status |
|--------------|------------------------|-------------|-----------------|--------|
| TC-GS-001 | Renders GenreSort component without crashing | 1. Render GenreSort component | Component renders without errors | ⏳ PENDING |
| TC-GS-002 | Displays genre buttons | 1. Render GenreSort 2. Check for genre buttons | At least one button should be visible | ⏳ PENDING |
| TC-GS-003 | Renders multiple genre options | 1. Render GenreSort component | Multiple genre buttons should be present | ⏳ PENDING |

---

## 4. Landing Page - Unit Test Cases

| Test Case ID | Test Case Description | Test Steps | Expected Result | Status |
|--------------|------------------------|-------------|-----------------|--------|
| TC-LP-001 | Renders Landing page without crashing | 1. Render Landing page with funcNav prop | Page renders without errors | ⏳ PENDING |
| TC-LP-002 | Displays welcome message | 1. Render Landing page | Welcome text should be visible | ⏳ PENDING |
| TC-LP-003 | Renders call to action buttons | 1. Render Landing page | At least one button should be present | ⏳ PENDING |

---

## 5. NotFound Page - Unit Test Cases

| Test Case ID | Test Case Description | Test Steps | Expected Result | Status |
|--------------|------------------------|-------------|-----------------|--------|
| TC-NF-001 | Renders 404 page without crashing | 1. Render NotFound page | 404 page should render | ⏳ PENDING |
| TC-NF-002 | Displays page not found message | 1. Render NotFound page | "Page not found" text should be visible | ⏳ PENDING |
| TC-NF-003 | Displays back to home button | 1. Render NotFound page | Button should be present | ⏳ PENDING |

---

## 6. numberWithCommas Utility - Unit Test Cases

| Test Case ID | Test Case Description | Test Steps | Expected Result | Status |
|--------------|------------------------|-------------|-----------------|--------|
| TC-NWC-001 | Formats positive numbers with commas | 1. Call numberWithCommas(1000000) | Returns "1,000,000" | ⏳ PENDING |
| TC-NWC-002 | Formats zero | 1. Call numberWithCommas(0) | Returns "0" | ⏳ PENDING |
| TC-NWC-003 | Formats small numbers | 1. Call numberWithCommas(100) | Returns "100" | ⏳ PENDING |
| TC-NWC-004 | Formats numbers with thousands | 1. Call numberWithCommas(10000) | Returns "10,000" | ⏳ PENDING |
| TC-NWC-005 | Formats large numbers | 1. Call numberWithCommas(100000000) | Returns "100,000,000" | ⏳ PENDING |
| TC-NWC-006 | Handles empty string input | 1. Call numberWithCommas("") | Returns empty string | ⏳ PENDING |
| TC-NWC-007 | Handles null input | 1. Call numberWithCommas(null) | Returns null or handles gracefully | ⏳ PENDING |
| TC-NWC-008 | Formats negative numbers | 1. Call numberWithCommas(-1000) | Returns "-1,000" | ⏳ PENDING |

---

## 7. Usereducer - Unit Test Cases

| Test Case ID | Test Case Description | Test Steps | Expected Result | Status |
|--------------|------------------------|-------------|-----------------|--------|
| TC-UR-001 | Returns initial state for unknown action | 1. Call reducer(null, {type: 'UNKNOWN'}) | Returns null | ⏳ PENDING |
| TC-UR-002 | Handles "user" action with payload | 1. Call reducer(null, {type: 'user', payload: {name: 'Test'}}) | Returns user object | ⏳ PENDING |
| TC-UR-003 | Handles "user" action updating existing state | 1. Call reducer({name: 'Old'}, {type: 'user', payload: {name: 'New'}}) | Returns new user object | ⏳ PENDING |
| TC-UR-004 | Handles "CLEAR" action | 1. Call reducer({name: 'Test'}, {type: 'CLEAR'}) | Returns null | ⏳ PENDING |
| TC-UR-005 | Handles "CLEAR" action when already null | 1. Call reducer(null, {type: 'CLEAR'}) | Returns null | ⏳ PENDING |

---

## 8. Carousel Components - Unit Test Cases (Carousel1 Example)

| Test Case ID | Test Case Description | Test Steps | Expected Result | Status |
|--------------|------------------------|-------------|-----------------|--------|
| TC-C1-001 | Renders Carousel1 with mock data | 1. Render Carousel with mock data | Displays movies | ⏳ PENDING |
| TC-C1-002 | Displays correct movie posters | 1. Render Carousel with mock data | Posters should be visible | ⏳ PENDING |
| TC-C1-003 | Navigation controls function | 1. Render Carousel 2. Click next/prev buttons | Navigation works | ⏳ PENDING |
| TC-C1-004 | Click navigation to detail pages | 1. Render Carousel 2. Click on movie | Navigates to detail page | ⏳ PENDING |
| TC-C1-005 | Handles empty data gracefully | 1. Render Carousel with empty array | Shows empty state | ⏳ PENDING |
| TC-C1-006 | Handles missing poster images | 1. Render Carousel with missing poster | Placeholder shows | ⏳ PENDING |

---

## 9. DetailBanner Component - Unit Test Cases

| Test Case ID | Test Case Description | Test Steps | Expected Result | Status |
|--------------|------------------------|-------------|-----------------|--------|
| TC-DB-001 | Displays movie title | 1. Render DetailBanner with movie data | Title should be visible | ⏳ PENDING |
| TC-DB-002 | Displays poster image | 1. Render DetailBanner with movie data | Poster should render | ⏳ PENDING |
| TC-DB-003 | Displays release date | 1. Render DetailBanner with movie data | Date should be formatted | ⏳ PENDING |
| TC-DB-004 | Displays runtime (hours/minutes) | 1. Render DetailBanner with movie data | Runtime should be shown | ⏳ PENDING |
| TC-DB-005 | Displays vote average | 1. Render DetailBanner with movie data | Rating should be visible | ⏳ PENDING |
| TC-DB-006 | Displays budget with separators | 1. Render DetailBanner with movie data | Budget should be formatted | ⏳ PENDING |
| TC-DB-007 | Displays revenue with separators | 1. Render DetailBanner with movie data | Revenue should be formatted | ⏳ PENDING |
| TC-DB-008 | Displays overview synopsis | 1. Render DetailBanner with movie data | Overview should be visible | ⏳ PENDING |
| TC-DB-009 | Displays cast carousel | 1. Render DetailBanner with movie data | Cast should be shown | ⏳ PENDING |

---

## 10. Banner Component - Unit Test Cases

| Test Case ID | Test Case Description | Test Steps | Expected Result | Status |
|--------------|------------------------|-------------|-----------------|--------|
| TC-B-001 | Renders Banner component without crashing | 1. Render Banner component | Component renders | ⏳ PENDING |
| TC-B-002 | Displays movie title | 1. Render Banner with title | Title visible | ⏳ PENDING |
| TC-B-003 | Displays backdrop image | 1. Render Banner with image | Image renders | ⏳ PENDING |
| TC-B-004 | Displays overview text | 1. Render Banner with overview | Overview visible | ⏳ PENDING |

---

## Summary of Unit Test Cases

| Module | Number of Test Cases |
|--------|---------------------|
| Header Component | 7 |
| Footer Component | 5 |
| GenreSort Component | 3 |
| Landing Page | 3 |
| NotFound Page | 3 |
| numberWithCommas Utility | 8 |
| Usereducer | 5 |
| Carousel Components | 30 (6 per carousel × 5) |
| DetailBanner Component | 9 |
| Banner Component | 4 |
| **TOTAL** | **77** |

---

*Document: Unit Test Cases*
*Application: MovieRecomFrontend*
*Version: 1.0.0*
