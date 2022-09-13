import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  
  background-color: ${({ theme }) => theme.colors.header};

  justify-content: space-around;
  align-items: center;

  padding: 15px 10px;
`;