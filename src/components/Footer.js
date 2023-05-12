import React from "react"
import "./Footer.css"
import ReactFacebook from "../social/facebook.svg"
import ReactYoutube from "../social/youtube.svg"
import ReactInstagram from "../social/twitter.svg"
import ReactPinterest from "../social/instagram.svg"
import ReactTwitter from "../social/pinterest.svg"
function Footer() {
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="footer-navbar">
          <div className="navbar-brand">
            <img className="img-logo" src="/assets/shared/desktop/logo copy.svg" alt="logo" />
          </div>

          <ul className="footer-nav">
            <li>home</li>
            <li>stories</li>
            <li>features</li>
            <li>pricing</li>
          </ul>

          <ul className="social-list">
            <li>
              <img src={ReactFacebook} alt="facebook" />
            </li>
            <li>
              <img src={ReactYoutube} alt="youtube" />
            </li>
            <li>
              <img src={ReactTwitter} alt="twitter" />
            </li>
            <li>
              <img src={ReactPinterest} alt="pinterest" />
            </li>
            <li>
              <img src={ReactInstagram} alt="instagram" />
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <div>
            <a href="/" className="get-link">
              get an invite
            </a>
          </div>
          <div>
            <p>Copyright 2019. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
