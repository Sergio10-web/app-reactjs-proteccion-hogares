import React, { Component } from 'react';
import Sidebar from './Sidebar';


class Formulario extends Component {
    //guardando metodo
    recibirFormulario = (e) => {

        alert("Formulario enviado")
    }
    render() {
        return (


            <div id="blog">
                
                <div className="center">
                    <div id="content">

                        <h1 className="subheader">Formulario</h1>


                        {/*Formulario*/}

                        

                        <form class="mid-form" onSubmit={this.recibirFormulario}>
                            <div class="form-group">
                                <label for="nombre">Nombre</label>
                                <input type="text" name="nombre"></input>
                            </div>
                            <div class="form-group">
                                    <label for="apellidos">Apellidos</label>
                                    <input type="text" name="nombre"></input>
                            </div>
                            <div class="form-group">
                                        <label for="bio">¿Que tipo de protección necesita?</label>
                                        <textarea name="bio"></textarea>
                            </div>
                            <div class="form-group radibuttons">
                                        <input type="radio" name="genero" value="particular" />Particular
                                        <input type="radio" name="genero" value="empresa" />Empresa
                                        <input type="radio" name="genero" value="otro" />Otro

                            </div>
                                    <div class="clearfix"></div>


                                    <input type="submit" value="enviar" class="btn btn-success"></input>
                            </form>
                                </div>
                                <Sidebar

                                    blog="false"
                                />



                            </div>{/*terminando el div center*/}
                

            </div>

        );
    }
}
export default Formulario;