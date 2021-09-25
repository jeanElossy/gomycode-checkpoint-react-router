import React from 'react'
import { NavLink } from 'react-router-dom';


const NavBar = ({search, searchRating}) => {

    return (
        <>
      <nav className="navbar container-fluid header p-3 ">
          <div className="container-fluid">
              <div className="text">
                  <NavLink exact to="/dashbord" className="navbar-brand line">FILMS</NavLink>
              </div>
              <form className="d-flex">
                  <input 
                      className="form-control me-2" 
                      type="search" 
                      placeholder="Recherche par titre" 
                      aria-label="Search" 
                      onChange={search}
                  />
                  <input 
                      className="form-control me-2" 
                      type="search" 
                      placeholder="Recherche par note" 
                      aria-label="Search" 
                      onChange={searchRating}
                  />
              </form>
          </div>
      </nav>
  </>
  )
}
export default NavBar;