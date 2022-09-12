import styled from "styled-components";

export const Container = styled.body`
  flex: 1;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};
`;