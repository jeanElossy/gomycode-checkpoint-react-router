import History from"./History";
import ReactPlayer from 'react-player'

export default function Description({ match, data }) {

    let film = data.find(p => p.id == match.params.id)

    return (
        <div className="container-fluid description ms-0">
            <div className="container">
               
                <div className="row">
                    <div className="col-12 col-md-4 video__annonce">
                        <ReactPlayer 
                            url={film.linkAnnouncement}
                            controls={true}
                            muted={true}
                            className="video"
                            width='100%'
                            height='100%'
                        />
                    </div>
                    <div className="col-12 col-md-5 text-center text--description">
                        <h1>{film.description}</h1>
                    </div>
                    <History />
                </div>

            </div>
        </div>
        
    )
}

