import React from 'react';

import { GlobalStyle } from './style/global';

import { ThemeProvider } from './context/ThemeContext';
import Routes from './Routes';

const App:React.FC = () => {
  return (
    <ThemeProvider>
      <Routes />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
