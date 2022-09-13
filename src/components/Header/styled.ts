import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  
  background-color: ${({ theme }) => 'transparent'};

  justify-content: space-around;
  align-items: center;

  padding: 15px 10px;
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

  color: ${({ theme }) => theme.colors.secondary};

  font-weight: bold;
  
  transition: 0.325s;
  &:hover {
    color: ${({ theme }) => 'red'};
  }

  span {
    padding: 5px;
    border-bottom: ${({ active }) => active && `2px solid red`};
  }

  cursor: pointer;
`;


export const Logo = styled.div`
  padding: 10px;

  cursor: pointer;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.secondary};
  
  margin-bottom: 10px;
`;