import React from "react";
import MovieHero from "../Components/MovieHero/movie.hero.component";
import {BiCameraMovie} from "react-icons/bi";
const Movie = () => {
    return (
        <>
            <div>
                <MovieHero />
            </div>
            <div className="container ">
                <div className=" flex flex-col gap-6 px-48 ">
                    <h1 className="text-2xl font-bold py-6">About the Movie</h1>
                    <p className="py-2 text-md">In Mission: Impossible - Dead Reckoning Part One, Ethan Hunt (Tom Cruise) and his IMF team embark on their most dangerous mission yet: To track down a terrifying new weapon that threatens all of humanity before it falls into the wrong hands. With control of the future and the fate of the world at stake, and dark forces from Ethan`s past closing in, a deadly race around the globe begins. Confronted by a mysterious, all-powerful enemy, Ethan is forced to consider that nothing can matter more than his mission - not even the lives of those he cares about most.</p>
                </div>
                <div className="my-8 px-48">
                    <hr />
                </div>
                 <div className="px-48">
                    <h1>Applicable Offers</h1>
                    <div className=" mt-2 flex flex-row items-start bg-yellow-100 border-dashed border-yellow-300 border-2 w-96 rounded-md">
                      <div className="h-8 w-8"> <BiCameraMovie className="w-full h-full"/></div>
                      <div className=" mx-2 flex flex-col items-start">
                      <h3>Filmy pass</h3>
                      <p className="text-sm">Get Rs.75* on 3 movies you buy/rent on stream. Buy film Pass @Rs.99</p>
                      </div>
                    </div>
                 </div>
            </div>
        </>

    )
}
export default Movie;
