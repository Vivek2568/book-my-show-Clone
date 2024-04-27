import React from "react";
import Slider from "react-slick"; 
const  EntertainmentCard = (props) => {
return (
    <>
    <div className="w-full h-30 px-2">
        <img className="w-full h-full rounded-xl"
         src={props.viv}
        alt="Entertainment Image"
        />
    </div>
   
    </>
);
};
const EntertainmentCardSlider = () => {
    const EntertainmentImage = [
       "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/ipl-2024-web-collection-202403130643.png",
       "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MSBFdmVudA%3D%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/holi-parties-web-collection-202402261056.png",
       "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MTY1KyBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/comedy-shows-collection-202211140440.png",
       "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-NDArIEV2ZW50cw%3D%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/music-shows-collection-202211140440.png",
       "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MTArIEV2ZW50cw%3D%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/food-drinks-collection-202211140440.png",
       "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MTUrIEV2ZW50cw%3D%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/arts-crafts-collection-202211140440.png",
       "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-OSBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/adventure-fun-collection-202211140440.png",
       "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-NTUrIEV2ZW50cw%3D%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/theatre-shows-collection-202211140440.png",
       "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/arts-crafts-collection-202211140440.png",
       "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NjArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/theatre-shows-collection-202211140440.png",
       //"https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-OCBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/adventure-fun-collection-202211140440.png" 
    ];
    const settings={
        infinite: true,
        autoplay: false,
        slidesToShow:5,
        slidesToScroll:4,
        InitialSlide: 0,
        responsive:[
            {
                breakpoint:1024,
                settings:{
                    slidesToScroll:3,
                    slidesToShow:3,
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
    return (
        <>
         <Slider { ...settings}>
           {EntertainmentImage.map((image)=>(
            <EntertainmentCard viv={image}/>
           ))
           }
          </Slider>
     
        </>
    )
}
export default EntertainmentCardSlider;