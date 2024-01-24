import React from "react";
const MovieList =({movies})=>{
    return (
        
        <>

        {movies.map((movie,index)=> 
        (<div className="d-flex justify-content-start m-3">
            <img src={movie.Poster} alt='movie.Rated'></img>
            <p>{movie.Year}</p>
            <h3>{movie.title}</h3>
            </div>
            ))}
        </>
    
    )

}
export default MovieList;