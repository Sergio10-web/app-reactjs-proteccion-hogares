import React, { Component } from 'react';

class Sidebar extends Component {

    render() {

        return (
            <aside id="sidebar">
                {
                    //si esta props es igual a true se cumple esta parte del sidbar
                    this.props.blog == "true" &&
                    <div id="nav-blog" className="sidebar-item">
                    <h3>No espere más</h3>
                    <a href="#" className="btn btn-success">Pedir presupuesto</a>
                </div>
                }

                
                <div id="search" className="sidebar-item">
                    <h3>Buscador</h3>
                    <p>Encuentra la protección que buscas</p>
                    <form>
                        <input type="text" name="search"/>
                        <input type="submit" name="submit" value="Buscar" className="btn"/>
                    </form>

                </div>

            </aside>

        );

    }
}
export default Sidebar;