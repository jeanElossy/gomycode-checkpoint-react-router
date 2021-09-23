import React from 'react';
//import { Player } from "video-react";
import ReactPlayer from 'react-player'
import {Link, Route} from "react-router-dom";
import Description from './Description';


const MovieCard = ({ url, film, arr}) => {

//to={`${match.url}/${film.urlFilm}
//console.log(url)

  return (
    <>
      <div className="box position-relative ">
          
          <Link to={`${url.url}/${film.urlFilm}`}>
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
          </Link>
          
        <div className="d-flex mt-3 justify-content-between">
          <h1 className="h5">{film.title}</h1>
          <span>{film.rating}</span>
        </div>
      </div>

      <Route exact path={url} render={() => <Description />}/>

      <Route exact path={`${url.url}/:filmId`} render={
        ({match}) => <Description {...arr.find(p => p.id === match.params.filmId)}/>}/>
      
    </>
    );
  }
  
  export default MovieCard;
  