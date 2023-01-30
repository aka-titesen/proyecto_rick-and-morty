import React, { useEffect, useState } from 'react'
import Card from './Card'
import RickAndMortyService from '../../services/RickAndMorty.service';

const Cards = () => {

    const [mascotas, setMascotas] = useState([]);

    /*
    ? Está pendiente a la escucha activa de cambios, es decir; cuando hay un cambio lo renderiza,
    ? Va a estar escuchando lo que recibe como segundo parametro y si lo hay
    ! Ejecuta lo que está dentro de la función
    */
    useEffect(() => {
        RickAndMortyService.getAllCharacters()
            .then((data) => setMascotas(data.results))
            .catch((error) => console.log(error));
    }, [mascotas])

    const cardList = mascotas.map((m) => <Card mascota={m} key={m.id} />)

    return (
        <div className="album py-5 bg-light">
            <div className="container">

                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    {cardList}
                </div>
            </div>
        </div>
    )
}

export default Cards
