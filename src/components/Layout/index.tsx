import React from 'react'

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
        <title>{ title }</title>
        <meta title={description} />
        <link charSet='utf8'/>
      </head>
      <Container>
        { children }
      </Container>
    </>
  )
}

export default Layout