import React from 'react'
import { Container } from './styled';

interface ButtonProps {
  title?: string;
  color: 'primary' | 'secondary' | 'effect';
  onClick: () => void;
};

const Button = ({ 
  title, 
  color, 
  onClick 
}: ButtonProps) => {
  return (
    <Container 
      color={color} 
      onClick={() => onClick}
    >
      { title }
    </Container>
  )
}

export default Button