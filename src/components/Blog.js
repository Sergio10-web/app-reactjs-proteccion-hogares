import React, { Component } from 'react';
import Sidebar from './Sidebar';

import Slider from './Slider';

class Blog extends Component {
    render() {
        return (


            <div id="blog">
                <Slider
                    title="Artículos"
                    sliderTamaño="slider-small"
                />
                <div className="center">
                    <div id="content">
                        <div className="tarjet">
                            <div className="first-tarjet">
                                <div className="tarjet-item">
                                    <h1>Pinchos seguridad</h1>
                                    <img src="pichos.png" alt="Imagen"></img>
                                    <p>Una disuasión eficaz y de bajo costo contra intrusos no deseados, plagas, pájaros y animales. Totalmente resistente al agua y se puede cortar a medida para adaptarse a sus necesidades.</p>
                                </div>
                            </div>
                            <div className="second-tarjet">
                                <div className="tarjet-item">
                                    <h1>Ventana Blindada</h1>
                                    <img src="ventana.png" alt="Imagen"></img>

                                    <p>No basta con que el fabricante o vendedor nos explique los motivos para que una ventana, puerta o reja es muy segura, existe una certificación que se obtiene en laboratorios debidamente certificados .</p>
                                </div>
                            </div>

                        </div>
                        <div className="tarjet">
                            <div className="first-tarjet">
                                <div className="tarjet-item">
                                    <h1>Puerta AntiEntrada</h1>
                                    <img src="puertablindadaa.png" alt="Imagen"></img>
                                    <p>Puerta Antientrada de vivienda especial Antiokupa con Servicio de Instalación.Suministro de Puertas Antientrada para viviendas con servicio de instalación. </p>
                                </div>
                            </div>
                            <div className="second-tarjet">
                                <div className="tarjet-item">
                                    <h1>Camara Video-vigilancia</h1>
                                    <img src="camaraa.png" alt="Imagen"></img>

                                    <p>Cámara de seguridad domo con carcasa de PVC. Gracias a su sensor 1/4 CMOS, obtiene una resolución de 420 líneas de televisión.Su lente fija de 3,6 mm  incluye LED INFRARROJOS para grabación nocturna.</p>
                                </div>
                            </div>

                        </div>
                        <div className="tarjet">

                            <div className="first-tarjet">
                                <div className="tarjet-item">
                                    <h1>Sistema Alarma</h1>
                                    <img src="alarma1.png" alt="Imagen"></img>
                                    <p>Colocar una alarma para casa en el lugar indicado no solo mejora tu sistema de seguridad,también previene que un accidente o un evento las deje inservibles.</p>
                                </div>
                            </div>

                            <div className="second-tarjet">
                                <div className="tarjet-item">
                                    <h1>Cierre Invisible</h1>
                                    <img src="cerraduraa.png" alt="Imagen"></img>

                                    <p>especial porque es una cerradura completamente invisible al exterior. Se puede tener como complemento a las cerraduras convencionales, y se adapta perfectamente a las puertas de metal, madera o cristal, siendo muy fácil de instalar.</p>
                                </div>
                            </div>

                        </div>

                    </div>
                    <Sidebar

                        blog="true"
                    />



                </div>{/*terminando el div center*/}


            </div>

        );
    }
}
export default Blog;