import React, {useEffect, useState} from "react";
import "./Banner.css";
import axios from './axios'
import requests from './request';
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer';



function Banner() {
    const [movie, setMovie] = useState([]);
    
    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchNetFlixOriginals)

            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length)
            ])
            return request;
        }
        fetchData();
    },[])
    console.log(movie);

    function truncate(str, n){
        return str?.length > n ? str.substr(0, n-1) + "..." : str;
    }


    const [trailerUrl, setTrailerUrl] = useState("");
    const opts = {
        height: "390px",
        width: "100%",
        playerVars: {
            autoplay: 1,
        }
    }

    
    const handleClick = (movie) => {
        if(trailerUrl){
            setTrailerUrl("");
        } else {
            movieTrailer(movie?.name || "")
            .then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'));
            })
            .catch(() => console.log('Temporary Unavailable'))
        }
    }

    return (
        <>
        <header className="banner" style={{background:"cover",backgroundImage:`url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,backgroundPosition:"center cent"}}>
            <div className="banner_contents">
                <h1 className="banner_title">
                
                    {movie?.title || movie.name || movie?.orignal_name}
                </h1>
                <div className="banner_buttons">
                    <button className="play btn"  onClick = {() => handleClick(movie)}>
                        Play 
                       
                    </button>
                    <button className="play btn" onClick = {() => handleClick(movie)}>
                        My List
                    </button>
                </div>
                <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
                   
            </div>
            <div className="banner_fade">
            
            </div>
           
           
        </header>
        <div className="container-fluid" style={{margin:"2%"}}>
                        
        {trailerUrl && <YouTube videoId = {trailerUrl} opts = {opts} /> }    
    </div>
    </>
        
    )
}
export default Banner;