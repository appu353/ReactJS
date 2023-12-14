import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
}); //We can give default obj in initial state also. We can pass variable and method from createContext.

export const ThemeProvider = ThemeContext.Provider; //exporting variable

//We can create custom hooks here, no need to create one separte file and import it again and again.
export default function useTheme() {
  return useContext(ThemeContext);
}
