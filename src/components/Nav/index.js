import React from 'react'
import {Link} from 'react-router-dom'

const Nav = props => (
  <nav className="navbar navbar-inverse" style={{width: '100%', margin: 0}}>
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <Link className="navbar-brand" to="/">
        <p>Dank Gaming</p>
      </Link>
    </div>
    <div className="collapse navbar-collapse" id="myNavbar">
      <ul className="nav navbar-nav">
        <li className="active"><Link to="/Games">Juegos</Link></li>
      </ul>
      <ul className="nav navbar-nav navbar-right">
        <li><Link to="/signup"><span className="glyphicon glyphicon-user"></span> Regístrate</Link></li>
        <li><Link to="/login"><span className="glyphicon glyphicon-log-in"></span> Inicia sesión</Link></li>
      </ul>
    </div>
  </div>
</nav>
)

export default Nav
