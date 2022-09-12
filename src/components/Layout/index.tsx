import React from 'react'

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
      <body>
        { children }
      </body>
    </>
  )
}

export default Layout