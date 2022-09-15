import styled from "styled-components";
interface ButtonProps {
  color: 'primary' | 'secondary' | 'effect'
};

export const Container = styled.button<ButtonProps>`
  all: unset;

  text-align: center;
  
  padding: 15px;

  background-color: ${({ theme, color }) => 
    color === 'effect' 
    ? theme.colors.effect
    : color === 'primary'
    ? theme.colors.primary
    : ''
  };

  border: ${({ color }) => color === 'secondary' ? `3px solid #fff` : '3px solid transparent'};

  color: ${({ theme }) => theme.colors.secondary};
  font-weight: bold;
  font-size: 1.2em;

  width: 160px;
  
  border-radius: 25px;

  box-shadow: ${({ color, theme }) => color === 'effect' && `0 0 12px 6px ${theme.colors.effect_shadow}`};

  transition: 0.325s;
  &:hover {
    background-color: ${({ theme, color }) => 
      color === 'secondary' 
      && '#fff'
    };
    color: ${({ theme,color }) => color === 'secondary' && theme.colors.effect};
    transform: scale(1.1);
  }
`;