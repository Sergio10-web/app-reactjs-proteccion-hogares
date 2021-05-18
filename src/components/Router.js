import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//importando modulo react-router-dom
import Home from './Home';
import Conocenos from './Conocenos';
import Blog from './Blog';
import Products from './Products';
import Formulario from './Formulario';
import Error from './Error';
import Headerrr from './Headerrr';

class Router extends Component {

    render() {
        return (


            <BrowserRouter>

                <Headerrr></Headerrr>
                {/*configuracion de rutas y paginas*/}
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/conocenos" component={Conocenos} />
                    <Route exact path="/articulos" component={Blog} />
                    <Route exact path="/productos" component={Products} />
                    <Route exact path="/formulario" component={Formulario} />

                    <Route component={Error} />


                </Switch>



            </BrowserRouter>
        );

    }
}
export default Router;