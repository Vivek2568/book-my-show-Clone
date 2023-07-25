import React from "react";
import Navbar from "../Components/navbar/navbar.component";
import HeroCraousal from "../Components/heroCrausal/hero.crausal.component";
import FooterPart from "../footer/footersection";
const DefaultLayout =(props)=>{
    return (
        <>
        
        <Navbar/>
        <HeroCraousal/>
        {props.children}
        <FooterPart />
           </>
    );
};
export default DefaultLayout;