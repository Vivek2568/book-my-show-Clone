import React ,{useEffect,useState}from "react";
import PremierSlider from "react-slick";
import Settings from "../../config/postercarousel.config";
import Poster from "../../poster/poster.component";
import { Link } from "react-router-dom";
import {BsChevronRight} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const PosterSlider = (props) => {
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
 const navigate= useNavigate();
  return (
    <>
      
        <div className=" flex  justify-between items-center ">
         <div> <h3 className={`text-2xl font-bold pl-4 pb-2 ${props.isDark ? "text-white font bold" : "text-grey-700"}`}>{props.title}</h3></div>
        <Link to={`/plays/${props.playspath}`}>
          <div>
          <span className="hover:underline flex items-center text-red-500 text-sm hover:cursor-pointer">See All <BsChevronRight className="ps-1 " />
          </span>
          </div>
        </Link>
          
      </div>
      
      <PremierSlider {...settingss}>
        {props.images.map((image) => (
          <Poster{...image} isDark={props.isDark} />
        ))}
      </PremierSlider>
    </>
  )
}
export default PosterSlider;