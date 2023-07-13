import React from "react";
import { FaRegThumbsUp } from "react-icons/fa";
const MovieHero = () => {
    return (
        <>
            <div className="md:hidden">
                <div>
                    <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/mission-impossible-dead-reckoning--part-one-et00329481-1688284554.jpg"
                        alt="Mission Impossible"
                    />
                </div>
            </div>
            <div className="hidden md:block lg:hidden">
                <div>
                    <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/mission-impossible-dead-reckoning--part-one-et00329481-1688284554.jpg"
                        alt="Mission Impossible"
                    />
                </div>
            </div>
            <div className=" relative hidden lg:block" style={{ height: "30rem" }}>
                <div className="absolute h-full w-full " style={{ backgroundImage: "linear-gradient(90deg, rgb(26, 26, 26) 24.97%, rgb(26, 26, 26) 38.3%, rgba(26, 26, 26, 0.04) 97.47%, rgb(26, 26, 26) 100%)" }} />
                <div className=" absolute flex flex-row z-30 w-100 h-96 top-16 left-52 gap-10">
                    <div >
                        <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/mission-impossible-dead-reckoning--part-one-et00329481-1688284554.jpg" className="w-full h-full rounded" />
                    </div>
                    <div className="z-40 flex flex-col items-start gap-4">
                        <div className="w-1/2">

                            <h1 className="text-white font-extrabold text-4xl leading-10">Mission Impossible: Dead Reckoning - Part One</h1>

                        </div>
                        <div>
                            <h3 className="text-white font bold flex flex-row gap-3">
                                <FaRegThumbsUp className="text-green-300 color-green-300" /> 155.6K are interested
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
                            <button className="text-white text-md px-16 py-3 hover:underline">Book tickets</button>
                        </div>

                    </div>
                </div>

                <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/mission-impossible-dead-reckoning--part-one-et00329481-1688284554.jpg"
                    alt="Mission Impossible" className="h-full w-full"
                />
            </div>
           
        </>
    )
};
export default MovieHero;