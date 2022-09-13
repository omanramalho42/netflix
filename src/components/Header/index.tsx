import React, { useRef } from 'react'

import ToggleSwitch from '../ToggleSwitch';
import { Container } from './styled';

import { Link, useLocation } from 'react-router-dom';

import { 
  HeaderBar, 
  Item, 
  Menu, 
  Logo, 
  Title 
} from './styled';

interface HeaderProps {
  display: 'Home' | 'Movies' | 'Series';
  path: '/' | '/movie' | '/series';
}

const Header:React.FC = () => {

  const headerNav: HeaderProps[] = [
    {
      display: 'Home',
      path: '/',
    },
    {
      display: 'Movies',
      path: '/movie',
    },
    {
      display: 'Series',
      path: '/series',
    },
  ];

  const { pathname } = useLocation();
  const headerRef = useRef(null);

  const active = headerNav
    .findIndex((e) => e.path === pathname);
  
  return (
    <Container>
      <div ref={headerRef} style={{ display: 'flex', width: '100%' }}>
        <HeaderBar>
          <Logo style={{ display: 'flex' }}>
            <img src={''} alt='logo' />
            <Link to=''>Movies</Link>
          </Logo>

          <Menu>
            {headerNav.map((e, i) => (
                <Item
                  active={i === active}
                  key={i} 
                  className={`${i === active ? 'active' : ''}`}
                >
                  <span>
                    { e.display }
                  </span>
                </Item>
              ))}
          </Menu>

        </HeaderBar>
      </div>

      <div 
        style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          alignItems: 'center',
          padding: 10
        }}
      >
        <Title>
          Welcome to my app netflix 🦇
        </Title>
        <ToggleSwitch />
      </div>
    </Container>
  )
}

export default Header