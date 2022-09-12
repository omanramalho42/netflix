import React from 'react'
import { Header, Layout, Movies } from '../../components'

import { Container } from './styled'

const Home: React.FC = () => {
  return (
    <Layout 
      title='Home' 
      description='home'
    >
      <Container>
        <Header />
        <Movies />
      </Container>
    </Layout>
  )
}

export default Home;