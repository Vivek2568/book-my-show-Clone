import React, { useState,useEffect } from "react";
import Poster from "../../poster/poster.component";
import PosterSlider from "../PosterSlider/PosterSlider.commponent";
import { useParams } from "react-router-dom";
import axios from "axios";




const Recomandation = (props) => {
    const params = useParams();
    const [recom, setrecom] = useState([]);
    useEffect(() => {
        const RequestDetails = async () => {
            const requestrecom = await axios.get(`movie/${params.id}/recommendations`);
            setrecom(requestrecom.data.result);
        }
        RequestDetails();
    }, []);
    console.log(recom);
    return (
        <>
            <div>
                <PosterSlider recommovies={recom} title="Recommended Movies" />
            </div>
        </>
    )
}
