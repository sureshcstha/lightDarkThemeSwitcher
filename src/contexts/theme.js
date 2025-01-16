import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    // initial state
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

// custom hook that simplifies accessing the ThemeContext using useContext
export default function useTheme() {
    return useContext(ThemeContext);
}