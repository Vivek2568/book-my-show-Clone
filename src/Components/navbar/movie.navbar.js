import React from "react";
import { BiChevronRight, BiSearch, BiChevronDown, BiMenu,BiChevronLeft,BiShareAlt } from "react-icons/bi";
const NavSm = () => {
    return (
        <>
            <div className="text-white flex items-center justify-between">
            <div className="w-8 h-8">
                    <BiChevronLeft className="w-full h-full my-2" />
                </div>
                <div >
                    <h3 className="text-xl font-bold">It All Starts from Here!</h3>
                    
                </div>
                <div className="flex items-centre gap-3">
                
                <div className="w-8 h-8">
                    <BiShareAlt className="w-full h-full my-2" />
                </div>
                </div>

            </div>
        </>
    )
};

const Navlg = () => {
    return (
        <>
            <div className="container mx-auto px-4 flex items-center justify-between">
                <div className="flex items-center w-1/2">
                <a href="http://localhost:3000/">
                    <div className="w-40 h-8 px-3">
                        <img src="https://asset.brandfetch.io/id4J58sqa_/idaQ1GyW_d.svg?updated=1674733846500" alt="logo" className="w-full h-full"></img>
                    </div>
                    </a>
                    <div className="w-full flex items-center bg-white gap-3 px-3 py-2 rounded">
                        <BiShareAlt />
                        <input type="search" className="w-full focus:outline-none " placeholder="Search for movies, events, plays, sports and activity"></input>
                    </div>
                </div>

                <div className="flex items-center px-2 py-2 gap-2">

                    <span className="text-gray-400 text-md font-bold flex items-center hover:text-white cursor:hand"> Delhi-NCR <BiChevronDown />
                    </span>
                    <button className="bg-red-600 text-white text-sm rounded px-2 py-1">Sign in</button>
                    <div className="w-8 h-8 text-white">
                        <BiMenu className=" w-full h-full" />
                    </div>
                </div>
            </div>
        </>
    )
}


const MovieNavbar = () => {
    return (
        <>
            <nav className="absolute inset-x-0 z-30 bg-opacity-10 backdrop-filter backdrop-blur-lg lg:relative bg-navcol-800  px-4 py-4">
                <div className="lg:hidden">
                    <NavSm />
                </div>

                <div className="hidden lg:hidden md:block">
                    <NavSm />
                </div>

                <div className=" hidden lg:flex">
                    <Navlg />
                </div>
            </nav>
        </>
    )
};
export default MovieNavbar;