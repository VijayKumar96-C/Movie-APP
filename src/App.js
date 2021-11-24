import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./Action/acountAction";
import MovieContainer from "./components/MovieContainer";

const App = ()=>{
  return (
    <div>
      <h1>Movies</h1>
      <MovieContainer/>
    </div>
  )
}

export default App