import React, { Component } from 'react';
import Producto from './Producto';
import Sidebar from './Sidebar';


class Products extends Component {
    state = {
        productos: [
            { titulo: 'Nivel proteccion 1', image: 'https://seguridadok.com/wp-content/uploads/2020/03/Bloquee-puertas-y-ventanas-para-proteger-su-hogar.jpg',texto:" Que nos garantiza que no nos despertaremos con un asaltante dentro de dormitorio? Le proporcionamos todos los elementos necesarios para esto no pase: Puertas, ventanas, persianas y paredes blindadas, adaptadas a cada líneaestética para pasar desapercibidas." },
            { titulo: 'Nivel de proteccion 2', image: 'https://www.gaceta.mx/wp-content/uploads/2020/01/ATRACOS.jpg' ,texto:"Que pasaría si estamos en el jardín o el salón, fuera de la habitación segura, y los asaltantes entran en nuestra casa?.Disponer de alarmas conectadas con vigilancia 24h, cuartos secretos donde poder esconderse.."},
            { titulo: 'Nivel de protección 3', image: 'https://www.hogar.mapfre.es/media/2018/08/que_hacer_cuando_entran_a_robar_a_tu_casa.jpg',texto:" Que nos garantiza que no nos despertaremos con un asaltante dentro de dormitorio? Le proporcionamos todos los elementos necesarios para esto no pase: Puertas, ventanas, persianas y paredes blindadas, adaptadas a cada líneaestética para pasar desapercibidas." }
        ],
        nombre: 'Sergio Moratilla'
    }
    render() {

        return (
            <div className="center">
            <div id="content" className='productos' className="productos">
                
                <h2 className="subheader">Productos</h2>
                <p>Selección de niveles de {this.state.nombre} </p>

                {/**crear comoponente de niveles */}
                <div id="articles">
                {
                    this.state.productos.map((producto, i) => {
                        return (
                            //tengo que pasarle la key para que react pueda identificarlo
                            //en el dom y pueda actualizar los datos en caso que se modifiquen
                            //y le paso la pelicula que este recorriendo en ese momento asignandole imagen y titulo
                            <Producto key={i}
                             producto={producto}/>
                            //a producto le llega un objeto producto
                        )


                    })
                }
                
                </div>
                
                </div> <Sidebar />
            </div>
                        )
                    }
}
export default Products;