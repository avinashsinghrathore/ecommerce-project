import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand">🛒 ecommerce app</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to={"/"} className="nav-link active" aria-current="page">Home</Link>
        </li>

        <li className="nav-item">
          <Link to={"/register"} className="nav-link active" aria-current="page">Register</Link>
        </li>

        <li className="nav-item">
          <Link to={"/login"} className="nav-link active" aria-current="page">Login</Link>
        </li>
        
        <li className="nav-item">
          <Link to={"/cart"} className="nav-link active" aria-current="page">Cart (0)</Link>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Header