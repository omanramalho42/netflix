import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }

  grid-column-gap: 20px;
  grid-row-gap: 20px;

  background-color: red;

  margin-top: 15px;

  padding: 40px;
`;

interface ContainerListProps {
  movies?: number; 
}

export const ContainerList = styled.div<ContainerListProps>`
  display: grid;
  grid-template-columns: repeat(movies, 1fr);

  background-color: transparent;

  padding: 40px;
`;

interface CardProps {
  img?: string;
}

export const Card = styled.div<CardProps>`
  display: flex;
  flex-direction: column;

  justify-content: space-between;

  padding: 30px;
  
  background-image: url(${({ img }) => img });
  background-color: ${({ theme }) => theme.colors.primary};
  
  border-radius: 15px;

  width: auto;
  height: 250px;

  box-shadow: 0px 0px 12px 6px rgba(0, 0, 0, 0.1);

  transition: 0.4s;
  &:hover {
    transform: scale(1.057);
  }
`;

export const CardList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }

  grid-column-gap: 20px;
  grid-row-gap: 20px;

  background-color: ${({ theme }) => theme.colors.secondary};
  
  border-radius: 15px;
  box-shadow: 0px 0px 12px 6px rgba(0, 0, 0, 0.1);

  transition: 0.4s;
  &:hover {
    transform: scale(1.027);
  }
`;

export const Title = styled.h3`
  font-size: 2em;
  color: ${({ theme }) => theme.colors.header};
`;

export const Description = styled.p`
  font-size: 1em;
  color: ${({ theme }) => theme.colors.header};
`;

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin: auto;

  align-items: center;
  justify-content: space-around;

  padding: 2px 5px;
`;

export const Filter = styled.input.attrs({
  type: 'text'
})`
  font-size: 1em;
  
  color: ${({ theme }) => theme.colors.header};
  background-color: ${({ theme }) => theme.colors.primary};

  padding: 5px;

  border: none;
  border-radius: 10px;
`;

export const GenreFilterContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin: auto;

  align-items: center;
  justify-content: space-around;

  padding: 2px 5px;
`;

export const GenreFilter = styled.select`
  font-size: 1em;
  
  color: ${({ theme }) => theme.colors.header};
  background-color: ${({ theme }) => theme.colors.primary};

  padding: 5px;

  border: none;
  border-radius: 10px;
`;
