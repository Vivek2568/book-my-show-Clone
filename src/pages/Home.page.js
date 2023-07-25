import React, { useEffect, useState } from "react";
import EntertainmentCardSlider from "../Components/Entertainment/Entertainmentcard.component";
import PosterSlider from "../Components/PosterSlider/PosterSlider.commponent";

import axios from "axios";



const HomePage = () => {
    const [Popularmovies, setpopularmovies] = useState([]);
    useEffect(() => {
        const requestPopularMovies = async () => {
            const getpopularmovies = await axios.get("/movie/popular");
            setpopularmovies(getpopularmovies.data.results);
        }
        requestPopularMovies();
    }, []);

    const [toprated, settoprated] = useState([]);
    useEffect(() => {
        const requesttoprated = async () => {
            const gettoprated = await axios.get("/movie/top_rated");
            settoprated(gettoprated.data.results);
        }
        requesttoprated();
    }, []);
   console.log(toprated);

    const [trending, settrending] = useState([]);
    useEffect(() => {
        const requesttrending = async () => {
            const gettrending = await axios.get("/trending/movie/day");
            settrending(gettrending.data.results);
        }
        requesttrending();
    }, []);
    
    
    return (
        <>
            <div className="  lg:block mx-2 mt-16  lg:w-5/6 lg:mx-auto  ">
                <PosterSlider images={trending} title="Trending Movies" isDark={false}  playspath = {"trending"}/>
            </div>
            <div className="mx-auto  mt-10    ">
                <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/lead-in-v3-collection-202102040828.png"
                    className="lg:w-[80%] h-full w-full m-auto">
                </img>
            </div>
            <div className="flex flex-col  md:gap-4 lg:gap-6 gap-3 mx-auto ">
                <div className=" container mx-auto  mt-10 w-[80%] md:w-full lg:w-[80%] ">
                    <h1 className="text-2xl font-bold text-grey-800 py-8">The Best of Live Events</h1>
                    <EntertainmentCardSlider/>
                </div>
                <div className="bg-navcol-200 py-6 my-8">

                    <div className=" lg:block mx-2 mt-6  lg:w-5/6 lg:mx-auto  ">
                        <div className="flex">
                            <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png"
                                alt="Rupay" className="w-full h-full" />
                        </div>
                        <PosterSlider  images={Popularmovies} title="Premiers"  isDark={true}  playspath = {"popular"}/>
                    </div>

                </div>
                <div className="lg:block mx-2 mt-8  lg:w-5/6 lg:mx-auto    ">

                    <PosterSlider images={toprated}  title="Top Rated" isDark={false} playspath = {"top_rated"} />
                </div>

                <div className="lg:block mx-2 lg:mt-8  md:mt-6 mt-2 lg:w-5/6 lg:mx-auto   ">
                    <PosterSlider images={trending} title="Trending Movies" isDark={false} playspath = {"trending"}/>
                </div>

            </div>
          
        </>
    )

}
export default HomePage;