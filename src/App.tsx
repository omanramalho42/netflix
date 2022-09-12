import React, { useEffect, useState } from 'react';

import { GlobalStyle } from './style/global';

import { Header, Layout, Movies } from "./components";

import { Dark, Light } from './style/theme';
// import { ThemeProvider } from 'styled-components';

import { ThemeProvider } from './context/ThemeContext';
import Routes from './Routes';

export const MoviesGrid = (children: any) => {
  return (
    <div>
      { children }
    </div>
  );
};

const App:React.FC = () => {
  return (
    <ThemeProvider>
      <Layout title="Home" description="home">
        <Routes />
        <GlobalStyle />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
