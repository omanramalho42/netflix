import React from 'react'
import { Header, Layout } from '../../components'

const Movies:React.FC = () => {
  return (
    <Layout 
      description='movies' 
      title='Movies'
      loading={false}
    >
      <Header />
      Movies
    </Layout>
  )
}

export default Movies;