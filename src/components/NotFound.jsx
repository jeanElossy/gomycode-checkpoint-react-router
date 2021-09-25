import React from 'react'
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div className="notFound d-flex flex-column">
            <div className="text-center">
                <h1>Page introuvable</h1>
                <h2 className="h4">Erreur 404 !</h2>
            </div>
            <div>
                <Link exact to="/dashbord">
                    <button className="btn btn-primary p-2" >Aller sur la page d'acceuil</button>
                </Link>
            </div>
        </div>
    )
}

