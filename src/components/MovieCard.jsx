import React from 'react';
import { Player } from "video-react";
//import ReactPlayer from 'react-player'
import {Link, Route} from "react-router-dom";
import Description from './Description';


const MovieCard = ({ match, film}) => {


  //const index = arr.findIndex
//console.log(match)
//console.log(...arr)


  return (
    <>
      <div className="box position-relative ">
          
          <Link to={`description/${film.id}`}>
            <Player 
              url={film.urlFilm}
              controls={true}
              poster={film.urlPoster}
              muted={true}
              className="video"
              width='100%'
              height='100%'
              BigPlayButton={true}
            />
          </Link>
          
        <div className="d-flex mt-3 justify-content-between">
          <h1 className="h5">{film.title}</h1>
          <span>{film.rating}</span>
        </div>
      </div>
    </>
    );
  }
  
  export default MovieCard;
  