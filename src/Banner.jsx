import './Banner.css';
import React, { useState,useEffect } from 'react';
import axios from './axios';
import requests from './requests';




function Banner() {
    const [movies,setmovies]=useState([]);

    useEffect(() => {
       async function fetchdata() {
           const request =await axios.get(requests.fetchNetflixOriginals);
           setmovies( request.data.results[Math.floor(Math.random() * request.data.results.length -1)]
           );
           return request;
       }
       fetchdata();
    }, []);
    console.log(movies);
    function truncate(str,n) {
        return str?.length>n?str.substr(0,n-1)+ "..." :str;
    }

    return (<>
        <header className="banner"
        style={{
            backgroundSize:"cover",
            backgroundImage:`url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
            backgroundPosition:"center center",
        }}
        >
        <div className="banner__contents">
     
        {/* background image */}
            {/* title */}
            <h1 className="banner__title">{movies?.title||movies?.name || movies?.original_name} </h1>

            <div className="banner__buttons">
                <button className="banner__button">Play</button>
                <button className="banner__button">My List</button>
            </div>

            <h1 className="banner__discription">
                {movies?.overview}
                {truncate(movies?.overview,150)}
            </h1>

            {/* div>2 button */}
            {/* discription */}
            </div>
            <div className="banner--fadeBottom"></div>
        </header>
        </>
    )
}

export default Banner;
