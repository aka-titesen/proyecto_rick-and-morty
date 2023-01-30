import React, { Component } from 'react'
import RickAndMortyService from '../../services/RickAndMorty.service';
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
        RickAndMortyService.getAllCharacters()
            .then((data) => this.setState({ mascotas: data.results }))
            .catch((error) => console.log(error));
    }
    /*
    Linea 44:
    Mando a cards los resultados, es decir; la lista de personajes.
    Cards.js recibirá la lista de personajes por parámetro (props).
    */
    render() {
        return (
            <main>
                <section className="py-5 text-center container">
                    <div className="row py-lg-5">
                        <div className="col-lg-6 col-md-8 mx-auto">
                            <h1 className="fw-light">Album example</h1>
                            <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
                            <p>
                                <a href="#" className="btn btn-primary my-2">Main call to action</a>
                                <a href="#" className="btn btn-secondary my-2">Secondary action</a>
                            </p>
                        </div>
                    </div>
                </section>
                <Cards mascotas={this.state.mascotas} />
            </main>
        )
    }
}

export default Main
