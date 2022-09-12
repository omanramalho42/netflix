import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const Movies: React.FC = () => {
  const [movies, setMovies] = useState([]);
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
  },[movies]);

  useEffect(() => {
    (async () => (
      await fetchMovies()
    ))()
    
    console.log(movies,' movies');
  },[]);
  
  return (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
      {movies?.map((i: any, index) => (
        <div
          key={index} 
          style={{ padding: 30 }}>
          { i.title }
        </div>
      ))}
    </div>
  )
}

export default Movies;