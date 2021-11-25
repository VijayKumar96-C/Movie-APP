import React from "react";
import MovieList from "./MovieList";
import MovieForm from "./MovieForm";
import MovieStats from "./MovieStats";
import { useSelector } from "react-redux";
import Typewriter from "typewriter-effect"
import "../style.css"

const MovieContainer = ()=>{
    const movie =useSelector((state)=>{
        return state.movie
    })
    
    return(
            <div className="type" >
                { (movie.length == 0) ? 
                //<h3>Enter the movie name...</h3>
                (<Typewriter
                    onInit={(typewriter) => {
                      typewriter.typeString('Enter your favourite movie...')
                        .pauseFor(1500)
                        .deleteAll()
                        .pauseFor(1500)
                      typewriter.typeString('Find out top rated movie')
                        .pauseFor(1500)
                        .deleteAll()
                      typewriter.typeString('Enter your favourite movie...')
                        .start();
                    }}
                  />)
                : <MovieList /> }
                <MovieForm/>
                <MovieStats/>
            </div>
            
    )
}
export default MovieContainer