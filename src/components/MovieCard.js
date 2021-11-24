import React from "react";
import { useDispatch } from "react-redux";
import { delMovie } from "../Action/acountAction";
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import Card from '@mui/material/Card'
import CardContent from  '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'

const MovieCard=(props)=>{ 
    const {movie} = props
    const dispatch = useDispatch()
     const handleRemove = (id)=>{
         dispatch(delMovie(id))
     }
    return(
        <div>
            <Card variant='outlined' style={{ minWidth : 275, backgroundColor : '#d3d3d3'}} >
                <CardContent>
                    <h3>Movie Name - {movie.name}</h3>
                    <h3>Rating -{movie.rating}</h3>
                </CardContent>
                <CardActions>
                    <IconButton arial-label='delete' onClick={()=>{handleRemove(movie.id)}} ><DeleteIcon/></IconButton>
                </CardActions>
            </Card>
         </div>
         )


}
export default MovieCard