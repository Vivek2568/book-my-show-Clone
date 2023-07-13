import React from "react";
import { BiChevronRight, BiSearch, BiChevronDown, BiMenu } from "react-icons/bi";
const NavSm = () => {
    return (
        <>
            <div className="text-white flex items-center justify-between">
                <div >
                    <h3 className="text-xl font-bold">It All Starts Here!</h3>
                    <span className="text-gray-400 text-lg flex items-center"> Delhi-NCR <BiChevronRight />
                    </span>
                </div>
                <div className="flex items-centre gap-3">
                <div className="bg-red-600 rounded-lg px-2 py-2 ">
                    <button className="font-bold ">Use App</button>
                </div>
                <div className="w-8 h-8">
                    <BiSearch className="w-full h-full my-2" />
                </div>
                </div>

            </div>
        </>
    )
};
const NavMd = () => {
    return (
        <>
            <div className="w-full flex items-center bg-white gap-3 px-3 py-2 rounded">
                <BiSearch />
                <input type="search" className="w-full focus:outline-none " placeholder="Search for movies, events, plays, sports and activity"></input>
            </div>
        </>
    )
}
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
                        <BiSearch />
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


const Navbar = () => {
    return (
        <>
            <nav className="bg-navcol-800 px-4 py-4">
                <div className="md:hidden">
                    <NavSm />
                </div>

                <div className="hidden lg:hidden md:flex">
                    <NavMd />
                </div>

                <div className=" hidden lg:flex">
                    <Navlg />
                </div>
            </nav>
        </>
    )
};
export default Navbar;