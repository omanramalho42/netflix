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
    } else {
      setTheme(Light);
    }
  }

  const toggleTheme = useCallback(() => {
    console.log('click')
    let mode = {};
    if(theme.title === 'light') {
      setTheme(Dark);
      mode = Dark;
    } else {
      setTheme(Light);
      mode = Light;
    }
    
    localStorage.setItem('@theme', JSON.stringify(mode));
  },[theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProviderContainer theme={theme}>
        { children }
      </ThemeProviderContainer>
    </ThemeContext.Provider>
  )
}