import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { addMovie } from "../Action/acountAction";


const MovieForm = ()=>{
    const [name, setName] = useState('')
    const [rating, setRating] = useState('')
    const dispatch = useDispatch()

    const handleChange =(e)=>{
        if(e.target.name == 'name'){
            setName(e.target.value)
        } else if(e.target.name == 'rating'){
            setRating(e.target.value)
        }
    }
    const handleSubmit =(e)=>{
        e.preventDefault()
        const data= {
            id : Number(new Date()),
            name,
            rating
        }
        dispatch(addMovie(data))
        setName('')
        setRating('')
        
    }
    return (
        <div>
            <h2>Add Movie</h2>
            <form onSubmit={handleSubmit} >
                <label>Movie</label>
                <input type='text' name='name' value={name} onChange={handleChange} /> <br/>
                <label>Rating</label>
                <input type='text' name='rating' value={rating} onChange={handleChange} /> <br/>
                <input type='submit' value='Save' />
            </form>
        </div>
    )
}
export default MovieForm