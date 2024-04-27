import React from "react";
import {Link} from "react-router-dom";
import {useHistory} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
// props-> src,title,subtitle,isDark(bool)

const Poster = (props) => {
    //const history = useHistory();
    //console.log(props)
    const handleClick=()=>{
      window.location.href = `/movie/${props.id}`;
    }
    return (
        <>
           <div className="flex flex-col  md:px-4 px-2 ">
                <div className=" ">
                    <img src={`https://image.tmdb.org/t/p/original${props.poster_path}`} className="w-full h-full rounded-lg hover:shadow-xl hover:shadow-rose-950 transition-all duration-300"onClick={handleClick}></img>
                </div>
                <div>
                    <h3 className={`text-lg font-semibold ${props.isDark ? "text-white " : "text-grey-700"}`}
                    >{props.title} </h3>
                    <p className={`text-sm  ${props.isDark ? "text-white" : "text-grey-700"}`}>{props.subtitle}</p>
                </div>
            </div>
          
        </>
    )
}
export default Poster;