import React, { useEffect, useState } from "react";
import axios from "axios";
import Poster from "../poster/poster.component";
import PlaysFilters from "../Components/plays.filters/plays.filter.component";
import { useParams } from "react-router-dom";
import FooterPart from "../footer/footersection";

const Plays = (props) => {
    const params = useParams();
    const map = {
        'trending' : '/trending/movie/day',
        'popular'  : '/movie/popular',
        'top_rated' : '/movie/top_rated',
        'link': "/movie/now_playing"
    }
    const [trendingmovies, settrendingmovies] = useState([]);
    useEffect(() => {
        const requesttrendingmovies = async () => {
            const gettrendingmovies = await axios.get(map[params.path]);
            settrendingmovies(gettrendingmovies.data.results);
        }
        requesttrendingmovies();
    }, []);
    
    return (
        <>
            <div className=" mx-auto md:flex flex-row  bg-gray-100">
                <div className=" flex flex-col lg:w-[25%] md:w-[40%] sm:px-8 w-full mt-20 m-auto gap-10">
                    <h1 className="text-4xl  font-semibold rounded-sm ">Filters</h1>
                    <div>
                        <div className="container items-center border-gray-400 border border-solid rounded-lg bg-white mb-3 mt-4">
                            <PlaysFilters title="Date" tags={["Today", "Tomorrow", "This Weekend"]} />
                        </div>
                        <div className="container items-center border-gray-400 border border-solid rounded-lg bg-white mb-3 mt-4">
                            <PlaysFilters title="Languages" subtitle="clear" tags={["Hindi", "English", "Urdu", "Punjabi"]} />
                        </div>
                        <div className="container items-center border-gray-400 border border-solid rounded-lg bg-white mb-3 mt-4">
                            <PlaysFilters title="Genres" tags={["Drama", "Comedy", "Adaptation", "Musical", " Classical", "Romantic", "Tragedy", "Fantasy", "Historical"]} />
                        </div>
                    </div>
                </div>
                <div className=" mt-20 md:w-[70%] lg:w-8/12 sm:mx-2">
                    <div>
                        <h1 className="text-2xl font-bold">Movies in Delhi-NCR</h1>
                    </div>

                    <div className=" grid  lg:grid-cols-4 md:grid-cols-3 grid-cols-2  "  >
                        {trendingmovies.map((image) => (
                            <Poster{...image} />
                        ))}
                    </div>

                </div>
            </div>
          
           
        </>
    )
}
export default Plays;
