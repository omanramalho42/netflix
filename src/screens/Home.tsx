import React from 'react'
import { Header, Layout, Movies } from '../components'

const Home: React.FC = () => {
  return (
    <Layout title='Home' description='home'>
      <Header />
      <Movies />
    </Layout>
  )
}

export default Home