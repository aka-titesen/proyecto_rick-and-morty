import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom';
import RickAndMortyService from '../../services/RickAndMorty.service';

const Detail = () => {

  //* Por acá nos llegaría el objeto mascota
  const [mascota, setmascota] = useState({});
  //* Capturo el "id(Lo estableci con ese nombre)" que le mando desde "App.js" cuando el usuario clickea en una carta
  //* Acá lo desarmo al objeto
  const { id } = useParams();
  //*Nos extrae el contenido de la url después de la raíz por ejemplo: /detalle/1
  const { pathname } = useLocation();

  useEffect(() => {
    RickAndMortyService.getCharacterById(id)
    .then((data)=> setmascota(data))
  }, [id]) //* Va estar escuchando permanentemente los cambios del id


  return (
    <div className="card mb-3" style={{ 'background': 'gainsboro' }}>
      <div className="row g-0 mt-4 mb-4">
        <div className="col-md-3">
          <img src={mascota.image} className="img-fluid rounded-start imgDetalle" alt="img del mascota" />
        </div>
        <div className="col-md-8 detallemascota">
          <div className="card-body">
            <h5 className="card-title">{mascota.name}</h5>
            <p className="card-text"><small className=""> Specie: {mascota.species}</small></p>
            <p className="card-text"><small className=""> Status: {mascota.status}</small></p>
            <p className="card-text"><small className=""> Gender: {mascota.gender}</small></p>
            <p className="card-text"><small className=""> Created: {mascota.created}</small></p>
          </div>
          <div className="btn-group" style={{ 'marginLeft': '15px' }}>
            <button
              type="button"
              className="btn btn-sm btn-outline-secondary"
            >
              <Link to="/" className="nav-link px-2 text-success">Inicio</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail;
