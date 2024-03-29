import movieTrailer from 'movie-trailer';
import YouTube from "react-youtube";
import './Row.css'
import React, { useState ,useEffect} from 'react';
import axios from './axios';


const base_url="https://image.tmdb.org/t/p/original/";



function Row({ title,fetchUrl ,isLargeRow}) {
    const [movies,setMovies]=useState([]);
    const [trailerUrl,setTrailerUrl]=useState("");

    useEffect(() => {
        async function fetchdata() {
            const request=await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchdata();
    }, [fetchUrl]);

    const opts={
        height:"390px",
        width:"100%",
        playerVars: {

            autoplay:1,
        }    
    }

    const handleClick=(movies) => {
        if(trailerUrl){
            setTrailerUrl("");
        }else{
            movieTrailer(movies?.name || "")
            .then((url) =>{
                // https://www.youtube.com/watch?v=XtMThy8QKqU
                const urlParams=new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get("v"));
            }).catch((error) =>console.log(error));
        }
    };

    // console.log(movies);
    return (
        <div className="row" >
            {/*title*/}
            <h2>{title}</h2>
            <div className="row__posters">
                {movies.map((movie) =>(

                    <img
                     key={movie.id} 
                    onClick={()=>handleClick(movie)}
                    className={`row__poster ${isLargeRow && "row__posterLarge"}`} 
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                     alt={movie.name}/>
                ))}
            </div>
        
                  {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
                 
        </div>
    )
}

export default Row
