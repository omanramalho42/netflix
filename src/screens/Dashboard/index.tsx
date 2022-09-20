import React from 'react'

import { 
  Header, 
  Layout 
} from '../../components';

const Dashboard:React.FC = () => {

  return (
    <Layout 
      loading={true}
      title='dashboard' 
      description='dashboard'
    >
      <Header />
      <h1 style={{ color: 'black' }}>
        Dashboard
      </h1>
    </Layout>
  )
}

export default Dashboard;