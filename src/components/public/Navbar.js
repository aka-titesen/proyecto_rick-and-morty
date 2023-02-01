import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => { //Funcional component
  return (
    <header className="p-3 mb-3 border-bottom">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">


          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <Link
              
              to={"/"}
              className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            >
              <img className="App-logo" height="54" src="dog.png" alt="" />
            </Link>
            <li><Link to="/user-form" className="nav-link px-2 link-secondary">Formulario</Link></li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Navbar
