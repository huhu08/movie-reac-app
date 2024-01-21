import React from "react";
const MovieList =(props)=>{
    return (
        <>
        {props.movies
        .map((movie,index)=> 
        (<div>
            <img src={'movie.Poster'} ></img>
            <p>{movie.Year}</p>
            <h3>{movie.Title}</h3>
            </div>
            ))}
        </>
    
    )

}
export default MovieList;