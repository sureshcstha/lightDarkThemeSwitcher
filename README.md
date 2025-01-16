# React Dark/Light Theme Toggle Example

This project is a React-based application that demonstrates dynamic dark/light theme toggling using the Context API and Tailwind CSS.

## Features
* __Theme Toggle__: Switch between dark and light themes using a toggle button.
* __Dynamic Styling__: Styles update seamlessly based on the selected theme.
* __Reusable Components__: Modular components like `Card` and `ThemeBtn` for better scalability.
* __Responsive Design__: Fully responsive UI with Tailwind CSS.

## Tech Stack
* __React__: For building the UI and managing component states.
* __React Context API__: For managing the global theme state.
* __Tailwind CSS__: For fast and efficient styling.
* __JavaScript (ES6)__: For logic and component functionality.

## How it works
1. __Theme Context (theme.js)__: 
    * Provides a `ThemeContext` with `themeMode`, `darkTheme`, and `lightTheme` functions.
    * `useTheme()` custom hook allows components to access the theme context easily.
2. __Theme Application (App.jsx)__: 
    * Manages the global `themeMode` state (`light` or `dark`).
    * Applies the theme by adding/removing the appropriate class (`dark` or `light`) to the `<html>` element using `useEffect`.
3. __Componentst__: 
    * `Card.jsx`
        * Displays a product card with dynamic styles based on the current theme.
    * `ThemeBtn.jsx`
        * Renders a toggle switch to change the theme.
        * Uses the `useTheme` hook to update the theme context.

## Tailwind CSS Configuration
Ensure that Tailwind CSS is set up properly:

The `tailwind.config.js` file enables dark mode using the `class` strategy.

```
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## Usage
1. Toggle the theme using the button in the top-right corner of the app.
2. Observe the styles of the `Card` component change dynamically between light and dark themes.

## Screenshot
![Screenshot of the theme toggle page on dark mode.](/src/assets/theme-toggle.png "This shows theme toggle page on dark mode.")