import {createStore, combineReducers} from 'redux'
import countReducers from '../Reducers/countReducer'

const configureStore = ()=>{
    const store = createStore(combineReducers({
        movie : countReducers
    }))
    return store
}

export default configureStore

