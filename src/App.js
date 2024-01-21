import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import MovieList from './components/MovieList';

function App() {
  const [movies,setMovies]=useState([
    {Title:"Guardians of the Galaxy Vol. 2",
    Year:"2017",
    Rated:"PG-13",
    Released:"05 May 2017",
    Poster:	"https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"
  }
  ])
  
  return (
   
   <div>
    <MovieList movies={movies} />
    </div>
  );

}

export default App;
