import React, { Component } from 'react';

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
                                <a href="index.html">Inicio</a>
                            </li>
                            <li>
                                <a href="articles.html">Blog</a>
                            </li>
                            <li>
                                <a href="contact.html">Contact</a>
                            </li>
                            <li>
                                <a href="#">Pagina1</a>
                            </li>
                            <li>
                                <a href="#">Pagina2</a>
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