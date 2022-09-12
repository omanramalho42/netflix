import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Movies: React.FC = () => {

  const [movies, setMovies] = useState();
  const fetchMovies = async () => {
    try {
      await axios.get('http://localhost:3000/api/movies', { headers: { token: `Bearer ` }})
        .then((res: any) => setMovies(res))
        .catch((error) => console.log(error)
      );
  
      console.log(movies,' movies');
    } catch (error) {
      throw error;
    }
  }
  useEffect(() => {
    fetchMovies();
  },[])
  
  return (
    <div>
      <h1>Movies</h1>
    </div>
  )
}

export default Movies;