import styled from "styled-components";

interface ModalProps {
  show: boolean;
}

export const Container = styled.div<ModalProps>`
  display: flex;
  flex: 1;

  flex-direction: column;

  align-items: flex-end;

  position: absolute;

  padding: 10px;

  top: 20%;
  left: 35%;

  @media screen and (max-width: 700px) {
    left: 0%;
  }

  border-radius: 15px;
  
  z-index: 100000000000;

  transition: all 0.3s ease-in-out;

  animation-name: rendering;
  animation-duration: 1.25s;
  animation-fill-mode: forwards;

  @keyframes rendering {
    from {
      top: -20px;
      pointer-events: none;
      opacity: 0;
    }
    to {
      pointer-events: visible;
      opacity: 1;
      top: 20%;
    }
  }

  background-color: ${({ theme }) => 
    theme.colors.header
  };

  img {
    display: flex;
    width: 100%;

    max-width: 600px;

    border-radius: 15px;
  }
`;

export const Close = styled.div`
  display: flex;

  padding: 10px;

  color: red;

  cursor: pointer;
`;

export const Footer = styled.div`
  display: flex;

  margin: auto;

  padding: 10px;
`;