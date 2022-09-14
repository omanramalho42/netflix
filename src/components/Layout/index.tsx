import React, { useState, useEffect} from 'react'

import { Container } from './styled';

import { Loading } from '../';

interface LayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const Layout = ({ title, description, children }: LayoutProps) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => 
      setLoading(false), 15000
    );
  },[]);
  return (
    <>
      <head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <Container>
        { loading ? (
          <Loading />
        ) : (
          <>
            { children }
          </>
        )}
      </Container>
    </>
  )
}

export default Layout