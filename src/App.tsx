import React from 'react';
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
      <div>
        <MoviesGrid>
          <Movies />
        </MoviesGrid>
      </div>
    </Layout>
  );
};

export default App;
