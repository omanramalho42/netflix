import React, { useState, useEffect } from 'react';

import { GlobalStyle } from './style/global';

import { Layout, Movies } from "./components";

import { DefaultTheme, ThemeProvider } from 'styled-components';
import { Dark, Light } from './style/theme';

export const MoviesGrid = (children: any) => {
  return (
    <div>
      { children }
    </div>
  );
};


const App:React.FC = () => {

  const [theme, setTheme] = useState<DefaultTheme>(Light);
  const handleToggleTheme = () => {
    setTheme((theme) => theme === Light ? Dark : Light);
  }

  return (
    <ThemeProvider theme={theme}>
      <Layout title="Home" description="home">
        <h1 style={{ textAlign: 'center', fontSize: 50 }}>
          Welcome to my app netflix 🦇
        </h1>
        <button 
          style={{ padding: 10, borderRadius: 15, background: 'red' }} 
          onClick={handleToggleTheme}
        >
          toggle theme
        </button>
        {/* <MoviesGrid>
          <Movies />
        </MoviesGrid> */}
        <GlobalStyle />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
