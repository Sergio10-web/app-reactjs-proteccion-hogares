import React, { Component } from 'react';
import Sidebar from './Sidebar';

import Slider from './Slider';

class Conocenos extends Component {
    render() {
        return (


            <div id="blog">
                <Slider
                    title="Conocenos"
                    sliderTamaño="slider-small"
                />
                <div className="center">
                    <div id="content-conoc">
                        <article class="article-item article-detail" >

                            <div className="image-wrap-conocido">
                                <img src="blindaje1.png" alt="Imagen"></img>
                            </div>

                            <h1 className="subheader">Somos una empresa única en el sector</h1>
                            
                            <p>IPB Systems nace como la materialización de la pasión de un equipo de ingenieros por las tecnologías relacionadas con la seguridad. Con el tiempo y los proyectos, hemos ampliado nuestro equipo. Ingenierías en Informática, robótica, física, inteligencia artificial, telecomunicaciones, matemáticas confluyen y conforman el conocimiento global de nuestra empresa. Con esta visión general hemos aportado calidad y ganado la confianza de nuestros clientes.</p>
                            <p>Esta capacidad para la resolución de problemas ha sido conjugada con profesionales de los cuerpos de seguridad que nos han aportado su experiencia. Conociendo y analizando el modo de trabajo de los agresores hemos podido depurar nuestras soluciones.</p>
                            <p>Paulatinamente hemos ampliado nuestra cartera de productos y hoy en día cubrimos todas las áreas relacionadas con la seguridad doméstica. Nuestros servicios engloban  todas las fases de un proyecto de seguridad desde el diseño, fabricación, instalación y mantenimiento del hardware-software al soporte de toda la instalación.</p> 
                            <p>Y lo que es nuestro mayor orgullo, hemos desarrollado un sistema revolucionario que hemos rebautizado como Active Safe Home. Absolutamente único a nivel mundial que está reinventando en concepto de seguridad en el hogar.Hoy ponemos a su disposición la experiencia de nuestro equipo de ingenieros y una red de instalación y mantenimiento con cobertura en todo el país.</p>
                            <div class="clearfix"></div>
                        </article>



                        {/*listado de articulos que vienen de api rest de node*/}
                    </div>






                </div>{/*terminando el div center*/}


            </div>

        );
    }
}
export default Conocenos;