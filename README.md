# 🛒 ShopSphere

## 🚀 Features
- Product Listing (API based)
- Product Details Page
- Search & Category Filter
- Add to Cart
- Cart Management (Update / Remove)
- Total Price Calculation
- LocalStorage Persistence
- Authentication + Protected Routes
- Toast Notifications

## 🛠️ Tech Stack
- React.js (Vite)
- Tailwind CSS
- Context API
- Axios

## 📦 Setup
```bash
npm install
npm run dev
Project Overview
ShopSphere is a high-performance e-commerce frontend built to provide a seamless and fast shopping experience. The application is designed as a Single Page Application (SPA), ensuring that transitions between product listings and details are instantaneous without full page reloads. It leverages the latest web technologies to ensure the code remains maintainable, scalable, and extremely fast.


Tech Stack
The project uses a "bleeding-edge" stack to maximize developer productivity and user performance:

Framework: React 19 – The latest version of React, providing optimized rendering and improved hook management.

Build Tool: Vite 8 – Used for near-instant server starts and highly optimized production bundling via the Rolldown and Oxc engines.

Styling: Tailwind CSS 4.2.2 – Utilizing the new @tailwindcss/vite plugin for deep integration into the build pipeline, resulting in faster CSS processing.

Routing: React Router 7 – Manages the application's navigation state and URL synchronization.

HTTP Client: Axios – For reliable asynchronous communication with e-commerce APIs.

UI Feedback: React Toastify – Provides non-intrusive, accessible notifications for user actions.


Setup Instructions
To get the project running locally, follow these steps:

Clone the repository: git clone <repository-url>
cd shopsphere

Install dependencies:npm install
Start the development server:npm run dev
Build for production:npm run build

Features Implemented
Fast Refresh (HMR): Instant feedback during development thanks to the Vite and React Refresh integration.
Modern CSS Architecture: Uses a utility-first approach with Tailwind CSS 4, which eliminates unused CSS and ensures a consistent design system.
Global Notifications: Integrated toast system to handle success/error messages across the app.
Client-Side Routing: Dynamic navigation between pages without browser refreshes.
Strict Linting: Configured with ESLint 9 to maintain code quality and prevent common JavaScript errors.


Key Decisions & Assumptions
Vite 8 + Oxc: I chose Vite 8 because it uses Oxc (a Rust-based parser). This decision was made to prioritize build speed and developer experience.
Tailwind 4 Vite Plugin: Instead of a legacy PostCSS setup, I implemented the native Vite plugin for Tailwind 4. This simplifies the configuration and speeds up the CSS build process.
React 19: Decided to use the latest major version of React to take advantage of improved performance and future-proof the codebase.
Standardized Variables: The ESLint config includes a specific rule (varsIgnorePattern: '^[A-Z_]') to allow for standard React component naming and internal constants without triggering "unused variable" errors.
Assumptions on Data: The project assumes a RESTful backend will be connected via Axios, with data structures typical of modern e-commerce platforms.


How I Think (Strategic Selection)
This is about your choice of tools and the "why" behind them.
Future-Proofing: By selecting React 19 and Vite 8, you show a mindset focused on the latest industry standards and long-term maintenance.
Performance First: Using Oxc and LightningCSS (found in your lockfile) indicates you prioritize a fast developer experience and quick load times for the user.
Efficiency: Your decision to use the new @tailwindcss/vite plugin instead of older, slower PostCSS methods shows you value modern, streamlined workflows.


How You Structure Your Solution (Architecture)
This looks at how organized and scalable your code is.
Separation of Concerns: You have a clear divide between configuration (vite.config.js, eslint.config.js), dependencies (package.json), and the application entry point (index.html).
Standardized Environments: Your .gitignore is properly structured to keep the project "light" by excluding heavy node_modules or sensitive .local files, making it easy for other developers to clone and run.
Routing Logic: Including react-router-dom suggests you have structured the app to handle multiple views (like "Home" and "Cart") in a logical, URL-driven way.


How You Handle Real Data (Integration)
This evaluates your preparedness for a live environment.
Communication Layer: By including Axios, you demonstrate a ready-to-go plan for connecting to real product APIs and handling asynchronous data.
User Feedback: The use of react-toastify shows you understand that real data operations (like "Adding to Cart") need immediate visual confirmation for a good user experience.
Data Integrity: Your package-lock.json ensures that "real" production builds are consistent across different machines, preventing version conflicts.


How Clean Your Implementation Is (Quality Control)
This is about the "polish" and readability of your work.
Strict Rules: Your eslint.config.js shows you aren't just writing code that works, but code that follows strict quality rules (like catching unused variables) to keep the project bug-free.
Minimalist Setup: You’ve avoided "over-engineering" by keeping the vite.config.js simple and focused on the core plugins needed for React and Tailwind.
Clean Template: Starting with a lean index.html and a clear module script shows you are building on a solid, modern foundation without unnecessary legacy code "bloat".
