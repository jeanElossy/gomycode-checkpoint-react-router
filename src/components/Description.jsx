import React from 'react'
import History from"./History";
import NavBar from './NavBar';
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom';


export default function Description({match, data}) {

    let film= data.find(p => p.id === match.params.filmId);
    console.log(film)
    
    return (
        <div className="container-fluid description ms-0">
            <NavBar />
            <div className="container">
                <History />
                <div className="row">
                    <div className="col-12 col-md-7 video__annonce">
                        <Link to="/Description">
                            <ReactPlayer 
                                url={film.linkAnnouncement}
                                controls={true}
                                muted={true}
                                className="video"
                                width='100%'
                                height='100%'
                                BigPlayButton={true}
                            />
                        </Link>
                    </div>
                    <div className="col-12 col-md-5 text-center text--description">
                        <h1>{film.description}</h1>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
