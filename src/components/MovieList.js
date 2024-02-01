import React from "react";
const MovieList =({movies})=>{
    return (
        
        <>

        {Array.isArray(movies) && movies.map((movie,id)=> 

        (
        <div className="card d-flex justify-content-start m-4">
            <img src={movie.posterURL} />
            <h3>{movie.id}</h3>
            <h3>{movie.title}</h3>
            
           
            </div>
            ))}
        </>
    
    )

}
export default MovieList;