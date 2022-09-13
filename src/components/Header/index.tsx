import React from 'react'

import ToggleSwitch from '../ToggleSwitch';
import { Container } from './styled';

const Header:React.FC = () => {
  return (
    <Container>
      <h1 style={{ textAlign: 'center', fontSize: 50 }}>
        Welcome to my app netflix 🦇
      </h1>
      <ToggleSwitch />
    </Container>
  )
}

export default Header