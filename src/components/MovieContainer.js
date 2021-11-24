import React from "react";
import MovieList from "./MovieList";
import MovieForm from "./MovieForm";
import MovieStats from "./MovieStats";
import { useSelector } from "react-redux";

const MovieContainer = ()=>{
    const movie =useSelector((state)=>{
        return state.movie
    })
    
    return(
        <div>
            { (movie.length == 0) ? <h3>enter the movie name...</h3> : <MovieList /> }
            <MovieForm/>
            <MovieStats/>
        </div>
    )
}
export default MovieContainer