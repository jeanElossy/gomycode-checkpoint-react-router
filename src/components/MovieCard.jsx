import React from 'react';
//import { Player } from "video-react";
import ReactPlayer from 'react-player'
//import {Link,} from "react-router-dom";



const MovieCard = ({film}) => {

  return (
    <>
      <div className="box position-relative ">
          
            <ReactPlayer 
              url={film.urlFilm}
              controls={true}
              poster={film.urlPoster}
              muted={true}
              className="video"
              width='100%'
              height='100%'
              BigPlayButton={true}
            />

        <div className="d-flex mt-3 justify-content-between">
          <h1 className="h5">{film.title}</h1>
          <span>{film.rating}</span>
        </div>
      </div>
    </>
    );
  }
  
  export default MovieCard;
  