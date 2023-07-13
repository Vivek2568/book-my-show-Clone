import React from "react";
import HeroSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const HeroCraousal = () => {
    const settinglg = {
        arrows: true,
        autoplay:true,
        centerMode: true,
        centerPadding: "200px",
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    const settings = {
        arrows: true,
        autoplay:true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const images = [
        "https://plus.unsplash.com/premium_photo-1661964095477-fe68b487f700?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZW1pcmF0ZXMlMjBwYWxhY2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
        " https://images.unsplash.com/photo-1536782376847-5c9d14d97cc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJlZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
        " https://images.unsplash.com/photo-1564648351416-3eec9f3e85de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a29zdGVubG9zZSUyMGJpbGRlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
        "https://assets-in.bmscdn.com/promotions/cms/creatives/1688198088033_motogpdesktop.jpg",
        "https://images.unsplash.com/photo-1525789351284-e1e7de240152?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dW5zcGxhc2h8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
        "https://assets-in.bmscdn.com/promotions/cms/creatives/1688494182063_qawwali.jpg",
        //"https://plus.unsplash.com/premium_photo-1661964095477-fe68b487f700?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZW1pcmF0ZXMlMjBwYWxhY2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"

    ] 
    return (
        <>
            <div className="lg:hidden">
                <HeroSlider {...settings}>
                    {
                        images.map((image) => (
                            <div className="w-full h-64 md:80 py-3">
                                <img src={image} alt="testing" className="w-full h-12 rounded-md" />
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
                                <img src={image} alt="testing" className="w-full h-72 rounded-md" />
                            </div>
                        ))
                    }
                </HeroSlider>
            </div>
            
        </>
    )
};

export default HeroCraousal;
