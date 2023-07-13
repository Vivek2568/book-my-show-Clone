//HOC
import DefaultHOC from "./HOC/Default.hoc";
//Pages
import HomePage from "./pages/Home.page";
import { Routes,Route } from "react-router-dom";
//import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// movie component
import MovieHOC from "./HOC/Movie.HOC";
import Movie from "./pages/Movie.page";
import Plays from "./pages/plays.page";
function App() {
  return (
   <>
  <Routes> 
    <Route path="/" element ={<DefaultHOC component = { HomePage }/>} /> 
    <Route path="/movie/:id" element ={<MovieHOC component = { Movie }/>} /> 
    <Route path="/Plays" element ={<DefaultHOC component = { Plays }/>} /> 
  </Routes>
  
   </>
   
  );
}

export default App;
