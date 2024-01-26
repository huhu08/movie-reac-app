import React from "react";
const MovieList =({movies})=>{
    return (
        
        <>

        {movies.map((movie,id)=> 
        (<div className="d-flex justify-content-start m-3">
            <img src="{movie.Poster}"></img>
            <h3>{movie.Year}</h3>
            <h3>{movie.Title}</h3>
            <p>{movie.Years}</p>
            <h3>{movie.id}</h3>
            </div>
            ))}
        </>
    
    )

}
export default MovieList;