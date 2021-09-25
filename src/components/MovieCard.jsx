import React from 'react';
//import { Player } from "video-react";
import ReactPlayer from 'react-player'
import { Link } from "react-router-dom";


const MovieCard = ({ match, film}) => {

  return (
    <>
      <div className="box position-relative">
                
          <Link to={`/description/${film.id}`}>
            <ReactPlayer 
              url={film.urlFilm}
              controls={true}
              poster={film.urlPoster}
              muted={true}
              className="video"
              width='100%'
              height='100%'
            />
            <h1 className="h5 mt-4">{film.title}</h1>
          </Link>
          
        
          <span>{film.rating}</span>
        </div>
    
    </>
    );
  }
  
  export default MovieCard;
  