import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  
  background-color: ${({ theme }) => 'transparent'};

  justify-content: space-around;
  align-items: center;

  padding: 15px 10px;
`;

export const Content = styled.div`
  display: flex; 
  flex-direction: column; 
  
  justify-content: center; 
  align-items: center;

  padding: 10px;
`;

export const HeaderBar = styled.nav`
  display: flex;
  flex: 1;

  align-items: center; 
  justify-content: space-between; 
`;

export const Menu = styled.ul`
  display: flex;

  list-style: none;
`;

interface MenuItemProps {
  active: boolean;
}

export const Item = styled.li<MenuItemProps>`
  padding: 10px;

  margin: 10px;
  
  span {
    display: inline-block;   
    
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: bold;
    font-size: 1.5em;

    transition: 0.325s;
    &:hover {
      color: ${({ theme }) => theme.colors.effect};
    }

    &::after {
      content: '';
      display: block;
      width: 0;
      height: 2px;
      background: ${({ theme }) => theme.colors.effect};;
      transition: width .3s;
    }

    &:hover::after {
      width: 100%;
      //transition: width .3s;
    }
  }

  cursor: pointer;
`;


export const Logo = styled.div`
  padding: 10px;

  cursor: pointer;
  
  
  /* animation-duration: 3s;
  animation-name: slidein;

  @keyframes slidein {
    from {
      margin-top: 100%;
      width: 100%
    }

    to {
      margin-top: 0%;
      width: 0%;
    }
  } */
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.secondary};
  
  margin-bottom: 10px;
`;