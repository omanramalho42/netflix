import React from 'react';

import { GlobalStyle } from './style/global';

import { Layout, Movies } from "./components";


export const MoviesGrid = (children: any) => {
  return (
    <div>
      { children }
    </div>
  );
};

const App:React.FC = () => {
  return (
    <Layout title="Home" description="home">
      <h1 style={{ textAlign: 'center', fontSize: 50 }}>
        Welcome to my app netflix 🦇
      </h1>
      {/* <MoviesGrid>
        <Movies />
      </MoviesGrid> */}
      <GlobalStyle />
    </Layout>
  );
};

export default App;
