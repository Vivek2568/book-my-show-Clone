import React, { useState, useEffect } from "react";
import axios from "axios";
import HeroSlider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCraousal = () => {
    const settinglg = {
        arrows: true,
        autoplay: true,
        centerMode: true,
        centerPadding: "200px",
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
       

    }
    const settings = {
        arrows: true,
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const [images, setImages] = useState([]);
    useEffect(() => {
        const nowplayingmovieRequest = async () => {
            const getImages = await axios.get("/movie/now_playing");
            setImages(getImages.data.results);
        };
        nowplayingmovieRequest();
    }, []);
    return (
        <>
            <div className="lg:hidden md:h-60 h-40">
                <HeroSlider {...settings}>
                    {
                        images.map((image) => (
                            <div className="w-full  md:h-52 h-40  py-3" style={{height:"30rem"}}>
                                <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="testing" className="w-full h-72 rounded-md"/>
                            </div>
                        ))
                    }
                </HeroSlider>
            </div>
            <div className="hidden lg:block">
                <HeroSlider {...settinglg}>
                    {
                        images.map((image) => (
                            <div className="w-full h-full px-2 py-3">
                                <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="testing" className="w-full h-72 rounded-md" />
                            </div>
                        ))
                    }
                </HeroSlider>
            </div>

        </>
    )
};

export default HeroCraousal;
