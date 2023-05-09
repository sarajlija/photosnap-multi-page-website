import React from "react"
import "./Navbar.css"

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-brand">
        <img src="/assets/shared/desktop/logo.svg" alt="logo" />
      </div>
      <nav>
        <ul>
          <li>stories</li>
          <li>features</li>
          <li>pricing</li>
        </ul>
      </nav>
      <div>
        <a href="/" className="get-link">
          get an invite
        </a>
      </div>
    </div>
  )
}

export default Navbar
