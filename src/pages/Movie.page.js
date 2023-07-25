import React from "react";
import axios from "axios";
import { NextArrow,PrevArrow } from "../Components/heroCrausal/arrows.component";
import { useEffect, useState } from "react";
import { BiCameraMovie } from "react-icons/bi";
import FooterPart from "../footer/footersection";
import MovieHero from "../Components/MovieHero/movie.hero.component";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import Cast from "../Components/movie.page.caraousal/cast.details";
import PosterSlider from "../Components/PosterSlider/PosterSlider.commponent";

const Movie = (props) => {
    const settingss={
        infinite: true,
        autoplay: false,
        slidesToShow:5,
        slidesToScroll:4,
        InitialSlide: 0,
        responsive:[
            {
                breakpoint:1024,
                settings:{
                    slidesToScroll:4,
                    slidesToShow:4,
                }
            },
            {
                breakpoint:768,
                settings:{
                    slidesToScroll:3,
                    slidesToShow:3,
                }
            }, {
                breakpoint:400,
                settings:{
                    slidesToScroll:2,
                    slidesToShow:2,
                }
            }
        ]
    }
    const settingsLg = {
        centerPadding: '250px',
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };
    const params = useParams();

    const [detailsMovie, setDetails] = useState([]);
    useEffect(() => {
        const requestDetails = async () => {
            const requestedDetails = await axios.get(`/movie/${params.id}`);
            setDetails(requestedDetails.data);
        }
        requestDetails();
    }, []);
    
    // console.log(detailsMovie);
    const [cast, setcast] = useState([]);
    useEffect(() => {
        const RequestDetails = async () => {
            const requestDetails = await axios.get(`movie/${params.id}/credits`);
           setcast(requestDetails.data.cast);
        }
        RequestDetails();
    }, []);
    const [recom, setrecom] = useState([]);
    useEffect(() => {
        const Requestrecom = async () => {
            const requestrecom = await axios.get(`movie/${params.id}/recommendations`);
            setrecom(requestrecom.data.results);
        }
        Requestrecom();
    }, []);
    console.log(recom);
 
    return (
        <>
           <div> <MovieHero Mddetails={detailsMovie} /></div>
            <div className="gap-6 flex flex-col">
                <div className=" flex flex-col gap-4 lg:px-48 md:px-24 w-full px-8 ">
                    <h1 className="text-2xl font-bold py-6">About the Movie</h1>
                    <p className="py-2 text-md">{detailsMovie.overview}</p>
                </div>
                <div className="my-8 px-48">
                    <hr />
                </div>
                <div className="lg:px-48 md:px-24 w-full px-8 pr-8 ">
                    <h1>Applicable Offers</h1>
                    <div className=" mt-2 flex flex-row   bg-yellow-100 border-dashed border-yellow-300 border-2 md:w-96 rounded-md">
                        <div className="h-8 w-8"> <BiCameraMovie className="w-full h-full" /></div>
                        <div className=" mx-2 flex flex-col items-start ">
                            <h3>Filmy pass</h3>
                            <p className="text-sm">Get Rs.75* on 3 movies you buy/rent on stream. Buy film Pass @Rs.99</p>
                        </div>
                    </div>
                </div>
                <div className="mt-10   lg:px-48 md:px-24 md:w-[90%]  w-full px-8">
                <Slider {...settingss} {...settingsLg}>
                {cast.map((castdata) => (
                  <Cast
                    image={`https://image.tmdb.org/t/p/original/${castdata.profile_path}`}
                    castName={castdata.original_name}
                    role={castdata.character}
                  />
                ))}
              </Slider>
                </div>
                <div className="mt-10 flex flex-col gap-4 lg:px-48 md:px-24 w-full px-8">
                    <PosterSlider images = {recom} 
                   title="Recommanded Movies" 
                   isDark={false} 
                   playspath= "link"
                 /> 
                </div> 
            </div>
            <FooterPart></FooterPart>
        </>

    )
}
export default Movie;
