import React, { useState, useEffect, useCallback } from 'react';

import axios from 'axios';

import { 
  Card, 
  Container,
  ContainerList,
  Title,
  Description,
  Filter,
  FilterContainer,
  GenreFilterContainer,
  GenreFilter,
  CardList
} from './styled';

interface MovieProps {
  avaliation: number;
  createdAt: string;
  desc: string;
  genre: string;
  img: string;
  isSeries: boolean;
  title: string;
  updatedAt: string;
  __v: number;
  _id : string;
};

interface ListProps {
  content: Array<string>[];
  createdAt: string;
  genre: string;
  title: string;
  updatedAt: string;
  type: string;
  __v: number;
  _id : string;
};


interface GenreProps {
  genre: 'action' | 'horror' | 'comedy';
}

const Movies: React.FC = () => {
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [lists, setLists] = useState<ListProps[]>([]);

  const [genre, setGenre] = useState<GenreProps | null>(null);

  const fetchMovies = useCallback( async () => {
    try {
      await axios.get('http://localhost:3000/api/movies', 
        { headers: { 
          token: 
            `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMWU1ZmFkZGRkMGQ4OWQ3YmE4YjEyYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2Mjk0NzIyMiwiZXhwIjoxNjYzMzc5MjIyfQ.Cc-HZ-myGGvAaIk9SCY2gfvgti5T5QHG9nLkmR7_Gf8` 
          }
        }).then((res: any) => setMovies(res.data))
        .catch((error) => console.log(error)
      );
  
    } catch (error) {
      throw error;
    }
  },[]);

  const fetchLists = useCallback( async () => {
    try {
      await axios.get(`http://localhost:3000/api/lists?genre=${genre}`, 
        { headers: { 
            token: 
              `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMWU1ZmFkZGRkMGQ4OWQ3YmE4YjEyYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2Mjk0NzIyMiwiZXhwIjoxNjYzMzc5MjIyfQ.Cc-HZ-myGGvAaIk9SCY2gfvgti5T5QHG9nLkmR7_Gf8` 
          }
        }).then((res: any) => setLists(res.data))
        .catch((error) => console.log(error)
      );
  
    } catch (error) {
      throw error;
    }
  },[]);

  const learningMore = useCallback((text: string) => {
    if(text.length > 20) {
      return text.slice(0, 20).concat(' more...'); 
    }
  },[]);

  useEffect(() => {
    (async () => (
      await fetchMovies()
    ))();
    
    console.log(movies,' movies');
  },[]);

  useEffect(() => {
    (async () => (
      await fetchLists()
    ))();
    
    console.log(lists,' lists');
  },[]);

  const [filter, setFilter] = useState<string>('');
  useEffect(() => {
    const searchMovies: MovieProps[] = movies.filter((i) => i.title.includes(filter));

    console.log({ searchMovies, filter }, 'filter');
  },[filter]);

  useEffect(() => {
    const genreMovies = lists.filter((i: any) => i.genre.includes(genre));

    console.log({ genreMovies, genre }, 'filter');
  },[genre]);

  return (
    <>
      <FilterContainer>
        <span>filtro</span>
        <Filter 
          value={filter} 
          onChange={
            (event: any) => setFilter(event.currentTarget.value)
          } 
        />
      </FilterContainer>

      <GenreFilterContainer>
        <label>genero: </label>
        <GenreFilter 
          name='genres' 
          id='genres' 
          defaultValue='' 
          onChange={
            (event: any) => setGenre(event.target.value)
          }
        >
          <option value='action'>action</option>
          <option value='comedy'>comedy</option>
          <option value='horror'>horror</option>
        </GenreFilter>
      </GenreFilterContainer>

      {filter && (
        <Container>
          {movies?.map((i, index) => i.title.includes(filter) && (
            <Card 
              key={index}
              img={i.img}
            >
              <Title>{ i.title }</Title>
              <Description>{ learningMore(i.desc) }</Description>
              <input type='range' value={i.avaliation} readOnly />
            </Card>
          ))}
        </Container>
      )}
      
      {lists?.map(({ title, type, content, _id }, index) => content && (
        <ContainerList movies={content.length} key={`${index}${_id}`}>
          <label style={{ padding: 10, margin: 20 }}>{title} | {type}</label>
          <CardList>
            {content.map((item, idx) => movies.map((i) => i._id.includes(item[index]) && (
              <Card >
                <Title>{ i.title || ''}</Title>
                <Description>{ i.desc || '' }</Description> 
              </Card>
            )))}
          </CardList>
        </ContainerList>
      ))}
    </>
  )
}

export default Movies;