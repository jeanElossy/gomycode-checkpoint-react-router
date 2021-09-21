import React from 'react';
import { Player } from "video-react";
//import ReactPlayer from 'react-player'
import {NavLink} from "react-router-dom";
//import ReactStars from "react-rating-stars-component";

const MovieCard = ({film}) => {
  console.log(film.id)

  //let des = film.nom;
  const handleVideo = () => {
    alert()
  }

  return (
    <>
      <div className="col-12 box position-relative ">
        <NavLink exact to="/Description">
          <Player 
            url={film.urlFilm}
            controls={true}
            poster={film.urlPoster}
            muted={true}
            className="video"
            width='100%'
            height='100%'
            BigPlayButton={true}
            onClick={() => handleVideo}
          />
        </NavLink>
        <div className="d-flex mt-3 justify-content-between">
          <h1 className="h5">{film.title}</h1>
          <span>{film.rating}</span>
        </div>
      </div>
    </>
  );
}

export default MovieCard;