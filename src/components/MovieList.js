import React, {useState} from "react";
import MovieCard from "./MovieCard";
import { useSelector, useDispatch } from "react-redux";
import { az, za, asc, des } from "../Action/acountAction";

const MovieList = ()=>{
    const dispatch = useDispatch()
    const [search, setSearch] = useState('')
    const [filter, setFilter] = useState('')
    const movie =useSelector((state)=>{
        return state.movie
    })
    const handleSearch = (e)=>{
        setSearch(e.target.value)
    }
    const handleFilter = (e) =>{
        setFilter(e.target.value)
     
            if(filter === 'A-Z'){
                dispatch(az())
            } else if (filter === "Z-A") {
                dispatch(za())
            } else if(filter === 'Top Rating'){
                dispatch(asc())
            } else if(filter === 'Low Rating'){
                dispatch(des())
            }
   }
    
    
    return (
        <div>
            <h3>Movie list</h3>
            <input type = 'text' value={search} onChange={handleSearch} placeholder='Search here'  />
            <select style={{margin : "10px"}} onChange={handleFilter} >
                <option>filter</option>
                <option value='A-Z' >A-Z</option>
                <option value='Z-A' >Z-A</option>
                <option value='Top-Rating' >Top Rating</option>
                <option value='Low-Rating'>Low Rating</option>
            </select>
            {(movie.filter((ele)=>{
                if(search == ''){
                    return ele
                } else if(ele.name.toLowerCase().includes(search.toLowerCase())){
                    return ele
                }
            })).map((ele)=>{
                return <MovieCard key={ele.id} movie={ele} />
            })}
            
        </div>
    )
}
export default MovieList