import React from "react";
import {useSelector} from 'react-redux'

const MovieStats = ()=>{
    const movie = useSelector((state)=>{
        return state.movie       
    })
    const sortMax = movie.sort(function(a,b){
        return b.rating-a.rating
    })
    const topMovie = sortMax[0]
    console.log('topMovie', topMovie)

    return (
        <div>
            <h1>Top Movies</h1>
           {(movie.length ===0 ) ? 
           (<p></p>) : 
           (<div><h3>Movie Name - {topMovie.name}</h3><h3>Movie rating - {topMovie.rating}</h3></div>)  }
            
        </div>
    )
}

export default MovieStats