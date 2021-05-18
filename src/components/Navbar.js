import React,{useState}from 'react'

import "./Navbar.css"
import { NavLink } from 'react-router-dom';

function Navbar() {
    const[click, setClick] = useState(false);
    const handleclick = () => setClick(!click);

    return( 
    <>
        <nav className="navbar">
            <div className="nav-container">
                <NavLink exact to="home" className="nav-logo">
                    Inicio
                    <i className="fas fa-code"></i>
                </NavLink>

                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">

                <NavLink exact to="/conocenos"
                        activeClassName='active'
                        className="nav-links"
                        onClick={handleclick}>
                            
                            Conocenos
                </NavLink>
                    </li>
                    <li className="nav-item">

                <NavLink exact to="/articulos" 
                         activeClassName='active' 
                        className="nav-links" 
                        onClick={handleclick}>
                            Articulos
                </NavLink>
                    </li>
                    <li className="nav-item">

                <NavLink exact to="/productos" 
                         activeClassName='active'
                         className="nav-links" 
                         onClick={handleclick}>
                            Niveles
                </NavLink>
                    </li>
                    <li className="nav-item">

                <NavLink exact to="/formulario" 
                         activeClassName='active' 
                         className="nav-links" 
                         onClick={handleclick}>
                            Formulario
                </NavLink>
                    </li>
                    
                </ul>
                <div className="nav-icon" onClick={handleclick}>
                    <i className={click ? "fas fa-times":"fas fa-bars"}></i>
                </div>
            </div>
        </nav>
    </>);
}

export default Navbar;
