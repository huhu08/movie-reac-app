import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import MovieList from './components/MovieList';

function App() {
  const [movies,setMovies]=useState([]);

  const getMovieRequest=async ()=>{
    const url='http://localhost:10038/wp-json/movies-api/v1/movies';
    const response=await fetch(url);
   const responseJson=await response.json();
    
    setMovies(responseJson);
  
    console.log(response);
  console.log(movies);
  }
  
  useEffect(()=>{
    getMovieRequest();
  },[movies])
  return (
   
   <div className='container-fluid'>
    <div className='row'>
    <MovieList movies={movies} />
    </div>
    </div>
  );

}

export default App;
