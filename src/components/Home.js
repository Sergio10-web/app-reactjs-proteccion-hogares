import React, { Component } from 'react';

import Slider from './Slider';

class Home extends Component {
    render() {
        return (


            <div id="home">
                <Slider

                    title="Bienvenido a mi pagina de blindaje de Hogar"
                    btn="Ir al blog"
                    sliderTamaño="slider-big"
                />
                <div className="center-home">
                    <div id="content-main">
                        <article class="article-item1 article-detail" >
                            <h1 className="subheader">Blindar toda la casa?</h1>
                            <div>


                                <div className="image-text-wrap2">

                                    <img src="blind.png" />
                                    <p>Por muchos medios de los que se disponga, cuando queremos seguridad, la prioridad es la protección física.

                                    

                                    Cuando abordamos un proyecto de protección para un hogar nuestro primer objetivo es la separación física de los habitantes de la casa frente a posibles asaltantes. Muchos clientes al contactar con nosotros nos piden blindar toda la casa. Esto no suele ser posible debido al precio de los elementos blindados. Aquí el mayor error que se puede cometer: blindar toda la casa con el mejor nivel de blindaje que encaja en el presupuesto. De nada sirve una ventana o una persiana blindada que soporta “2 martillazos en lugar de 1”. Debemos invertir nuestro dinero en un elemento que soporte una agresión el tiempo necesario para que el asaltante desista o llegue la ayuda.

                                    Dicho esto parece claro que deberemos seguir unos criterios para seleccionar los espacios a cubrir:

                                    blindajesDebemos centrar nuestra atención en la protección de las estancias en función del tiempo que pasa la familia en ellas y el nivel de indefensión que se perciba. Siguiendo este criterio deberíamos empezar por los dormitorios.

                                    

                                    A la hora de proteger un espacio habrá que tener en cuenta el coste de la protección, el impacto estético de esta y si cambiará o condicionará la calidad de vida de la familia.</p>
                                </div>

                                <div className="image-text-wrap1">
                                    <img src="casa.png" />
                                    <p>Estamos orgullosos de proporcionar soluciones integrales para nuestros clientes. Desde el diseño al mantenimiento de los sistemas. Le asesoraremos y coordinaremos proyectos integrales de seguridad que pasen por:

                                    Colaborar con el arquitecto en el diseño de su casa.
                                    Selección e instalación de las puertas blindadas.
                                    Instalación del sistema de alarma más adecuado.
                                    Habitaciones seguras: blindaje de habitaciones (puertas, ventanas, paredes, etc.).
                                    Instalación e iteración con sistemas de domótica.
                                    Instalación del sistema Active Safe Home.
                                    Para darle el mejor servicio en cada una de estas líneas, nuestros servicios y actividades comprenden:

                                    Asesoramiento.
                                    Captación de requisitos y análisis.
                                    Arquitectura y decoración.
                                    Propuestas de proyecto con varios alcances. Soluciones totales que incluyen cada parte de la implantación.
                                    Laboratorio de soluciones.
                                    Diseño y fabricación de dispositivos (taller propio).
                                    Dirección y supervisión del proyecto.
                                    Desarrollo y paremetrización del software.
                                    Instalación de sistemas (tanto software como hardware).</p>
                                </div>


                            </div>
                            <div class="clearfix"></div>
                        </article>
                    </div>



                </div>{/*terminando el div center*/}



            </div>

        );
    }
}
export default Home;