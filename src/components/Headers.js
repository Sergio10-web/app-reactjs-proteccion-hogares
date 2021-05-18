import React, { Component } from 'react';
import {Navlink} from 'react-router-dom'; //componente propio de react-dom


class Header extends Component {

    render() {
        return (
            <header id="header">
                <div className="center">
                {/*LOGO*/}
                <div id="logo">
                    <img src="logo512.png" alt="app-logo" alt="Logotipo"></img>
                        <span id="brand">
                            <strong>SM</strong>System
            </span>
            </div>


                    {/*MENU*/}
                    <nav id="menu">
                        {/*ul para una lista desornedada*/}
                        <ul>
                            {/*li para nombrar los elementos en la lista*/}
                            <li>
                                <Navlink to="/">Inicio</Navlink>
                            </li>
                            <li>
                                <Navlink to="/ruta-prueba">Blog</Navlink>
                            </li>
                            <li>
                                <Navlink to="/segunda-ruta">Contact</Navlink>
                            </li>
                            <li>
                                <Navlink to="/pagina-1">Pagina1</Navlink>
                            </li>
                            <li>
                                <Navlink to="/">Pagina2</Navlink>
                            </li>

                        </ul>

                    </nav>
                    {/*Limpiar elementos Flotados*/}
                    <div className="clearfix"></div>

                </div>

            </header>
        );
    }
}

export default Header;