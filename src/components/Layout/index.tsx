import React from 'react'
import Header from '../Header';

import { Container } from './styled';

interface LayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const Layout = ({ title, description, children }: LayoutProps) => {
  return (
    <>
      <head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <Container>
        { children }
      </Container>
    </>
  )
}

export default Layout