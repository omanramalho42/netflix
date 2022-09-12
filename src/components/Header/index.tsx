import React from 'react'

import ToggleSwitch from '../ToggleSwitch';

const Header:React.FC = () => {
  return (
    <div style={{ 
      display: 'flex', 
      padding: 10, 
      background: 'red', 
      justifyContent: 'center', 
      alignItems: 'center' }}
    >
      <h1 style={{ textAlign: 'center', fontSize: 50 }}>
        Welcome to my app netflix 🦇
      </h1>
      <ToggleSwitch />
    </div>
  )
}

export default Header