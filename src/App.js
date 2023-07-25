//HOC
import React from "react";
import DefaultHOC from "./HOC/Default.hoc";
//axios
//Pages
import HomePage from "./pages/Home.page";
import { Routes,Route } from "react-router-dom";
import axios from "axios";
// movie component

//import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// movie component
import MovieHOC from "./HOC/Movie.HOC";
import Movie from "./pages/Movie.page";
import Plays from "./pages/plays.page";
axios.defaults.baseURL ="https://api.themoviedb.org/3";
axios.defaults.params={};
axios.defaults.params["api_key"]= process.env.REACT_APP_API_KEY;
function App() {
  return (
   <>
  <Routes> 
    <Route path="/" element ={<DefaultHOC component = { HomePage }/>} /> 
    <Route path="/movie/:id" element ={<MovieHOC component = { Movie } isMovie={true}/>} /> 
    <Route path="/Plays/:path" element ={<DefaultHOC component = { Plays }/>} /> 
  </Routes>
  
   </>
   
  );
}

export default App;
