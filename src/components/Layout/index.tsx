import React, { useState, useEffect} from 'react'

import { Container } from './styled';

import { Loading } from '../';

interface LayoutProps {
  title: string;
  description: string;
  loading: boolean;
  children: React.ReactNode;
}

const Layout = ({ title, description, children, loading }: LayoutProps) => {
  return (
    <>
      {/* <head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="https://down.imgspng.com/download/0720/netflix_PNG22.png" />
      </head> */}
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