import React from "react";
const MovieList =({movies})=>{
    return (
        
        <>

        {movies.map((movie,id)=> 

        (
        <div className="card d-flex justify-content-start m-3">
            <img src={movie.posterURL} alt='pic'/>
            <h3>{movie.id}</h3>
            <h3>{movie.title}</h3>
           
            </div>
            ))}
        </>
    
    )

}
export default MovieList;