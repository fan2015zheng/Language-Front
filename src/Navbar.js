import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return(<>
    <nav className="navbar navbar-light navbar-expand-sm fixed-top _navbar-bg">
    
      <Link to="/">
        <span className="navbar-brand _navbar-brand">Happy Language</span>
      </Link>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav">
          <li className="nav-item dropdown"><span className="dropdown-toggle _dropdownText nav-link" data-toggle="dropdown">Chapters<span className="caret"></span></span>
            <ul className="dropdown-menu">
              <li className="dropdown-item"><Link to="/chapter/1">Chapter 1</Link></li>
              <li className="dropdown-item"><Link to="/chapter/2">Chapter 2</Link></li>
              <li className="dropdown-item"><Link to="/chapter/3">Chapter 3</Link></li>
            </ul>
          </li>
          <li className="nav-item dropdown"><span className="dropdown-toggle _dropdownText nav-link" data-toggle="dropdown">Languages<span className="caret"></span></span>
            <ul className="dropdown-menu">
              <li className="dropdown-item">English</li>
              <li className="dropdown-item">French</li>
              <li className="dropdown-item">Chinese</li>
              <li className="dropdown-item">German</li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  </>)
}

export default Navbar