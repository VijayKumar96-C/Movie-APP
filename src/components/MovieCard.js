import React from "react";
import { useDispatch } from "react-redux";
import { delMovie } from "../Action/acountAction";
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import Card from '@mui/material/Card'
import CardContent from  '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Typography from '@mui/material/Typography'

const MovieCard=(props)=>{ 
    const {movie} = props
    const dispatch = useDispatch()
     const handleRemove = (id)=>{
         dispatch(delMovie(id))
     }
    return(
        <div>
            <Card variant='outlined' style={{ height:100, Width : 500, backgroundColor : '#DCDCDC'}} >
                <CardContent>
                <Typography> Movie Name - {movie.name}</Typography>
                   <Typography>Rating -{movie.rating}</Typography> 
                </CardContent>
                <CardActions>
                    <IconButton arial-label='delete' onClick={()=>{handleRemove(movie.id)}} ><DeleteIcon/></IconButton>
                </CardActions>
            </Card>
         </div>
         )


}
export default MovieCard
