import React, {useState, useEffect} from 'react'
import { useUserForm } from './../../hooks/Custom.hooks';

const UserForm = () => {

  const {form,setform,handleChanges} = useUserForm();

  //* Va a revisar si ambas contraseñas que ingresa el usuario son iguales
  //* Es decir maneja el estado para ver si las contraseñas tienen igualdad
  const [areEquals, setAreEquals] = useState(true)

  //* Se encargará de revisar si se ingresa la contraseña de confimación.
  //* Es decir maneja el estado para ver si hay la contraseña de confirmación
  const [passwordConfirmation, setPasswordConfirmation] = useState()

  const handlePasswordConfirmation = (evento) =>{
    setPasswordConfirmation(evento.target.value);
  }

  //* Va a estar escuchando permanentemente los cambios en la contraseña, si los hay
  //* Llama a la función setAreEquals y devuelve la comparación entre la contraseña y la confirmación
  useEffect(() => {

    const {password} = form;
    setAreEquals(password === passwordConfirmation);

  }, [passwordConfirmation])
  

  /**
   * * Se va encargar de atrapar el envió del formulario, 
   * * y si tuvieramos una api, es decir servidor y/o base de datos, la enviaría allí
   */
  const handleSubmit = (evento) =>{
    evento.prevenDefault();

  }

  return (
    <div className="w-25 mx-auto mt-5">
      <h4 className="mb-3">Humano Registrate!</h4>
      <form className="needs-validation" noValidate>
        <div className="row g-3">
          <div className="col-12">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="you@example.com"
              name="email" //Denominador común que usamos para atrapar en el Custom.hook para armar el json
              onChange={handleChanges} //Éste evento va a estar atento a la escucha de cambios en el input
            />
            <div className="invalid-feedback">
              Please enter a valid email address for shipping updates.
            </div>
          </div>

          <div className="col-12">
            <label htmlFor="address" className="form-label">
              Clave
            </label>
            <input
              type="password"
              className="form-control"
              id="address"
              placeholder="Clave"
              name="password" //Denominador común que usamos para atrapar en el Custom.hook para armar el json
              onChange={handleChanges} //Éste evento va a estar atento a la escucha de cambios en el input
              required
            />
            <div className="invalid-feedback">
              Please enter your shipping address.
            </div>
          </div>

          <div className="col-12">
            <label htmlFor="password2" className="form-label">
              Repetir Clave
            </label>
            <input
              //No le ponemos name porque no nos interesa mandarla a la api, la contraseña se manda del primer input
              type="password"
              className="form-control"
              id="password2"
              placeholder="Repetir clave"
              onChange={handlePasswordConfirmation} //Éste evento va a estar atento para revisar que la confimación de contraseña ingresada sea la misma que la primera
            />
            {!areEquals && (
              <div className="form-text list-group-item-danger">
                Las claves no son iguales
              </div>
            )}
          </div>
          <button
            disabled={!areEquals}
            className="w-100 btn btn-primary btn-lg"
            type="submit"
            onClick={handleSubmit} //Éste evento va a estar atento al click que se le haga al botón de envíar del formulario
          >
            Registrarme
          </button>
        </div>
      </form>
    </div>
  );
};
export default UserForm;