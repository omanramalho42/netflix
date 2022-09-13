import React, { useRef } from 'react';

import 'swiper/css';

import ToggleSwitch from '../ToggleSwitch';
import { Container } from './styled';

import { Link, useLocation } from 'react-router-dom';

import {
  Content,
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
            <img src={'https://down.imgspng.com/download/0720/netflix_PNG22.png'} alt='logo' style={{ width: '200px' }} />
            {/* <Link to=''>Movies</Link> */}
          </Logo>

          <Menu>
            {headerNav.map((e, i) => (
                <Item
                  active={i === active}
                  key={i} 
                  className={`${i === active ? 'active' : ''}`}
                >
                  <span className='cool-link'>
                    { e.display }
                  </span>
                </Item>
              ))}
          </Menu>

        </HeaderBar>
      </div>

      <Content>

        <Title>
          Welcome to my app netflix 🦇
        </Title>
        <ToggleSwitch />
      </Content>

    </Container>
  )
}

export default Header