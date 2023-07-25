import React, { Component } from "react";
import MovieLayout from "../Layout/Movie.layout"; 

const MovieHOC =({ component: Component , ...rest })=>{
   

   return (
   <> 
     <MovieLayout>
     <Component/>
     </MovieLayout> 
   </>
   );

};
export default MovieHOC;