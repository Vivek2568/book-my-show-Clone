import React from "react";
// props-> src,title,subtitle,isDark(bool)
 const Poster =(props) => {
    return(
        <>
        <div className="flex flex-col items-start gap-2 px-3 py-3">
        <div className="h-80">
         <img src={props.src} className=" w-full h-full rounded-lg"></img>
        </div>
        <div>
            <h3 className={`text-lg font-bold ${props.isDark ? "text-white" : "text-grey-700"}`}
            >{props.title} </h3>
            <p className={`text-sm  ${props.isDark ? "text-white" : "text-grey-700"}`}>{props.subtitle}</p>
        </div>
    </div>
    </>
    )
}
export default Poster;