export const addMovie = (movie)=> {
    return {
        type : "ADD_MOVIE",
        payload : movie
    }   
}
export const az = ()=>{
    return {
        type : "AZ"
    }
}
export const za = ()=>{
    return {
        type : "ZA"
    }
}
export const asc =()=>{
    return {
        type : 'ASC'
    }
}
export const des = ()=>{
    return {
        type : 'DES'
    }
}
export const delMovie = (id)=>{
    return {
        type : "DELMOVIE",
        payload : id
    }
}