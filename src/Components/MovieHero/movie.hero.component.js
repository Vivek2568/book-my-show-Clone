import React from "react";
import { FaRegThumbsUp } from "react-icons/fa";
import LaunchRazorPay from "../../pages/RazorPayButton";
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
function MovieHero (props) {
    
    
    return (
        <>
            <div className=" relative m-auto " style={{ height: "35rem" }}>
                <div className="absolute h-full w-full " style={{ backgroundImage: "linear-gradient(90deg, rgb(26, 26, 26) 24.97%, rgb(26, 26, 26) 38.3%, rgba(26, 26, 26, 0.04) 97.47%, rgb(26, 26, 26) 100%)" }} />
                <img src={`https://image.tmdb.org/t/p/original${props.Mddetails.backdrop_path}`}
                    alt="Mission Impossible" className="h-full w-full" style={{ height: "35rem" }}
                />
                <div className=" absolute flex  items-center justify-between z-40  top-16 lg:left-52 md:left-32 left-12 gap-2 ">
                   
                   <div className="  hidden sm:block sm:w-2/3" >
                        <img src={`https://image.tmdb.org/t/p/original${props.Mddetails.poster_path}`} className="md:w-72 rounded-lg md:h-96 w-60"/>
                    </div>
                    <div className="z-40 flex flex-col items-start gap-4 pr-10 m-auto  md:w-2/3">
                        <div className="w-1/2">

                            <h1 className="text-white font-extrabold text-4xl leading-10">{props.Mddetails.title}</h1>

                        </div>
                        <div>
                            <h3 className="text-white font bold flex flex-row justify-between gap-3 m-auto">
                                <FaRegThumbsUp className="text-green-300 color-green-300" /> {(props.Mddetails.popularity)}K
                            </h3>
                        </div>
                        <div className="flex flex-row border-white gap-3  rounded border">
                            <div className="py-0.5">
                                <h2 className="px-2 text-white">In cinemas</h2>
                                <p className=" px-2 text-white text-xs">Are you interested in watching this movie?</p>
                            </div >
                            <div className="px-2 pl-px py-2">
                                <button className="bg-white rounded-sm hover:bg-green-500 "><p className="text-xs px-1 py-1 hover:text-black">I'm interested</p></button>
                            </div>
                        </div>
                        <div className="flex flex-row bg-white rounded-sm gap-1 px-2 mt-2">
                             <h2 className="text-md"> 2D, MX4D, ICE, 4DX, IMAX 2DX, 2D SCREEN X</h2>
                           
                        </div>
                        <div className="flex flex-row bg-white rounded-sm gap-1 px-2">
                             <h2 className="text-md  hover:underline">Hindi, English, Telgu, Tamil</h2>

                        </div>
                        <div className="flex flex-row rounded-sm gap-1 px-2">
                            <h3 className="text-md text-white font-medium ">2h 45m . Action, Thriller , Adventure, UA . 12 JULY 2023</h3>
                         
                        </div>
                        <div className="bg-red-500 hover:bg-red-700  rounded-md">
                            <button  onClick ={LaunchRazorPay} className="text-white text-md px-16 py-3 hover:underline">Book tickets</button>
                        </div>

                    </div>
                   
                </div>
            </div>
           
        </>
    )
};
export default MovieHero;