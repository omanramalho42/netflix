import React from 'react';

import { 
  Header, 
  Layout, 
  Movies,
  MovieSlider
} from '../../components';

import { Container } from './styled';

const Home: React.FC = () => {
  return (
    <Layout 
      title='Home' 
      description='home'
    >
      <Container>
        <Header />
        <MovieSlider />
        <Movies />
      </Container>
    </Layout>
  )
}

export default Home;