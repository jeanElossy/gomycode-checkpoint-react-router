import React from 'react'
import History from"./History";
import NavBar from './NavBar';


export default function Description() {

    return (
        <div className="container-fluid description ms-0">
            <NavBar />
            <div className="container">
                <History />
                <div className="row">
                    <div className="col-12 col-md-7 video__annonce">

                    </div>
                    <div className="col-12 col-md-5 text-center">
                        <h1>Description</h1>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

