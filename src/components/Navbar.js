import React from "react"
import "./Navbar.css"
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <img src="/assets/shared/desktop/logo.svg" alt="logo" />
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/stories">stories</Link>
          </li>
          <li>
            {" "}
            <Link to="/features">features</Link>
          </li>
          <li>
            {" "}
            <Link to="/pricing">pricing</Link>
          </li>
        </ul>
      </nav>
      <div>
        <Link to="/" className="get-link">
          get an invite
        </Link>
      </div>
    </div>
  )
}

export default Navbar
