import React from 'react'
import History from"./History";
import NavBar from './NavBar';
import ReactPlayer from 'react-player'


export default function Description({match, linkAnnouncement}, description) {

    //let film= data;
    console.log(match)
    
    return (
        <div className="container-fluid description ms-0">
            <NavBar />
            <div className="container">
                <History />
                <div className="row">
                    <div className="col-12 col-md-4 video__annonce">
                        
                            <ReactPlayer 
                                url={linkAnnouncement}
                                controls={true}
                                muted={true}
                                className="video"
                                width='100%'
                                height='100%'
                                BigPlayButton={true}
                            />
                        
                    </div>
                    <div className="col-12 col-md-5 text-center text--description">
                        <h1>{description}</h1>
                    </div>
                    
                </div>

            </div>
        </div>
        
    )
}

/*
<ReactPlayer 
    url={film.linkAnnouncement}
    controls={true}
    muted={true}
    className="video"
    width='100%'
    height='100%'
    BigPlayButton={true}
/>
*/