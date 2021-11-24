const movieInitialState = []
const countReducers =( state=movieInitialState, action )=>{
    switch(action.type){
        case "ADD_MOVIE" : {
            return [...state, action.payload]
        }
        case "AZ" : {
            return [...state.sort((a,b)=>a.name - b.name) ]
        }
        case "ZA" :{
            return [...state.sort((a,b)=>b.name - a.name) ] 
        }
        case "ASC" : {
            return [...state.sort((a,b)=>parseFloat(a.rating) - parseFloat(b.rating))]
        }
        case "DES" : {
            return [...state.sort((a,b)=>parseFloat(b.rating) - parseFloat(a.rating))]
        }
        case "DELMOVIE" : {
            return state.filter((ele)=>{
                return ele.id != action.payload
            })
        }

        default : {
            return state
        }
    }
} 
export default countReducers