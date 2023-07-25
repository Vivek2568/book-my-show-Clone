import React from "react";
import { FaTwitter, FaFacebookF,FaInstagram,FaYoutube,FaLinkedin} from "react-icons/fa";

const FooterPart = () => {
    return (
        <>
            <div className="bg-navcol-400 gap-6 mt-12">
                <div className="mt-8 flex flex-col items-center bg-navcol-500">
                   <div><img className="w-20 " src="data:image/png;base64,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"></img></div>
                   <div><h1 className="text-white">24/7 Customer Service</h1></div>
                </div>
                <div className=" flex flex-col items-center mt-8">
                    <h1 className="text-white font-bold text-md mx-auto"> Help </h1>
                    <div className="md:flex flex-row flex flex-wrap md:items-center  justify-center  gap-2">
                        <h1 className="text-navcol-300 hover:cursor-pointer  hover:text-white hover:underline text-md">| About Us | </h1>
                        <h1 className="text-navcol-300 hover:cursor-pointer  hover:text-white hover:underline text-md"> | Contact Us | </h1>
                        <h1 className="text-navcol-300 hover:cursor-pointer  hover:text-white hover:underline text-md"> | FAQs | </h1>
                        <h1 className="text-navcol-300 hover:cursor-pointer  hover:text-white hover:underline text-md"> | Terms and Conditions | </h1>
                        <h1 className="text-navcol-300 hover:cursor-pointer  hover:text-white hover:underline text-md"> | Privacy Policy |</h1>
                    </div>
                    <div className="mt-8 h-4 w-24">
                        <img src="https://asset.brandfetch.io/id4J58sqa_/idaQ1GyW_d.svg?updated=1674733846500"></img>
                    </div>
                    <div className="flex flex-row items-center justify-center mb-8 gap-3 mt-8">
                      <div><a href="https://www.linkedin.com/company/bookmyshow/?originalSubdomain=in"><FaLinkedin className="text-4xl hover:cursor-pointer  hover:text-white text-navcol-300" /></a></div>
                      <div><a href="https://twitter.com/bookmyshow"><FaTwitter className="text-4xl hover:cursor-pointer  hover:text-white text-navcol-300" /></a> </div>
                      <div><a href="https://m.facebook.com/BookMyShowIN/?locale2=en_US"><FaFacebookF className="text-4xl hover:cursor-pointer hover:text-white text-navcol-300" /></a></div>
                      <div><a href="https://www.instagram.com/bookmyshowin/?hl=en"><FaInstagram className="text-4xl hover:cursor-pointer hover:text-white text-navcol-300" /></a></div>
                      <div><a href="https://www.youtube.com/channel/UCV7DChRolW8-60g2053qi_A"><FaYoutube className="text-4xl hover:cursor-pointer hover:text-white text-navcol-300" /></a></div>
                      <div><a href="https://www.linkedin.com/company/bookmyshow/?originalSubdomain=in"><FaLinkedin className="text-4xl hover:cursor-pointer  hover:text-white text-navcol-300" /></a></div>
                    </div>
                    <div className="flex flex-col items-center  mb-8">
                    <div className="flex flex-col items-center ">
                        <h1 className="text-navcol-300 text-center text-sm">Copyright 2022 © Bigtree Entertainment Pvt. Ltd. All Rights Reserved.</h1>
                       <h1 className="text-navcol-300 text-center text-sm">The content and images used on this site are copyright protected and copyrights vests with the respective owners. The usage of the content and images on this website is intended to promote the works and no endorsement of the artist shall be implied. Unauthorized use is prohibited and punishable by law.</h1>
                       </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default FooterPart;