
 import React, { Component } from "react";
 import {Route,Routes} from "react-router-dom";
 import DefaultLayout from "../Layout/default.layout"; 
 const DefaultHOC =({component:Component,...rest})=>{
    return (
    <> 
      <DefaultLayout>
         <Component />
      </DefaultLayout> 
    </>
    );

 };
 export default DefaultHOC;