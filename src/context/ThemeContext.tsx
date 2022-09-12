import { createContext, useCallback, useEffect, useState } from "react";
import { Dark, Light } from "../style/theme";

import { DefaultTheme, ThemeProvider as ThemeProviderContainer } from "styled-components";

export const ThemeContext = createContext({
  theme: Light,
  toggleTheme: () => {},
});

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {

  const [theme, setTheme] = useState<DefaultTheme>(Light);

  useEffect(() => {
    loadTheme();
  },[]);
  
  async function loadTheme () {
    const savedTheme: any = await localStorage.getItem('@theme');
    if(savedTheme) {
      setTheme(JSON.parse(savedTheme));
    }
  }

  const toggleTheme = useCallback(() => {
    if(theme === Light) {
      setTheme(Dark);
    } else {
      setTheme(Light);
    }
    localStorage.setItem('@theme', JSON.stringify(theme));
  },[theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProviderContainer theme={theme}>
        { children }
      </ThemeProviderContainer>
    </ThemeContext.Provider>
  )
}