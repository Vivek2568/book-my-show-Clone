import React from "react";
import EntertainmentCardSlider from "../Components/Entertainment/Entertainmentcard.component";
import PosterSlider from "../Components/PosterSlider/PosterSlider.commponent";
import PremierImages from "../config/tempImages";
import OnlineStreamEvent from "../config/onlineeventimage";
import OutdoorEvents from "../config/Outdoorevents";
import LaughterImages from "../config/LaughterImages";
import TopGamesAndEvents from "../config/Topgamesandevents";
const HomePage = () => {
    return (
        <>
            <div className="flex flex-col gap-6">
                <div className="container mx-auto px-36">
                    <h1 className="text-2xl font-bold text-grey-800 py-8">The Best of Live Events</h1>
                    <EntertainmentCardSlider />

                </div>
                <div className="bg-navcol-200 py-6 my-16">

                    <div className="container mx-auto px-36">
                        <div className="flex">
                            <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png"
                                alt="Rupay" className="w-full h-full" />
                        </div>
                        <PosterSlider images={PremierImages} title="Premiers" subtitle="Brand New Release Every Friday" isDark={true} />
                    </div>

                </div>
                <div className="container mx-auto px-36 ">
                    <PosterSlider images={OnlineStreamEvent} title="Online Streaming Event" subtitle="Online Event For You" isDark={false} />
                </div>
                
                <div className="container mx-auto px-36 ">
                    <PosterSlider images={OutdoorEvents} title="Outdoor Event" subtitle="Live and outdoor" isDark={false} />
                </div>
                <div className="container mx-auto px-36 ">
                    <PosterSlider images={LaughterImages} title="Laughter Therepy" subtitle="Live and outdoor" isDark={false} />
                </div>
                <div className="container mx-auto  px-36 ">
                    <PosterSlider images={TopGamesAndEvents} title="Top Sports and Events" subtitle="Online and outdoor" isDark={false} />
                </div>
            </div>
        </>
    )

}
export default HomePage;