import React from "react";
import PremierSlider from "react-slick";
import Settings from "../../config/postercarousel.config";
import Poster from "../../poster/poster.component";
 const PosterSlider = (props) => {
      return (
        <>
          <div  className="flex flex-col items-start">
            <h3 className={`text-2xl font-bold ${props.isDark ? "text-white font bold" : "text-grey-700"}`}>{props.title}</h3>
            <p className={`text-2sm font-bold ${props.isDark ? "text-white" : "text-grey-700"}`}>{props.subtitle}</p>
        </div>
        <PremierSlider { ...Settings }>
            { props.images.map((image) => (
                <Poster{ ...image} isDark={props.isDark} />
            ))}
        </PremierSlider>
        </>
      )
 }
 export default PosterSlider;