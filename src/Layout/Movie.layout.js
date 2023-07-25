import React from "react";

import MovieNavbar from "../Components/navbar/movie.navbar";

const MovieLayout =(props)=>{
    return (
        <>
        <MovieNavbar {...props}/> 
        {props.children}

           </>
    );
};
export default MovieLayout;