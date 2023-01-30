/*
Creamos un componente funcional para el footer de la aplicación,
y lo importaremos en app.js
*/
import React, { useState } from 'react'
//Retorna una porción de código del componente footer
//Los componentes de react se manejan bajo el archivo jsx
const Footer = () => { //Funcional componenet

    /*
    * EXPLICACION DEL HOOK MÁS COMUN -> useState
    * Explicación de los hooks en functional components
    ? Tenemos una variable que abre un arreglo
    ! 1) 1ra posicion tenemos la variable(clicks) que va a ser sometida a éste state(estado)
    ! 2) 2da posicion que va a ser la funcionalidad encargada de cambiar la primera variable que mencione
    */
    const [clilcks, setClicks] = useState(0);

    const year = new Date().getFullYear();
    const companyName = "EGG Education";

    const handleClick = () => {
        console.log("Holis");
    }

    return (
        <div>
            <div class="container">
                <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <p class="col-md-4 mb-0 text-muted">&copy; {year} {companyName}</p>


                    <ul class="nav col-md-4 justify-content-end">
                        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Home</a></li>
                        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Features</a></li>
                        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Pricing</a></li>
                        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">FAQs</a></li>
                        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">About</a></li>
                    </ul>
                </footer>
            </div>
        </div>
    )
}

export default Footer
