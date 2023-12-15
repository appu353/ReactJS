import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./contexts/Theme";
import ThemeBtn from "./components/ThemeButton";
import Card from "./components/Card";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  //If we are declaring function with exactly same name which we are passing in ThemeProvider as value
  //It will be automatically applied to ThemeProvider but name of function should be same.
  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  //How to chnage Theme
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
//We can also wrape in main.jsx so that all app.jsx will be wrapped. Both we can do
