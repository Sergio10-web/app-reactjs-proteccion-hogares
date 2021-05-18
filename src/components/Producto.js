import React, { Component } from 'react';

class Producto extends Component {

    render() {
        //defino la variable titulo y imagen
        //y se lo paso a un objeto
        //paso la props con el objeto producto 
        const { titulo, image,texto } = this.props.producto;

        return (
            <article className="article-item" id="article-template">
                <div className="image-wrap">
                    <img src={image} alt={titulo} article={texto} />
                </div>

                <h2>{titulo}</h2>
                <p>{texto}</p>
                 
                <a href="#">Leer más</a>
                <div className="clearfix"></div>
            </article>
        )
    }


}
export default Producto;