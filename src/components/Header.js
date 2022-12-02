import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <div className="header-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="logo">
                <NavLink><img src="images/logo.jpg" alt="" /></NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <header className="header">
        <div className="container">
          <nav className="navbar navbar-inverse navbar-toggleable-md">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#cloapediamenu" aria-controls="cloapediamenu" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-md-center" id="cloapediamenu">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link color-pink-hover" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link color-pink-hover" to="/cat/6/Business">Business</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link color-red-hover" to="/cat/7/Sports">Sports</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link color-green-hover" to="/cat/5/Technology">Technology</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link color-grey-hover" to="/cat/9/International">International</NavLink>
                </li>
                <li className="nav-item">
                  {localStorage.getItem('token') ? (
                    <NavLink
                      className="nav-link color-grey-hover"
                      to="/user/login"
                      onClick={() => localStorage.removeItem("token")}
                    >
                      Logout
                    </NavLink>
                  ) : (
                    <NavLink
                      className="nav-link color-grey-hover"
                      to="/user/login"
                    >
                      Login
                    </NavLink>
                  )}
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Header