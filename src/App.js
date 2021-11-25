import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./Action/acountAction";
import MovieContainer from "./components/MovieContainer";
import "./style.css"

const App = ()=>{
  return (
    <div>
      <h1 className="head" >Movies</h1>
      <MovieContainer/>
    </div>
  )
}

export default App