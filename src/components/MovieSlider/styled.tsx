import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const CardMovie = styled.div`
  /*  display: flex; */
  
  img {
    animation-name: rendering;
    animation-duration: 1.25s;
    animation-fill-mode: forwards;

    @keyframes rendering {
      from {
        height: 0;
        width: 0;
      }
      to {
        width: 440px;
        height: 580px;
      }
    }
  }
`;