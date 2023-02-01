import React, { Component } from 'react'

import Cards from './Cards';

export class Main extends Component { //Componente de clase

    /**
     * @param {*} props
     * @description La propiedad "state" en React es un objeto que contiene los datos dinámicos de un componente.
     * Es una parte clave de la arquitectura de React y se utiliza para almacenar y controlar los valores que cambian
     * y afectan la interfaz de usuario de un componente.
     * Los cambios en el "state" causan un re-render del componente y actualizan la vista en la página.
     * La propiedad "state" solo se puede modificar usando la función "setState" en React, y no se puede modificar directamente.
     */
    constructor(props) {
        super(props);
        this.state = { mascotas: [] };
    }

    componentDidMount() {

    }
    /*
    Linea 31:
    Mando a cards los resultados, es decir; la lista de personajes.
    Cards.js recibirá la lista de personajes por parámetro (props).
    */
    render() {
        return (
            <main>
                <Cards />
            </main>
        )
    }
}

export default Main
