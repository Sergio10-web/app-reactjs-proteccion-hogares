import React, { Component } from 'react';

class SeccionPruebas extends Component {

    contador = 0;

    constructor(props){
        super(props);
        this.state = {
            contador: 0
        }
    }

    sumar(){

        //this.contador = this.contador + 1;
        //this.state.contador = this.state.contador + 1;
        this.setState({
            contador: (this.state.contador + 1)
        });
    }
    restar(){

        //this.contador = this.contador - 1;
        this.setState({
            contador: (this.state.contador - 1)
        });
    }
    
    render() {
        return (
            <section id="content">
               <h2 className="subheader">Artículos</h2>
                <p>
                    que pasa mi niño
                </p>

                <h2 className="subheader">Funciones y jsx basico</h2>
                <h2 className="subheader">componentes</h2>
                <section className="componentes">
                <h2 className="subheader">Estado</h2>
                <p>
                    {this.state.contador}
                </p>
                <input type="button" value="sumar" onClick={this.sumar.bind(this)}/>
                <input type="button" value="restar" onClick={this.restar.bind(this)}/>

                    

                </section>
            </section>
        );
    }
}
export default SeccionPruebas;