import React from 'react'
import { NavLink} from 'react-router-dom';

export default function NotFound() {
    return (
        <div className="notFound d-flex flex-column">
            <div className="text-center">
                <h1>Page introuvable</h1>
                <h2 className="h4">Erreur 404 !</h2>
            </div>
            <div>
                <NavLink exact to="/Home">
                    <button className="btn btn-primary p-2" >Aller sur la page d'acceuil</button>
                </NavLink>
            </div>
        </div>
    )
}
