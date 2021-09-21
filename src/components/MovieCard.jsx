import React from 'react';
import { Player } from "video-react";
//import ReactPlayer from 'react-player'
import {NavLink, Route} from "react-router-dom";
//import ReactStars from "react-rating-stars-component";
import Description from "./Description";


const MovieCard = ({film, match}) => {

  //let des = film.nom;
  const handleClick = () => {
      alert("hello")
  }

  return (
    <>
      <div className="col-12 box position-relative ">
        <NavLink to={`${match.url}/${film.id}`}>
          <Player 
            url={film.urlFilm}
            controls={true}
            poster={film.urlPoster}
            muted={true}
            className="video"
            width='100%'
            height='100%'
            BigPlayButton={true}
            onClick={handleClick} 
          />
        </NavLink>
        <div className="d-flex mt-3 justify-content-between">
          <h1 className="h5">{film.title}</h1>
          <span>{film.rating}</span>
        </div>


        <Route exact path={`${match.url}/:filmId`} render={(props) => <Description data={film} {...props}/>} />
      </div>
    </>
  );
}

export default MovieCard;