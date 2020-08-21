import React from 'react'
import { Link } from 'react-router-dom'

function NavBar(props) {

    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark px-sm-5 bg-dark">
                <Link to='/' className="text-decoration-none">
                    <h1 className="text-light mr-4 font-weight-bold">Ricky N Morty</h1>
                </Link>
                <ul className="navbar-nav ml-5">
                    <li className=" col-sm nav-item  list-unstyled">
                        <Link to="/episodes" className="col-sm nav-link text-light font-weight-bold">
                            <h4>Episodes</h4>
                        </Link>
                    </li>
                </ul>
                <ul className="nav navbar-nav navbar-right ml-auto">
                    <li className="col-sm nav-item  list-unstyled">
                        <a href="https://rickandmortyapi.com/documentation" target="_blank" rel="noopener noreferrer" className="col-sm nav-link text-light"><h4>Documentation</h4></a>
                    </li>
                </ul>
            </nav>
            <Link to="/displayepisode" className="text-decoration-none">
                <form  onSubmit={props.searchEpisode}>
               <input className="form-control mt-4" type="text"
        placeholder="Name of the Episode.." aria-label="Search" style={{ width: "50%", margin: "auto" }} onChange={props.searchIt} />
                 </form>
           </Link>
           
        </div>

    )
}

export default NavBar
