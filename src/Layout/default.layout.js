import React from "react";
import Navbar from "../Components/navbar/navbar.component";
import HeroCraousal from "../Components/heroCrausal/hero.crausal.component";
const DefaultLayout =(props)=>{
    return (
        <>
        
        <Navbar/>
        <HeroCraousal/>
        {props.children}

           </>
    );
};
export default DefaultLayout;