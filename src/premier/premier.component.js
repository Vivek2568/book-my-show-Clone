import React from "react";
import PremierSlider from "react-slick"; 
import Poster from "../poster/poster.component";
import Settings from "../config/postercarousel.config";
import PremierImages from "../config/tempImages";
  const Premier = (props) => {
   
    return(
        <>
        <div  className="flex flex-col items-start">
            <h3 className="text-white text-xl font">Premiers</h3>
            <p className="text-white text-sm py-2">Barand new release every Friday</p>
        </div>
        <PremierSlider { ...Settings }>
            { PremierImages.map((image) => (
                <Poster{ ...image} isDark />
            ))}
        </PremierSlider>
        </>
    )
}
export default Premier;