import React from 'react';
import { Player } from "video-react";
//import ReactPlayer from 'react-player'
//import {Link,} from "react-router-dom";
//import ReactStars from "react-rating-stars-component";
//import Description from "./Description";


const MovieCard = ({film, match, key, pageDetails}) => {

  console.log(match)
  // <Link to={`${match.url}/description`}>

  //let des = film.nom;
  const handleClick = () => {
      alert("hello")
  }

  return (
    <>
      <div className="col-12 box position-relative ">
          
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

        <div className="d-flex mt-3 justify-content-between">
          <h1 className="h5">{film.title}</h1>
          <span>{film.rating}</span>
        </div>


        
        </div>
    </>
    );
  }
  
  
  export default MovieCard;
  

  //<Route exact path={`${match.url}/:filmId`} render={(props) => <Description data={film} {...props}/>} />